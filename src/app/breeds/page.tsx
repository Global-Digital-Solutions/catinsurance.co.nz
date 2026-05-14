import type { Metadata } from 'next';
import Link from 'next/link';
import { catBreeds } from '@/data/breeds';

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
                className="group border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{breed.icon}</span>
                  <div>
                    <h2 className="font-bold text-slate-900 group-hover:text-emerald-700">{breed.name}</h2>
                    <div className="text-xs text-slate-500">{breed.origin} · {breed.lifespan}</div>
                  </div>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
