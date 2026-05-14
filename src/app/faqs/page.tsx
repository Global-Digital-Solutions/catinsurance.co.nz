'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/data/faqs';

const CATEGORY_META: Record<string, { icon: string; color: string; bg: string; border: string; desc: string }> = {
  'General': {
    icon: '🐱',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    desc: 'How cat insurance works, who needs it and when to start',
  },
  'Costs & Premiums': {
    icon: '💰',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    desc: 'Premiums, excess, co-payments and how to get best value',
  },
  "What's Covered": {
    icon: '🛡️',
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    desc: 'What policies include, what they exclude and the fine print',
  },
  'Providers': {
    icon: '🏆',
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    desc: 'Comparing the six major insurers and their key differences',
  },
  'Claims': {
    icon: '📋',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    desc: 'How to claim, turnaround times and what to do if declined',
  },
};

const STATS = [
  { value: '26', label: 'Questions answered' },
  { value: '6', label: 'Providers covered' },
  { value: '5', label: 'Topic categories' },
  { value: '2026', label: 'Last updated' },
];

const TRUST_FACTS = [
  { icon: '😿', stat: '1 in 10', label: 'cats in New Zealand are insured' },
  { icon: '📈', stat: '8–12%', label: 'annual increase in vet costs' },
  { icon: '💸', stat: '$3,000–$15,000', label: 'cost of a serious illness or surgery' },
  { icon: '⚡', stat: '1–2 days', label: 'fastest claims turnaround available' },
];

export default function FAQsPage() {
  const categories = [...new Set(faqs.map((f) => f.category))];
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? categories.filter((c) => c === activeCategory)
    : categories;

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

      {/* ── Hero ── */}
      <section className="relative text-white min-h-[52vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-cats-1.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-emerald-900/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold bg-emerald-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full uppercase tracking-wider">
              📖 Knowledge Centre
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md max-w-3xl leading-tight">
            Cat Insurance — Every Question, Answered
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mb-8 leading-relaxed">
            We've distilled everything cat owners ask into one clear, jargon-free resource. From how policies work to what happens when you claim — it's all here.
          </p>
          {/* Stat pills */}
          <div className="flex flex-wrap gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                <span className="text-emerald-400 font-bold text-lg">{s.value}</span>
                <span className="text-white/80 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust facts bar ── */}
      <section className="bg-slate-900 py-5 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_FACTS.map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <span className="text-2xl leading-none mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-emerald-400 font-bold text-base leading-tight">{f.stat}</div>
                  <div className="text-slate-400 text-xs leading-snug">{f.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category filter pills ── */}
      <section className="bg-white border-b border-slate-100 py-4 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium mr-1 hidden sm:block">Jump to:</span>
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                activeCategory === null
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              All {faqs.length} Questions
            </button>
            {categories.map((cat) => {
              const meta = CATEGORY_META[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all flex items-center gap-1 ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : 'border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  <span>{meta?.icon}</span>
                  <span>{cat}</span>
                  <span className="opacity-60 ml-0.5">({faqs.filter((f) => f.category === cat).length})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-10">

            {/* Sidebar ── desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-36 space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Categories</p>
                {categories.map((cat) => {
                  const meta = CATEGORY_META[cat];
                  const count = faqs.filter((f) => f.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                      className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? `${meta?.bg} ${meta?.border} ${meta?.color}`
                          : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-200 hover:text-emerald-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{meta?.icon}</span>
                        <span>{cat}</span>
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        activeCategory === cat ? 'bg-white/60' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}

                {/* Quick links */}
                <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-slate-700 mb-3">Still unsure?</p>
                  <div className="space-y-2">
                    <Link href="/compare" className="block text-xs text-emerald-700 hover:text-emerald-800 font-medium">
                      → Compare all 6 providers
                    </Link>
                    <Link href="/breeds" className="block text-xs text-emerald-700 hover:text-emerald-800 font-medium">
                      → Insurance by cat breed
                    </Link>
                    <Link href="/blog" className="block text-xs text-emerald-700 hover:text-emerald-800 font-medium">
                      → Read our buying guides
                    </Link>
                    <Link href="/contact" className="block text-xs text-emerald-700 hover:text-emerald-800 font-medium">
                      → Ask us directly
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* FAQ columns */}
            <div className="lg:col-span-3 space-y-10">
              {filteredCategories.map((category) => {
                const meta = CATEGORY_META[category];
                const categoryFaqs = faqs.filter((f) => f.category === category);
                return (
                  <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                    {/* Category header */}
                    <div className={`flex items-start gap-4 p-5 rounded-2xl border mb-4 ${meta?.bg} ${meta?.border}`}>
                      <span className="text-4xl leading-none">{meta?.icon}</span>
                      <div>
                        <h2 className={`text-xl font-bold ${meta?.color}`}>{category}</h2>
                        <p className="text-sm text-slate-600 mt-0.5">{meta?.desc}</p>
                        <p className="text-xs text-slate-400 mt-1">{categoryFaqs.length} questions in this section</p>
                      </div>
                    </div>

                    {/* FAQ accordion */}
                    <div className="space-y-2">
                      {categoryFaqs.map((faq, idx) => {
                        const key = `${category}-${idx}`;
                        const isOpen = openFaq === key;
                        return (
                          <div
                            key={faq.question}
                            className={`bg-white border rounded-xl overflow-hidden transition-all ${
                              isOpen ? 'border-emerald-300 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <button
                              onClick={() => setOpenFaq(isOpen ? null : key)}
                              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                            >
                              <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-emerald-700' : 'text-slate-900'}`}>
                                {faq.question}
                              </span>
                              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                                isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                              }`}>
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                              </span>
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5">
                                <div className="h-px bg-emerald-100 mb-4" />
                                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-14 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-3xl mb-4 block">😺</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to find the right cover?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Compare all six providers side by side — pricing, cover, claims speed and key features all in one place.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/compare"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors inline-block"
            >
              Compare All Providers →
            </Link>
            <Link
              href="/breeds"
              className="border border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 font-semibold px-7 py-3 rounded-lg transition-colors inline-block"
            >
              Insurance by Breed
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
