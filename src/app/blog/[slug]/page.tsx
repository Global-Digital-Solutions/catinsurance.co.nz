import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'CatInsurance.co.nz',
      url: 'https://catinsurance.co.nz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CatInsurance.co.nz',
      url: 'https://catinsurance.co.nz',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://catinsurance.co.nz/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="h-72 overflow-hidden relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium bg-emerald-500 px-2 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-slate-300">{post.readTime}</span>
                <span className="text-xs text-slate-300">{post.date}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight max-w-3xl">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article content */}
            <article className="lg:col-span-2">
              <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-emerald-500 pl-4">
                {post.excerpt}
              </p>
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3">
                {post.content.split('\n\n').map((block, i) => {
                  if (block.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-4">{block.replace('## ', '')}</h2>;
                  }
                  if (block.startsWith('### ')) {
                    return <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-3">{block.replace('### ', '')}</h3>;
                  }
                  if (block.startsWith('| ')) {
                    // Table block — render as overflow scroll
                    const lines = block.split('\n').filter((l) => l.trim() && !l.startsWith('|--'));
                    const headers = lines[0].split('|').filter(Boolean).map((h) => h.trim());
                    const rows = lines.slice(1).map((l) => l.split('|').filter(Boolean).map((c) => c.trim()));
                    return (
                      <div key={i} className="overflow-x-auto my-6">
                        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                          <thead className="bg-slate-50">
                            <tr>
                              {headers.map((h) => (
                                <th key={h} className="text-left py-2 px-3 font-semibold text-slate-700 border-b border-slate-200">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {rows.map((row, ri) => (
                              <tr key={ri} className="hover:bg-slate-50">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="py-2 px-3 text-slate-600">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (block.startsWith('- ') || block.match(/^\d+\. /)) {
                    const items = block.split('\n').filter(Boolean);
                    return (
                      <ul key={i} className="my-4 space-y-1">
                        {items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-2 text-slate-600">
                            <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                            <span>{item.replace(/^[-\d.]\s+/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-slate-600 mb-4 leading-relaxed">{block}</p>;
                })}
              </div>
            </article>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3">Compare Cat Insurance</h3>
                <p className="text-sm text-slate-600 mb-4">Find the best cat insurance for your cat — compare all 6 NZ providers.</p>
                <Link
                  href="/compare"
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors"
                >
                  Compare Now →
                </Link>
              </div>

              {related.length > 0 && (
                <div className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-slate-700 group-hover:text-emerald-700 leading-snug">{r.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{r.readTime}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Best Cat Insurance NZ', href: '/cat-insurance/best-cat-insurance-nz' },
                    { label: 'Cheap Cat Insurance', href: '/cat-insurance/cheap-cat-insurance-nz' },
                    { label: 'Kitten Insurance', href: '/cat-insurance/cat-insurance-for-kittens-nz' },
                    { label: 'Senior Cat Insurance', href: '/cat-insurance/cat-insurance-for-older-cats-nz' },
                    { label: 'Compare Providers', href: '/compare' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
