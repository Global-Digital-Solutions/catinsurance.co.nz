import type { Metadata } from 'next';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';

export const metadata: Metadata = {
  title: 'Cat Insurance Coverage Types NZ — Compare Cover Options',
  description: 'Compare cat insurance coverage types in New Zealand. Accident only, accident and illness, comprehensive, dental, wellness and senior cat cover explained.',
  openGraph: {
    title: 'Cat Insurance Coverage Types NZ — Compare Cover Options',
    description: 'All six cat insurance coverage types explained — accident only, accident & illness, comprehensive, dental, wellness and senior cat cover.',
    url: 'https://catinsurance.co.nz/coverage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat Insurance Coverage Types NZ',
    description: 'All six cat insurance coverage types explained — from accident only to comprehensive cover.',
  },
};

const coverageCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cat Insurance Coverage Types NZ',
  url: 'https://catinsurance.co.nz/coverage',
  description: 'All six cat insurance coverage types available in New Zealand — from accident only to comprehensive cover.',
  publisher: {
    '@type': 'Organization',
    name: 'CatInsurance.co.nz',
    url: 'https://catinsurance.co.nz',
  },
  hasPart: [
    { '@type': 'WebPage', name: 'Accident Only Cover', url: 'https://catinsurance.co.nz/types/accident-only' },
    { '@type': 'WebPage', name: 'Accident & Illness Cover', url: 'https://catinsurance.co.nz/types/accident-illness' },
    { '@type': 'WebPage', name: 'Comprehensive Cover', url: 'https://catinsurance.co.nz/types/comprehensive' },
    { '@type': 'WebPage', name: 'Dental Care Cover', url: 'https://catinsurance.co.nz/types/dental-care' },
    { '@type': 'WebPage', name: 'Wellness Care', url: 'https://catinsurance.co.nz/types/wellness-care' },
    { '@type': 'WebPage', name: 'Senior Cat Insurance', url: 'https://catinsurance.co.nz/types/senior-cat' },
  ],
};

export default function CoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coverageCollectionSchema) }}
      />
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Cat Insurance Coverage Types</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            From basic accident cover to full comprehensive plans — find the right level of cover for your cat.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="group border border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 mb-2">{type.title}</h2>
                <p className="text-sm text-slate-500 mb-4">{type.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">From {type.monthlyFrom}</span>
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Which cover type is right for your cat?</h2>
          <p className="text-slate-600 mb-6">
            Compare all 6 providers and their plans side by side to find the best match for your cat&apos;s age, breed and your budget.
          </p>
          <Link
            href="/compare"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Compare All Providers →
          </Link>
        </div>
      </section>
    </>
  );
}
