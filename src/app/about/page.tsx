import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About CatInsurance.co.nz — NZ\'s Independent Cat Insurance Guide',
  description: 'About CatInsurance.co.nz — New Zealand\'s independent cat insurance comparison and information service. We help Kiwi cat owners compare providers and find the right cover.',
  alternates: {
    canonical: 'https://www.catinsurance.co.nz/about/',
  },
  openGraph: {
    title: 'About CatInsurance.co.nz — NZ\'s Independent Cat Insurance Guide',
    description: 'New Zealand\'s independent cat insurance comparison and information service. We help Kiwi cat owners compare providers and find the right cover.',
    url: 'https://www.catinsurance.co.nz/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CatInsurance.co.nz',
    description: 'New Zealand\'s independent cat insurance comparison and information service.',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About CatInsurance.co.nz',
  url: 'https://www.catinsurance.co.nz/about',
  description: 'CatInsurance.co.nz is New Zealand\'s independent cat insurance comparison and information service.',
  publisher: {
    '@type': 'Organization',
    name: 'CatInsurance.co.nz',
    url: 'https://www.catinsurance.co.nz',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-emerald-200 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
              NZ&apos;s Independent Cat Insurance Guide
            </h1>
            <p className="text-emerald-100 text-lg leading-relaxed">
              We help New Zealand cat owners compare providers, understand their options, and find the right cover — without the jargon or the hard sell.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '6', label: 'Insurers compared' },
              { stat: '1 in 10', label: 'NZ cats are insured' },
              { stat: '$15,000+', label: 'Max vet bill covered' },
              { stat: '100%', label: 'Independent' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{stat}</div>
                <div className="text-slate-400 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + What we do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Mission */}
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Our Mission</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Making cat insurance simple for Kiwi cat owners
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Only 1 in 10 New Zealand cat owners insure their cats — leaving most families exposed to unexpected vet bills of $3,000–$15,000 or more. We exist to change that.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                CatInsurance.co.nz provides clear, independent information about every cat insurance provider in New Zealand. We cut through the marketing language to give you honest, practical comparisons so you can make a genuinely informed decision.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We&apos;re a Kiwi-owned service managed by{' '}
                <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Cover4You
                </a>
                , a NZ insurance information and comparison service working with a network of registered NZ insurance advisers.
              </p>
            </div>

            {/* What we do — feature tiles */}
            <div className="space-y-4">
              {[
                {
                  icon: '🔍',
                  title: 'Independent comparisons',
                  body: 'We compare all 6 NZ cat insurance providers across price, annual limits, excess, co-payment, hereditary cover, claims speed and more — with no bias toward any provider.',
                },
                {
                  icon: '🐾',
                  title: 'Breed-specific guidance',
                  body: 'Every cat is different. We publish detailed insurance guides for 12 NZ cat breeds — from Ragdolls and Maine Coons to Persians and Scottish Folds — covering the health risks that matter most.',
                },
                {
                  icon: '📋',
                  title: 'Plain-English resources',
                  body: 'Our guides cover everything from how excess works to what "hereditary condition cover" actually means — so you can compare policies without needing a legal dictionary.',
                },
                {
                  icon: '🏡',
                  title: 'NZ-focused',
                  body: 'All information is specific to the New Zealand market — NZ providers, NZ vet costs, NZ regulations and NZ pricing. No overseas data applied to a market that doesn\'t fit.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-emerald-200 transition-colors">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Independence notice */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Our Independence</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">How we stay independent</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CatInsurance.co.nz may receive referral fees from insurers when you click through to their websites. This does not affect how we rank or present providers — all comparisons are conducted independently and updated regularly.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              We are not a licensed financial adviser and do not provide personalised financial advice. The information on this website is general in nature. We recommend reading the Product Disclosure Statement (PDS) of any policy before purchasing. See our{' '}
              <Link href="/disclaimer" className="text-emerald-600 hover:text-emerald-700">Disclaimer</Link>
              {' '}for full details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Ready to compare?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            See how all 6 NZ cat insurance providers stack up — side by side, with no fluff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compare"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-lg"
            >
              Compare All Providers →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
