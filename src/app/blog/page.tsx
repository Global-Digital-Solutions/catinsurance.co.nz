import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Cat Insurance Blog NZ — Expert Guides & Advice',
  description: 'Expert cat insurance guides for New Zealand cat owners. Breed guides, policy comparisons, claims advice and money-saving tips.',
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Cat Insurance Blog</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Expert guides and advice for New Zealand cat owners — from buying guides to breed-specific insurance tips.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((p) => p.category === category)
                  .map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="h-44 overflow-hidden bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{post.category}</span>
                          <span className="text-xs text-slate-400">{post.readTime}</span>
                          <span className="text-xs text-slate-400">{post.date}</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 leading-snug group-hover:text-emerald-700 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
