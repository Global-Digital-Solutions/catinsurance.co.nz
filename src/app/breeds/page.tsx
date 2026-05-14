import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { catBreeds } from '@/data/breeds';

// Verified cat-only Unsplash photos, one per breed
const BREED_CARD_IMAGES: Record<string, string> = {
  'domestic-shorthair': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=75',
  'ragdoll':            '/hero-ragdoll.jpg',
  'maine-coon':         '/hero-maine-coon.jpg',
  'persian':            '/hero-persian.jpg',
  'british-shorthair':  'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&q=75',
  'bengal':             'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&q=75',
  'siamese':            'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&q=75',
  'burmese':            '/hero-burmese.jpg',
  'russian-blue':       'https://images.unsplash.com/photo-1479065476818-424362b0cf5f?w=400&q=75',
  'scottish-fold':      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75',
  'devon-rex':          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&q=75',
  'abyssinian':         'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&q=75',
};

export const metadata: Metadata = {
  title: 'Cat Insurance by Breed NZ — Find Cover for Your Cat Breed',
  description: 'Find cat insurance advice for your specific breed in New Zealand. Compare insurance for Ragdolls, Maine Coons, Persians, British Shorthairs and more.',
};

export default function BreedsPage() {
  return (
    <>
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
