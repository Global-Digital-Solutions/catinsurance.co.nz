import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You — CatInsurance.co.nz',
  description: 'Thank you for your message. We\'ll be in touch soon.',
};

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">🐱</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-slate-600 mb-8">
          Your message has been received. We&apos;ll get back to you at hello@cover4you.co.nz as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/compare"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Compare Cat Insurance →
          </Link>
          <Link
            href="/"
            className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
