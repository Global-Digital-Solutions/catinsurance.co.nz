import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { catBreeds } from '@/data/breeds';

// Verified cat-only Unsplash photos, one per breed
const BREED_CARD_IMAGES: Record<string, string> = {
  'domestic-shorthair': '/hero-domestic-shorthair.jpg',
  'ragdoll':            '/hero-ragdoll.jpg',
  'maine-coon':         '/hero-maine-coon.jpg',
  'persian':            '/hero-persian.jpg',
  'british-shorthair':  '/hero-british-shorthair.jpg',
  'bengal':             '/hero-bengal.jpg',
  'siamese':            '/hero-siamese.jpg',
  'burmese':            '/hero-burmese.jpg',
  'russian-blue':       '/hero-russian-blue.jpg',
  'scottish-fold':      '/hero-scottish-fold.jpg',
  'devon-rex':          '/hero-devon-rex.jpg',
  'abyssinian':         '/hero-abyssinian.jpg',
};

export const metadata: Metadata = {
  title: 'Cat Insurance by Breed NZ — Find Cover for Your Cat Breed',
  description: 'Find cat insurance advice for your specific breed in New Zealand. Compare insurance for Ragdolls, Maine Coons, Persians, British Shorthairs and more.',
  openGraph: {
    title: 'Cat Insurance by Breed NZ — Find Cover for Your Cat Breed',
    description: 'Breed-specific cat insurance advice for Ragdolls, Maine Coons, Persians, British Shorthairs, Bengals and all popular NZ breeds.',
    url: 'https://catinsurance.co.nz/breeds',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat Insurance by Breed NZ',
    description: 'Breed-specific cat insurance advice for all popular NZ breeds.',
  },
};

const breedsCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cat Insurance by Breed NZ',
  url: 'https://catinsurance.co.nz/breeds',
  description: 'Breed-specific cat insurance guidance for Ragdolls, Maine Coons, Persians, British Shorthairs, Bengals and all popular NZ cat breeds.',
  publisher: {
    '@type': 'Organization',
    name: 'CatInsurance.co.nz',
    url: 'https://catinsurance.co.nz',
  },
  hasPart: [
    { '@type': 'WebPage', name: 'Domestic Shorthair Insurance', url: 'https://catinsurance.co.nz/breeds/domestic-shorthair' },
    { '@type': 'WebPage', name: 'Ragdoll Insurance', url: 'https://catinsurance.co.nz/breeds/ragdoll' },
    { '@type': 'WebPage', name: 'Maine Coon Insurance', url: 'https://catinsurance.co.nz/breeds/maine-coon' },
    { '@type': 'WebPage', name: 'Persian Insurance', url: 'https://catinsurance.co.nz/breeds/persian' },
    { '@type': 'WebPage', name: 'British Shorthair Insurance', url: 'https://catinsurance.co.nz/breeds/british-shorthair' },
    { '@type': 'WebPage', name: 'Bengal Insurance', url: 'https://catinsurance.co.nz/breeds/bengal' },
    { '@type': 'WebPage', name: 'Siamese Insurance', url: 'https://catinsurance.co.nz/breeds/siamese' },
    { '@type': 'WebPage', name: 'Burmese Insurance', url: 'https://catinsurance.co.nz/breeds/burmese' },
    { '@type': 'WebPage', name: 'Russian Blue Insurance', url: 'https://catinsurance.co.nz/breeds/russian-blue' },
    { '@type': 'WebPage', name: 'Scottish Fold Insurance', url: 'https://catinsurance.co.nz/breeds/scottish-fold' },
    { '@type': 'WebPage', name: 'Devon Rex Insurance', url: 'https://catinsurance.co.nz/breeds/devon-rex' },
    { '@type': 'WebPage', name: 'Abyssinian Insurance', url: 'https://catinsurance.co.nz/breeds/abyssinian' },
  ],
};

export default function BreedsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breedsCollectionSchema) }}
      />
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Cat Insurance by Breed</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Different cat breeds have different health risks — and different insurance needs. Find breed-specific guidance for NZ cat owners.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds.map((breed) => (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="group border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-md transition-all"
              >
                {/* Breed photo */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={BREED_CARD_IMAGES[breed.slug] ?? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=75'}
                    alt={`${breed.name} cat`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/70 to-transparent px-3 py-2">
                    <span className="text-white font-bold text-sm">{breed.name}</span>
                  </div>
                </div>
                <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{breed.icon}</span>
                  <div className="text-xs text-slate-500">{breed.origin} · {breed.lifespan}</div>
                </div>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{breed.description}</p>
                <div className="space-y-1.5 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Insurance from</span>
                    <span className="font-semibold text-emerald-600">{breed.avgMonthlyPremium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Popular in NZ</span>
                    <span className={`font-medium ${breed.popularInNZ ? 'text-emerald-600' : 'text-slate-500'}`}>
                      {breed.popularInNZ ? '✓ Yes' : 'Less common'}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-500 mb-1">Key health risks:</div>
                <div className="flex flex-wrap gap-1">
                  {breed.healthRisks.slice(0, 2).map((risk) => (
                    <span key={risk} className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full">{risk}</span>
                  ))}
                  {breed.healthRisks.length > 2 && (
                    <span className="text-xs text-slate-400">+{breed.healthRisks.length - 2} more</span>
                  )}
                </div>
                </div>{/* end p-5 */}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
