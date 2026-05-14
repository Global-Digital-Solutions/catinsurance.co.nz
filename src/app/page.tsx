import type { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Cat Insurance — Compare Cat Insurance Providers | CatInsurance.co.nz',
  description: 'Compare cat insurance in New Zealand. Find the best cover for your cat from SPCA Pet Insurance, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance. Cat cover from $11/month.',
  openGraph: {
    title: 'Cat Insurance — Compare Cat Insurance Providers',
    description: 'New Zealand\'s independent cat insurance comparison site. Compare 6 providers, find the best cover for your cat.',
    url: 'https://catinsurance.co.nz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat Insurance — Compare & Save | CatInsurance.co.nz',
    description: 'Compare 6 NZ cat insurance providers side by side. Cover from $11/month. 100% independent.',
  },
};

const badgeColorMap: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  violet: 'bg-violet-100 text-violet-700',
  sky: 'bg-sky-100 text-sky-700',
  amber: 'bg-amber-100 text-amber-700',
  teal: 'bg-teal-100 text-teal-700',
  rose: 'bg-rose-100 text-rose-700',
};

export default function HomePage() {
  const featured = providers.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero — full viewport height */}
      <section className="relative min-h-screen flex items-center text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-cats-1.jpg)' }}
        />
        {/* Gradient overlay — stronger on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-900/75 to-slate-900/30" />
        {/* Scroll hint arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 border border-emerald-400/40 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="text-emerald-200">🐱</span>
              <span className="text-emerald-100">Compare 6 Cat Insurance Providers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Cat Insurance —<br />
              <span className="text-emerald-300">Compare &amp; Save</span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Only 1 in 10 Kiwi cat owners insure their cats — leaving most exposed to vet bills of $3,000–$15,000. Compare six cat insurance providers side by side and find the right cover for your cat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/compare"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-center shadow-lg"
              >
                Compare All Providers →
              </Link>
              <Link
                href="/cat-insurance/best-cat-insurance-nz"
                className="border border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-6 py-3.5 rounded-lg transition-colors text-center"
              >
                Best Cat Insurance NZ
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-emerald-200">
              <span>✓ 6 providers compared</span>
              <span>✓ From $11/month</span>
              <span>✓ 100% independent</span>
              <span>✓ Updated 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6', label: 'Providers Compared' },
              { value: '$11', label: 'Cover From/Month' },
              { value: '$25,000', label: 'Max Annual Cover' },
              { value: '1 in 10', label: 'Cats Currently Insured' },
            ].map((stat) => (
              <div key={stat.label} className="border-r border-white/20 last:border-r-0">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-emerald-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">Independent Comparison</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Top-Rated Cat Insurance Providers</h2>
            <p className="text-slate-400 mt-2 text-lg">We don&apos;t favour any provider — every comparison is 100% independent</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div key={p.slug} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/30 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/10 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{p.logo}</span>
                    <h3 className="font-bold text-white text-sm leading-tight">{p.name}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColorMap[p.badgeColor] || 'bg-slate-700 text-slate-300'}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-400 mb-5 italic">&ldquo;{p.tagline}&rdquo;</p>
                  <div className="space-y-2.5 text-sm mb-6">
                    {[
                      { label: 'Monthly from', value: `${p.monthlyFrom}/month`, highlight: true },
                      { label: 'Annual limit', value: p.annualLimit, highlight: false },
                      { label: 'Claims turnaround', value: p.claimsTurnaround, highlight: false },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-1.5 border-b border-slate-700">
                        <span className="text-slate-500">{row.label}</span>
                        <span className={`font-semibold ${row.highlight ? 'text-emerald-400 text-base' : 'text-slate-200'}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors shadow-lg shadow-emerald-900/40"
                    >
                      Get Quote →
                    </a>
                    <Link
                      href="/compare"
                      className="flex-1 border border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 text-sm font-medium py-2.5 rounded-xl text-center transition-colors"
                    >
                      Compare
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-900/50 text-lg"
            >
              Compare All 6 Providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Why insure your cat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3">The Real Cost of Cat Care</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Insure Your Cat?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                NZ vet costs have risen 8–12% annually. A single emergency surgery can cost $3,000–$6,000. Cancer treatment can reach $15,000. Cat insurance turns a financial crisis into a manageable monthly expense.
              </p>
              <div className="space-y-2.5">
                {[
                  { icon: '🏥', title: 'Emergency surgery', cost: '$2,500–$6,000' },
                  { icon: '🦠', title: 'Cancer treatment', cost: '$3,000–$15,000' },
                  { icon: '🫀', title: 'Heart condition management', cost: '$1,500–$4,000/yr' },
                  { icon: '💊', title: 'Diabetes management', cost: '$1,500–$3,000/yr' },
                  { icon: '🦷', title: 'Dental procedure', cost: '$600–$2,000' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                    </div>
                    <span className="text-sm font-bold text-rose-600 bg-white px-2.5 py-1 rounded-lg border border-rose-200">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-xl shadow-emerald-200">
                <div className="text-6xl font-black mb-2">1 in 10</div>
                <p className="text-emerald-100 text-lg leading-relaxed">Only 1 in 10 Kiwi cat owners have insurance — leaving 9 out of 10 exposed to vet bills they may not be able to afford.</p>
                <Link href="/compare" className="inline-block mt-5 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors text-sm">
                  Compare Providers →
                </Link>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Benefits of Cat Insurance</h3>
                <ul className="space-y-3">
                  {[
                    'Pay predictable monthly premiums instead of surprise bills',
                    'Access specialist care without financial stress',
                    'Cover hereditary conditions in pedigree breeds',
                    'Protect against catastrophic costs ($10,000+)',
                    'Peace of mind when deciding on treatment',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-emerald-600 text-xs font-bold">✓</span>
                      </span>
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">Find Your Cover</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Types of Cat Insurance Cover</h2>
            <p className="text-slate-400 mt-2 text-lg">From basic accident cover to full comprehensive plans</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🚑', title: 'Accident Only', desc: 'Road accidents, falls, swallowed objects. Lowest cost option for budget-conscious owners.', href: '/types/accident-only', from: 'From $11/mo', color: 'from-rose-500/20 to-rose-600/10' },
              { icon: '🏥', title: 'Accident & Illness', desc: 'Full accident cover plus infections, disease and most illnesses. Most popular plan type.', href: '/types/accident-illness', from: 'From $19/mo', color: 'from-amber-500/20 to-amber-600/10' },
              { icon: '🛡️', title: 'Comprehensive', desc: 'Full cover including hereditary conditions, cancer and specialist referrals. Best all-round protection.', href: '/types/comprehensive', from: 'From $25/mo', color: 'from-emerald-500/20 to-emerald-600/10' },
              { icon: '🦷', title: 'Dental Care', desc: 'Add-on dental cover for procedures, extractions and dental disease. Often overlooked but essential.', href: '/types/dental-care', from: 'From $8/mo extra', color: 'from-sky-500/20 to-sky-600/10' },
              { icon: '💉', title: 'Wellness Care', desc: 'Vaccinations, check-ups, flea and worm treatments. Keep your cat healthy proactively.', href: '/types/wellness-care', from: 'From $10/mo extra', color: 'from-violet-500/20 to-violet-600/10' },
              { icon: '🐈', title: 'Senior Cat Cover', desc: 'Specialist cover for cats over 7, including chronic conditions. Pet-n-Sur leads this category.', href: '/types/senior-cat', from: 'From $35/mo', color: 'from-teal-500/20 to-teal-600/10' },
            ].map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/30 transition-all duration-300 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-2xl mb-4 border border-white/10`}>
                  {type.icon}
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{type.title}</h3>
                <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">{type.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-emerald-400">{type.from}</span>
                  <span className="text-xs text-slate-500 group-hover:text-emerald-400 transition-colors">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cat Breeds */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3">Breed-Specific Advice</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Cat Insurance by Breed</h2>
            <p className="text-slate-600 mt-2 text-lg">Different breeds have different health risks — get breed-specific insurance guidance</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'Domestic Shorthair', href: '/breeds/domestic-shorthair', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&q=70' },
              { name: 'Ragdoll', href: '/breeds/ragdoll', img: 'https://images.unsplash.com/photo-1573865526537-6a6e5b20a869?w=300&q=70' },
              { name: 'Maine Coon', href: '/breeds/maine-coon', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&q=70' },
              { name: 'Persian', href: '/breeds/persian', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&q=70' },
              { name: 'British Shorthair', href: '/breeds/british-shorthair', img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&q=70' },
              { name: 'Bengal', href: '/breeds/bengal', img: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=300&q=70' },
              { name: 'Siamese', href: '/breeds/siamese', img: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300&q=70' },
              { name: 'Burmese', href: '/breeds/burmese', img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=300&q=70' },
            ].map((breed) => (
              <Link
                key={breed.href}
                href={breed.href}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square"
              >
                <img
                  src={breed.img}
                  alt={`${breed.name} cat`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-3">
                  <div className="text-white font-semibold text-sm leading-tight">{breed.name}</div>
                  <div className="text-emerald-400 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">View guide →</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/breeds"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              View All 12 Breeds →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3">Expert Advice</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Cat Insurance Guides</h2>
              <p className="text-slate-500 mt-2 text-lg">Researched, written and updated by our cat insurance specialists</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold text-sm border border-emerald-200 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold bg-emerald-500 text-white px-2.5 py-1 rounded-full shadow">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-400">🕐 {post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">Read article →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">Quick Snapshot</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Provider Comparison at a Glance</h2>
            <p className="text-slate-400 mt-2 text-lg">Key metrics side by side — see the full comparison for complete details</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-700 shadow-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="text-left py-4 px-5 text-slate-400 font-semibold">Provider</th>
                  <th className="text-left py-4 px-5 text-slate-400 font-semibold">Monthly From</th>
                  <th className="text-left py-4 px-5 text-slate-400 font-semibold">Annual Limit</th>
                  <th className="text-left py-4 px-5 text-slate-400 font-semibold">Claims</th>
                  <th className="text-left py-4 px-5 text-slate-400 font-semibold">Hereditary</th>
                  <th className="py-4 px-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {providers.map((p) => (
                  <tr key={p.slug} className="hover:bg-slate-800/60 transition-colors group">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{p.logo}</span>
                        <span className="font-semibold text-white text-xs leading-tight">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-emerald-400 font-bold text-base">{p.monthlyFrom}/mo</td>
                    <td className="py-4 px-5 text-slate-300 text-xs">{p.annualLimit}</td>
                    <td className="py-4 px-5 text-slate-300 text-xs">{p.claimsTurnaround}</td>
                    <td className="py-4 px-5">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.hereditary ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                        {p.hereditary ? '✓ Yes' : '✗ No'}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <a href={p.url} target="_blank" rel="noopener noreferrer nofollow"
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Get Quote →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/compare"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-block text-lg shadow-lg shadow-emerald-900/50"
            >
              View Full Side-by-Side Comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-200 uppercase mb-3">Local Guides</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Cat Insurance by Location</h2>
            <p className="text-emerald-100 mt-2 text-lg">Local vet cost data and provider guides for your city</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { city: 'Auckland', href: '/cat-insurance/cat-insurance-auckland', emoji: '🌆' },
              { city: 'Wellington', href: '/cat-insurance/cat-insurance-wellington', emoji: '🌬️' },
              { city: 'Christchurch', href: '/cat-insurance/cat-insurance-christchurch', emoji: '🌿' },
              { city: 'Hamilton', href: '/cat-insurance/cat-insurance-hamilton', emoji: '🌾' },
              { city: 'Tauranga', href: '/cat-insurance/cat-insurance-tauranga', emoji: '☀️' },
              { city: 'Dunedin', href: '/cat-insurance/cat-insurance-dunedin', emoji: '❄️' },
              { city: 'Palmerston North', href: '/cat-insurance/cat-insurance-palmerston-north', emoji: '🌳' },
              { city: 'Nelson', href: '/cat-insurance/cat-insurance-nelson', emoji: '⛵' },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 hover:border-white/40 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-2">{loc.emoji}</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-200 transition-colors">{loc.city}</div>
                <div className="text-xs text-emerald-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">View guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How much does cat insurance cost in NZ?', a: 'Cat insurance starts from $11/month for accident-only cover (Southern Cross AcciPet) and $19–$45/month for comprehensive accident and illness cover. Pedigree breeds and older cats attract higher premiums.' },
              { q: 'Which is the best cat insurance in NZ?', a: 'It depends on your cat\'s needs. SPCA Pet Insurance is best for fastest claims (1–2 days). PD Insurance offers 100% reimbursement with no co-pay. Pet-n-Sur accepts cats up to 11 years 11 months. Use our compare page to find the right fit.' },
              { q: 'Does cat insurance cover hereditary conditions?', a: 'Most NZ insurers cover hereditary conditions: SPCA Pet Insurance, Petcover, Cove, Pet-n-Sur and PD Insurance all include hereditary conditions. Southern Cross PetCare does NOT — making it unsuitable for pedigree breeds.' },
            ].map((faq, i) => (
              <div key={faq.q} className="bg-white border-l-4 border-emerald-500 rounded-r-2xl rounded-l-none shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-black text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold border border-emerald-300 px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
