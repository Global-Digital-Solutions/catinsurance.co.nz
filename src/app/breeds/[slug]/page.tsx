import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { catBreeds } from '@/data/breeds';
import { providers } from '@/data/providers';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return catBreeds.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const breed = catBreeds.find((b) => b.slug === params.slug);
  if (!breed) return {};
  return {
    title: breed.metaTitle,
    description: breed.metaDescription,
  };
}

export default function BreedPage({ params }: Props) {
  const breed = catBreeds.find((b) => b.slug === params.slug);
  if (!breed) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: breed.faqs.map((faq) => ({
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
          { name: 'Cat Breeds', href: '/breeds' },
          { name: breed.name, href: `/breeds/${breed.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{breed.icon}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{breed.name} Cat Insurance NZ</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">{breed.description}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="bg-emerald-500/30 border border-emerald-400/40 px-3 py-1 rounded-full">
              🌍 {breed.origin}
            </span>
            <span className="bg-emerald-500/30 border border-emerald-400/40 px-3 py-1 rounded-full">
              📅 {breed.lifespan}
            </span>
            <span className="bg-emerald-500/30 border border-emerald-400/40 px-3 py-1 rounded-full">
              ⚖️ {breed.weight}
            </span>
            <span className="bg-emerald-500/30 border border-emerald-400/40 px-3 py-1 rounded-full">
              💰 Insurance from {breed.avgMonthlyPremium}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Health Risks */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">⚠️ Common Health Risks in {breed.name} Cats</h2>
                <div className="flex flex-wrap gap-2">
                  {breed.healthRisks.map((risk) => (
                    <span key={risk} className="text-sm bg-white border border-rose-200 text-rose-700 px-3 py-1 rounded-full font-medium">
                      {risk}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white border border-rose-100 rounded-lg">
                  <p className="text-sm font-semibold text-slate-700 mb-1">💡 Insurance Tip</p>
                  <p className="text-sm text-slate-600">{breed.insuranceTip}</p>
                </div>
              </div>

              {/* Long-form content */}
              <div className="prose prose-sm prose-slate max-w-none">
                {breed.longFormContent.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-600 mb-4 leading-relaxed">{para}</p>
                ))}
              </div>

              {/* FAQs */}
              {breed.faqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    {breed.name} Cat Insurance — FAQs
                  </h2>
                  <div className="space-y-3">
                    {breed.faqs.map((faq) => (
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
                <h3 className="font-bold text-slate-900 mb-1">Breed Details</h3>
                <div className="space-y-2 text-sm mt-3">
                  <div className="flex justify-between"><span className="text-slate-500">Origin</span><span className="font-medium">{breed.origin}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Lifespan</span><span className="font-medium">{breed.lifespan}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Weight</span><span className="font-medium">{breed.weight}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Coat</span><span className="font-medium">{breed.coatType}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Popular in NZ</span><span className={`font-medium ${breed.popularInNZ ? 'text-emerald-600' : 'text-slate-500'}`}>{breed.popularInNZ ? 'Yes' : 'Less common'}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Insurance from</span><span className="font-semibold text-emerald-600">{breed.avgMonthlyPremium}</span></div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Get a Quote</h3>
                <div className="space-y-2">
                  {providers.filter((p) => p.hereditary).map((p) => (
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
                <p className="text-xs text-slate-400 mt-3">Showing providers that cover hereditary conditions</p>
              </div>

              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Other Breeds</h3>
                <div className="space-y-1">
                  {catBreeds.filter((b) => b.slug !== breed.slug).slice(0, 6).map((b) => (
                    <Link
                      key={b.slug}
                      href={`/breeds/${b.slug}`}
                      className="flex items-center gap-2 py-1.5 text-sm text-slate-600 hover:text-emerald-700"
                    >
                      <span>{b.icon}</span>
                      <span>{b.name}</span>
                    </Link>
                  ))}
                  <Link href="/breeds" className="block text-sm text-emerald-600 hover:text-emerald-700 mt-2">
                    View all 12 breeds →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
