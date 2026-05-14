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
      <section className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6', label: 'Providers Compared' },
              { value: '$11', label: 'Cover From/Month' },
              { value: '$25,000', label: 'Max Annual Cover' },
              { value: '1 in 10', label: 'Cats Insured in NZ' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Top-Rated Cat Insurance Providers</h2>
            <p className="text-slate-500 mt-2">Independent comparison — we don&apos;t favour any provider</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div key={p.slug} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl">{p.logo}</span>
                    <h3 className="font-semibold text-slate-900 mt-2 text-sm">{p.name}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColorMap[p.badgeColor] || 'bg-slate-100 text-slate-700'}`}>
                    {p.badge}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{p.tagline}</p>
                <div className="space-y-1.5 text-sm mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">From</span>
                    <span className="font-semibold text-slate-900">{p.monthlyFrom}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Annual limit</span>
                    <span className="font-medium text-slate-800">{p.annualLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Claims</span>
                    <span className="font-medium text-slate-800">{p.claimsTurnaround}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2 rounded-lg text-center transition-colors"
                  >
                    Get Quote
                  </a>
                  <Link
                    href="/compare"
                    className="flex-1 border border-slate-200 text-slate-700 hover:border-emerald-300 text-sm font-medium py-2 rounded-lg text-center transition-colors"
                  >
                    Compare
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Compare All 6 Providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Why insure your cat */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Insure Your Cat?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                New Zealand vet costs have risen 8–12% annually in recent years. A single emergency surgery can cost $3,000–$6,000. Cancer treatment can reach $15,000. Most NZ cat owners don&apos;t have this kind of money sitting aside for their pet.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🏥', title: 'Emergency surgery', cost: '$2,500–$6,000' },
                  { icon: '🦠', title: 'Cancer treatment', cost: '$3,000–$15,000' },
                  { icon: '🫀', title: 'Heart condition management', cost: '$1,500–$4,000/year' },
                  { icon: '💊', title: 'Diabetes management', cost: '$1,500–$3,000/year' },
                  { icon: '🦷', title: 'Dental procedure', cost: '$600–$2,000' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.title}</span>
                    </div>
                    <span className="text-sm font-semibold text-rose-600">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-emerald-600 mb-2">1 in 10</div>
                <p className="text-slate-700">Only 1 in 10 cat owners have insurance — a huge opportunity to protect your cat financially.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Key Benefits of Cat Insurance</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {[
                    'Pay predictable monthly premiums instead of surprise bills',
                    'Access specialist care without financial stress',
                    'Cover hereditary conditions in pedigree breeds',
                    'Protect against catastrophic costs ($10,000+)',
                    'Peace of mind when deciding on your cat\'s treatment',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Types of Cat Insurance Cover</h2>
            <p className="text-slate-500 mt-2">From basic accident cover to full comprehensive plans</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🚑', title: 'Accident Only', desc: 'Road accidents, falls, swallowed objects. Lowest cost option.', href: '/types/accident-only', from: 'From $11/mo' },
              { icon: '🏥', title: 'Accident & Illness', desc: 'Full accident cover plus infections, disease and most illnesses.', href: '/types/accident-illness', from: 'From $19/mo' },
              { icon: '🛡️', title: 'Comprehensive', desc: 'Full cover including hereditary conditions, cancer and specialists.', href: '/types/comprehensive', from: 'From $25/mo' },
              { icon: '🦷', title: 'Dental Care', desc: 'Add-on dental cover for procedures, extractions and dental disease.', href: '/types/dental-care', from: 'From $8/mo extra' },
              { icon: '💉', title: 'Wellness Care', desc: 'Vaccinations, check-ups, preventive treatments covered.', href: '/types/wellness-care', from: 'From $10/mo extra' },
              { icon: '🐈', title: 'Senior Cat Cover', desc: 'Specialist cover for cats over 7, including chronic conditions.', href: '/types/senior-cat', from: 'From $35/mo' },
            ].map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-emerald-700">{type.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{type.desc}</p>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{type.from}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cat Breeds */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Cat Insurance by Breed</h2>
            <p className="text-slate-500 mt-2">Different breeds have different health risks — find breed-specific insurance advice</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Domestic Shorthair', href: '/breeds/domestic-shorthair', icon: '🐱' },
              { name: 'Ragdoll', href: '/breeds/ragdoll', icon: '😸' },
              { name: 'Maine Coon', href: '/breeds/maine-coon', icon: '🦁' },
              { name: 'Persian', href: '/breeds/persian', icon: '👑' },
              { name: 'British Shorthair', href: '/breeds/british-shorthair', icon: '🎩' },
              { name: 'Bengal', href: '/breeds/bengal', icon: '🐆' },
              { name: 'Siamese', href: '/breeds/siamese', icon: '💙' },
              { name: 'Burmese', href: '/breeds/burmese', icon: '🍫' },
            ].map((breed) => (
              <Link
                key={breed.href}
                href={breed.href}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-emerald-300 hover:shadow-sm transition-all group"
              >
                <div className="text-3xl mb-2">{breed.icon}</div>
                <div className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">{breed.name}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/breeds" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
              View all 12 breeds →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Cat Insurance Guides</h2>
              <p className="text-slate-500 mt-1">Expert advice for cat owners</p>
            </div>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
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
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Quick Provider Comparison</h2>
            <p className="text-slate-400 mt-2">Key metrics at a glance — see our full comparison for complete details</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Provider</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">From</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Annual Limit</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Claims</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Hereditary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {providers.map((p) => (
                  <tr key={p.slug} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span>{p.logo}</span>
                        <span className="font-medium text-white">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">{p.monthlyFrom}/mo</td>
                    <td className="py-3 px-4 text-slate-300">{p.annualLimit}</td>
                    <td className="py-3 px-4 text-slate-300">{p.claimsTurnaround}</td>
                    <td className="py-3 px-4">
                      <span className={p.hereditary ? 'text-emerald-400' : 'text-red-400'}>
                        {p.hereditary ? '✓ Yes' : '✗ No'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/compare"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
            >
              View Full Comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Cat Insurance by Location</h2>
            <p className="text-slate-500 mt-2">Local guides for your city</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { city: 'Auckland', href: '/cat-insurance/cat-insurance-auckland' },
              { city: 'Wellington', href: '/cat-insurance/cat-insurance-wellington' },
              { city: 'Christchurch', href: '/cat-insurance/cat-insurance-christchurch' },
              { city: 'Hamilton', href: '/cat-insurance/cat-insurance-hamilton' },
              { city: 'Tauranga', href: '/cat-insurance/cat-insurance-tauranga' },
              { city: 'Dunedin', href: '/cat-insurance/cat-insurance-dunedin' },
              { city: 'Palmerston North', href: '/cat-insurance/cat-insurance-palmerston-north' },
              { city: 'Nelson', href: '/cat-insurance/cat-insurance-nelson' },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="border border-slate-200 rounded-lg p-4 text-center text-sm font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-all"
              >
                📍 {loc.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How much does cat insurance cost in NZ?', a: 'Cat insurance starts from $11/month for accident-only cover (Southern Cross AcciPet) and $19–$45/month for comprehensive accident and illness cover. Pedigree breeds and older cats attract higher premiums.' },
              { q: 'Which is the best cat insurance in NZ?', a: 'It depends on your cat\'s needs. SPCA Pet Insurance is best for fastest claims (1–2 days). PD Insurance offers 100% reimbursement with no co-pay. Pet-n-Sur accepts cats up to 11 years 11 months. Use our compare page to find the right fit.' },
              { q: 'Does cat insurance cover hereditary conditions?', a: 'Most NZ insurers cover hereditary conditions: SPCA Pet Insurance, Petcover, Cove, Pet-n-Sur and PD Insurance all include hereditary conditions. Southern Cross PetCare does NOT — making it unsuitable for pedigree breeds.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faqs" className="text-emerald-600 hover:text-emerald-700 font-medium">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
