import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About CatInsurance.co.nz — NZ\'s Independent Cat Insurance Guide',
  description: 'About CatInsurance.co.nz — New Zealand\'s independent cat insurance comparison and information service. We help Kiwi cat owners compare providers and find the right cover.',
  openGraph: {
    title: 'About CatInsurance.co.nz — NZ\'s Independent Cat Insurance Guide',
    description: 'New Zealand\'s independent cat insurance comparison and information service. We help Kiwi cat owners compare providers and find the right cover.',
    url: 'https://catinsurance.co.nz/about',
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
  url: 'https://catinsurance.co.nz/about',
  description: 'CatInsurance.co.nz is New Zealand\'s independent cat insurance comparison and information service.',
  publisher: {
    '@type': 'Organization',
    name: 'CatInsurance.co.nz',
    url: 'https://catinsurance.co.nz',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">About CatInsurance.co.nz</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            New Zealand&apos;s independent guide to cat insurance — helping Kiwi cat owners compare, understand and choose the right cover since 2024.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              CatInsurance.co.nz exists because only 1 in 10 New Zealand cat owners insure their cats — leaving most Kiwi families exposed to unexpected vet bills of $3,000–$15,000 or more.
            </p>
            <p>
              We believe every cat owner deserves access to clear, independent information about cat insurance options in New Zealand. Our mission is to make comparing cat insurance straightforward and honest — without the jargon, the hard sell, or the bias.
            </p>

            <h2>What We Do</h2>
            <p>
              We compare New Zealand&apos;s six main cat insurance providers — SPCA Pet Insurance, Southern Cross Pet Insurance, Petcover, Cove, Pet-n-Sur and PD Insurance — across every dimension that matters: price, annual limits, excess, co-payment, hereditary condition cover, claims turnaround and more.
            </p>
            <p>
              We also publish independent breed-specific guidance for NZ cat owners, helping Ragdoll, Maine Coon, Persian, Scottish Fold and other pedigree breed owners understand the specific health risks and insurance needs of their cats.
            </p>

            <h2>Our Independence</h2>
            <p>
              CatInsurance.co.nz is an independent comparison and information service. We may receive referral fees from insurers when you click through to their websites — but this does not affect how we rank or present providers. All comparisons are conducted independently and updated regularly.
            </p>
            <p>
              We are not a licensed financial adviser and do not provide personalised financial advice. The information on this website is general in nature. We recommend reading the Product Disclosure Statement (PDS) of any policy before purchasing.
            </p>

            <h2>Who We Are</h2>
            <p>
              CatInsurance.co.nz is a Kiwi owned company managed by{' '}
              <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">
                Cover4You
              </a>
              , a NZ insurance information and comparison service. We work with a network of registered New Zealand insurance advisers and brokers who can provide personalised advice when needed.
            </p>

            <h2>Contact Us</h2>
            <p>
              Have a question, correction or feedback? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/compare"
              className="border border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Compare Providers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
