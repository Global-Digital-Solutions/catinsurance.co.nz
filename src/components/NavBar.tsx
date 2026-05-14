'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { label: 'Compare', href: '/compare' },
    {
      label: 'Coverage Types',
      href: '/coverage',
      dropdown: [
        { label: 'Accident Only', href: '/types/accident-only' },
        { label: 'Accident & Illness', href: '/types/accident-illness' },
        { label: 'Comprehensive', href: '/types/comprehensive' },
        { label: 'Dental Care', href: '/types/dental-care' },
        { label: 'Wellness Care', href: '/types/wellness-care' },
        { label: 'Senior Cat Cover', href: '/types/senior-cat' },
      ],
    },
    {
      label: 'Cat Breeds',
      href: '/breeds',
      dropdown: [
        { label: 'Domestic Shorthair', href: '/breeds/domestic-shorthair' },
        { label: 'Ragdoll', href: '/breeds/ragdoll' },
        { label: 'Maine Coon', href: '/breeds/maine-coon' },
        { label: 'Persian', href: '/breeds/persian' },
        { label: 'British Shorthair', href: '/breeds/british-shorthair' },
        { label: 'Bengal', href: '/breeds/bengal' },
        { label: 'Siamese', href: '/breeds/siamese' },
        { label: 'Burmese', href: '/breeds/burmese' },
        { label: 'View All Breeds', href: '/breeds' },
      ],
    },
    { label: 'Resources', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 rounded-md flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute left-0 mt-0 w-52 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/compare"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Compare Plans
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.slice(0, -1).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-1.5 text-sm text-slate-600 hover:text-emerald-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/compare"
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg mt-3"
              onClick={() => setIsOpen(false)}
            >
              Compare Plans
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
