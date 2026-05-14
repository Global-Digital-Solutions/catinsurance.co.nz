import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Cat Insurance FAQs NZ — Common Questions Answered',
  description: 'Answers to common questions about cat insurance in New Zealand. How it works, what\'s covered, how to claim and more.',
};

export default function FAQsPage() {
  const categories = [...new Set(faqs.map((f) => f.category))];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Cat Insurance FAQs</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Answers to the most common questions about cat insurance in New Zealand.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-5 pb-2 border-b border-slate-200">{category}</h2>
              <div className="space-y-4">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <div key={faq.question} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Ready to compare?</h2>
          <p className="text-slate-600 mb-5 text-sm">Compare all 6 NZ cat insurance providers and find the right cover for your cat.</p>
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
