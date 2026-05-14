import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';
import { providers } from '@/data/providers';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return coverageTypes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = coverageTypes.find((t) => t.slug === params.slug);
  if (!type) return {};
  return {
    title: type.metaTitle,
    description: type.metaDescription,
    openGraph: {
      title: type.metaTitle,
      description: type.metaDescription,
      url: `https://catinsurance.co.nz/types/${params.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: type.metaTitle,
      description: type.metaDescription,
    },
  };
}

const COVERAGE_IMAGES: Record<string, string> = {
  'accident-only':    '/hero-cats-1.jpg',
  'accident-illness': '/hero-cats-2.jpg',
  'comprehensive':    '/hero-cats-3.jpg',
  'dental-care':      '/hero-cats-4.jpg',
  'wellness-care':    '/hero-cats-1.jpg',
  'senior-cat':       '/hero-cats-2.jpg',
};

export default function CoverageTypePage({ params }: Props) {
  const type = coverageTypes.find((t) => t.slug === params.slug);
  if (!type) notFound();

  const heroImage = COVERAGE_IMAGES[type.slug] ?? '/hero-cats-1.jpg';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: type.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Coverage Types', href: '/coverage' },
          { name: type.title, href: `/types/${type.slug}` },
        ]}
      />

      {/* Hero — photo background */}
      <section className="relative text-white min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/55 to-emerald-900/25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl drop-shadow-lg">{type.icon}</span>
            <span className="text-sm font-medium bg-emerald-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
              Coverage Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-md">{type.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl mb-5">{type.description}</p>
          <div className="flex items-center gap-4">
            <span className="bg-emerald-500/80 backdrop-blur-sm border border-emerald-400/40 px-4 py-1.5 rounded-full text-sm font-semibold">
              From {type.monthlyFrom}
            </span>
            <Link href="/compare" className="text-white/80 hover:text-white text-sm underline underline-offset-2">
              Compare all providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {type.details && (
                <div className="bg-slate-50 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-3">What&apos;s Included</h2>
                  <p className="text-sm text-slate-700 leading-relaxed">{type.details}</p>
                </div>
              )}

              {type.longFormSections?.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                  <div className="prose prose-sm prose-slate max-w-none">
                    {section.body.split('\n\n').map((para, i) => (
                      <p key={i} className="text-slate-600 mb-3 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* FAQs */}
              {type.faqs && type.faqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {type.faqs.map((faq) => (
                      <div key={faq.q} className="border border-slate-200 rounded-xl p-4">
                        <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                        <p className="text-sm text-slate-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3">Compare Providers</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Not all providers offer this type of cover. Compare side by side to find the best match.
                </p>
                <Link
                  href="/compare"
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors"
                >
                  Compare All 6 Providers
                </Link>
              </div>

              {/* Provider quick links */}
              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Get a Quote</h3>
                <div className="space-y-2">
                  {providers.slice(0, 4).map((p) => (
                    <a
                      key={p.slug}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-between py-2 px-3 rounded-lg border border-slate-100 hover:border-emerald-200 text-sm transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{p.logo}</span>
                        <span className="font-medium text-slate-700">{p.name.split(' ')[0]}</span>
                      </span>
                      <span className="text-emerald-500 text-xs">Quote →</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Internal links */}
              {type.internalLinks && (
                <div className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                  <div className="space-y-2">
                    {type.internalLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-emerald-600 hover:text-emerald-700"
                      >
                        {link.text} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
