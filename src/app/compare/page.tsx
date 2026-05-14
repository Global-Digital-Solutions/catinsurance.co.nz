import type { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';

export const metadata: Metadata = {
  title: 'Compare Cat Insurance NZ — All 6 Providers Side by Side',
  description: 'Compare all 6 NZ cat insurance providers side by side. SPCA Pet Insurance, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance compared on price, cover, claims and more.',
};

const badgeColorMap: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  violet: 'bg-violet-100 text-violet-700',
  sky: 'bg-sky-100 text-sky-700',
  amber: 'bg-amber-100 text-amber-700',
  teal: 'bg-teal-100 text-teal-700',
  rose: 'bg-rose-100 text-rose-700',
};

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Compare Cat Insurance</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            All 6 cat insurance providers compared side by side — price, cover, claims speed and key features.
          </p>
        </div>
      </section>

      {/* Provider Cards */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((p) => (
              <div key={p.slug} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{p.logo}</span>
                      <div>
                        <h2 className="font-bold text-slate-900 text-sm leading-tight">{p.name}</h2>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-amber-400 text-xs">{'★'.repeat(Math.floor(p.rating))}</span>
                          <span className="text-xs text-slate-500">{p.rating} ({p.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${badgeColorMap[p.badgeColor] || 'bg-slate-100 text-slate-700'}`}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{p.tagline}</p>
                </div>

                <div className="p-5 grid grid-cols-2 gap-3 text-xs">
                  {[
                    ['From', p.monthlyFrom + '/mo'],
                    ['Annual Limit', p.annualLimit],
                    ['Excess', p.excess],
                    ['Co-Pay', p.coPay],
                    ['Benefit Rate', p.benefitRate],
                    ['Entry Age', p.maxEntryAge],
                    ['Claims', p.claimsTurnaround],
                    ['Founded', p.founded],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-slate-400 mb-0.5">{label}</div>
                      <div className="font-semibold text-slate-800">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      { label: 'Hereditary', value: p.hereditary },
                      { label: 'Online Portal', value: p.onlinePortal },
                      { label: 'Lifetime Cover', value: p.lifetimeCover },
                      { label: 'Dental Optional', value: p.dentalOptional },
                      { label: 'Wellness Optional', value: p.wellnessOptional },
                    ].map((feature) => (
                      <span
                        key={feature.label}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          feature.value
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-slate-100 text-slate-400 line-through'
                        }`}
                      >
                        {feature.label}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-slate-700 mb-1.5">Highlights</div>
                    <ul className="space-y-1">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <span className="text-emerald-500 mt-0.5">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-slate-700 mb-1.5">Pre-existing Conditions</div>
                    <p className="text-xs text-slate-500">{p.preExisting}</p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-14 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Full Feature Comparison</h2>
            <p className="text-slate-400 text-sm">All 6 providers compared across every key policy feature</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-700 shadow-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="text-left py-4 px-5 text-slate-300 font-semibold text-xs uppercase tracking-wider w-40">Feature</th>
                  {providers.map((p) => (
                    <th key={p.slug} className="text-center py-4 px-3 min-w-[110px]">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-2xl">{p.logo}</span>
                        <span className="text-white font-bold text-xs leading-tight">{p.name.split(' ')[0]}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColorMap[p.badgeColor] || 'bg-slate-700 text-slate-300'}`}>
                          {p.badge.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-slate-900 divide-y divide-slate-800">
                {/* Price row — highlighted */}
                <tr className="bg-emerald-900/40 border-b border-emerald-700/40">
                  <td className="py-4 px-5 font-bold text-emerald-300 text-xs uppercase tracking-wide">Monthly From</td>
                  {providers.map((p) => (
                    <td key={p.slug} className="py-4 px-3 text-center">
                      <span className="text-emerald-400 font-bold text-base">{p.monthlyFrom}</span>
                      <span className="text-emerald-600 text-xs">/mo</span>
                    </td>
                  ))}
                </tr>
                {[
                  { label: 'Annual Limit', key: 'annualLimit' as const },
                  { label: 'Excess', key: 'excess' as const },
                  { label: 'Co-Payment', key: 'coPay' as const },
                  { label: 'Benefit Rate', key: 'benefitRate' as const },
                  { label: 'Entry Age', key: 'maxEntryAge' as const },
                  { label: 'Claims Turnaround', key: 'claimsTurnaround' as const },
                ].map(({ label, key }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-slate-900 hover:bg-slate-800/60' : 'bg-slate-800/40 hover:bg-slate-800/60'}>
                    <td className="py-3.5 px-5 font-medium text-slate-300 text-xs">{label}</td>
                    {providers.map((p) => (
                      <td key={p.slug} className="py-3.5 px-3 text-center text-slate-300 text-xs leading-snug">{p[key]}</td>
                    ))}
                  </tr>
                ))}
                {/* Boolean feature rows */}
                <tr className="bg-slate-800/60">
                  <td colSpan={providers.length + 1} className="py-2 px-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Policy Features</td>
                </tr>
                {[
                  { label: 'Hereditary Conditions', key: 'hereditary' as const },
                  { label: 'Online Portal', key: 'onlinePortal' as const },
                  { label: 'Lifetime Cover', key: 'lifetimeCover' as const },
                  { label: 'Dental (Optional)', key: 'dentalOptional' as const },
                  { label: 'Wellness (Optional)', key: 'wellnessOptional' as const },
                ].map(({ label, key }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-slate-900 hover:bg-slate-800/60' : 'bg-slate-800/40 hover:bg-slate-800/60'}>
                    <td className="py-3.5 px-5 font-medium text-slate-300 text-xs">{label}</td>
                    {providers.map((p) => (
                      <td key={p.slug} className="py-3.5 px-3 text-center">
                        {p[key] ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm">✓</span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700/50 text-slate-600 text-sm">✕</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Get Quote row */}
                <tr className="bg-slate-800/80 border-t border-slate-700">
                  <td className="py-4 px-5 font-bold text-white text-xs uppercase tracking-wide">Get a Quote</td>
                  {providers.map((p) => (
                    <td key={p.slug} className="py-4 px-3 text-center">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                      >
                        Get Quote →
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Data based on publicly available information as of 2026. Always verify current terms directly with the insurer before purchasing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which is right for your cat?</h2>
          <p className="text-slate-600 mb-6">Read our guides on finding the best cover for your cat&apos;s specific needs.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/cat-insurance/best-cat-insurance-nz" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Best Cat Insurance NZ
            </Link>
            <Link href="/cat-insurance/cheap-cat-insurance-nz" className="border border-emerald-300 text-emerald-700 hover:bg-emerald-100 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Cheap Cat Insurance NZ
            </Link>
            <Link href="/cat-insurance/cat-insurance-for-older-cats-nz" className="border border-emerald-300 text-emerald-700 hover:bg-emerald-100 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Senior Cat Insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
