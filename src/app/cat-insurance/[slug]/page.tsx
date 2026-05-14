import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insurancePages } from '@/data/insurance-pages';
import { providers } from '@/data/providers';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return insurancePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = insurancePages.find((p) => p.slug === params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://catinsurance.co.nz/cat-insurance/${params.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

// Rotate through 4 custom hero images based on slug
const PAGE_IMAGES: Record<string, string> = {
  'best-cat-insurance-nz':                       '/hero-cats-3.jpg',  // group of cats
  'cheap-cat-insurance-nz':                      '/hero-cats-4.jpg',  // cat outdoors
  'cat-insurance-for-kittens-nz':                '/hero-cats-1.jpg',  // woman + cats
  'cat-insurance-for-older-cats-nz':             '/hero-cats-2.jpg',  // cat on sofa
  'cat-insurance-hereditary-conditions-nz':      '/hero-cats-3.jpg',  // group of cats
  'cat-insurance-no-excess-nz':                  '/hero-cats-4.jpg',  // cat outdoors
  'cat-insurance-auckland':                      '/hero-cats-1.jpg',
  'cat-insurance-wellington':                    '/hero-cats-2.jpg',
  'cat-insurance-christchurch':                  '/hero-cats-3.jpg',
  'cat-insurance-hamilton':                      '/hero-cats-4.jpg',
  'cat-insurance-tauranga':                      '/hero-cats-1.jpg',
  'cat-insurance-dunedin':                       '/hero-cats-2.jpg',
  'cat-insurance-napier-hastings':               '/hero-cats-3.jpg',
  'cat-insurance-palmerston-north':              '/hero-cats-4.jpg',
};

export default function InsuranceLandingPage({ params }: Props) {
  const page = insurancePages.find((p) => p.slug === params.slug);
  if (!page) notFound();

  const heroImage = PAGE_IMAGES[page.slug] ?? '/hero-cats-1.jpg';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const breadcrumbItems = page.city
    ? [
        { name: 'Home', href: '/' },
        { name: page.title, href: `/cat-insurance/${page.slug}` },
      ]
    : [
        { name: 'Home', href: '/' },
        { name: page.title, href: `/cat-insurance/${page.slug}` },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero — photo background */}
      <section className="relative text-white min-h-[55vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-900/60 to-emerald-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-md">{page.heroHeading}</h1>
          <p className="text-white/90 text-lg max-w-2xl mb-4">{page.heroSubheading}</p>
          {page.localStats && (
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg p-3 max-w-xl">
              <p className="text-sm text-emerald-100">{page.localStats}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-slate-600 text-lg leading-relaxed">{page.intro}</p>
              </div>

              {/* Body content */}
              <div className="prose prose-sm prose-slate max-w-none">
                {page.bodyContent.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**') && !para.includes('\n')) {
                    return <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">{para.replace(/\*\*/g, '')}</h3>;
                  }
                  return <p key={i} className="text-slate-600 mb-4 leading-relaxed">{para}</p>;
                })}
              </div>

              {/* Local vets */}
              {page.localVets && page.localVets.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h2 className="font-bold text-slate-900 mb-3">🏥 Local Vets in {page.city}</h2>
                  <ul className="space-y-1.5">
                    {page.localVets.map((vet) => (
                      <li key={vet} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-emerald-500">✓</span>
                        {vet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQs */}
              {page.faqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {page.faqs.map((faq) => (
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
                <h3 className="font-bold text-slate-900 mb-3">Compare Cat Insurance</h3>
                <p className="text-sm text-slate-600 mb-4">Compare all 6 NZ cat insurance providers to find the best cover for your cat.</p>
                <Link
                  href="/compare"
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors"
                >
                  Compare All Providers
                </Link>
              </div>

              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Get a Quote</h3>
                <div className="space-y-2">
                  {providers.slice(0, 5).map((p) => (
                    <a
                      key={p.slug}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-between py-2 px-3 rounded-lg border border-slate-100 hover:border-emerald-200 text-sm transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{p.logo}</span>
                        <div>
                          <div className="font-medium text-slate-700 text-xs">{p.name.split(' ')[0]}</div>
                          <div className="text-xs text-emerald-600">{p.monthlyFrom}/mo</div>
                        </div>
                      </span>
                      <span className="text-emerald-500 text-xs">Quote →</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Helpful Guides</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Best Cat Insurance NZ', href: '/cat-insurance/best-cat-insurance-nz' },
                    { label: 'Cheap Cat Insurance NZ', href: '/cat-insurance/cheap-cat-insurance-nz' },
                    { label: 'Kitten Insurance NZ', href: '/cat-insurance/cat-insurance-for-kittens-nz' },
                    { label: 'Senior Cat Insurance', href: '/cat-insurance/cat-insurance-for-older-cats-nz' },
                    { label: 'Hereditary Conditions', href: '/cat-insurance/cat-insurance-hereditary-conditions-nz' },
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
