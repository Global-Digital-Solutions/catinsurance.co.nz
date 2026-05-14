import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              New Zealand&apos;s independent guide to cat insurance. Helping Kiwi cat owners compare, understand and choose the right cover.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              We compare NZ&apos;s leading cat insurance providers. We may receive referral fees from insurers — this does not affect our independent comparisons.
            </p>
          </div>

          {/* Compare & Providers */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Compare Plans</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare" className="hover:text-emerald-400 transition-colors">Compare All Providers</Link></li>
              <li><Link href="/types/accident-only" className="hover:text-emerald-400 transition-colors">Accident Only Cover</Link></li>
              <li><Link href="/types/accident-illness" className="hover:text-emerald-400 transition-colors">Accident &amp; Illness</Link></li>
              <li><Link href="/types/comprehensive" className="hover:text-emerald-400 transition-colors">Comprehensive Cover</Link></li>
              <li><Link href="/types/dental-care" className="hover:text-emerald-400 transition-colors">Dental Care Cover</Link></li>
              <li><Link href="/types/senior-cat" className="hover:text-emerald-400 transition-colors">Senior Cat Cover</Link></li>
            </ul>
          </div>

          {/* Cat Breeds */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Cat Breeds</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/breeds/domestic-shorthair" className="hover:text-emerald-400 transition-colors">Domestic Shorthair</Link></li>
              <li><Link href="/breeds/ragdoll" className="hover:text-emerald-400 transition-colors">Ragdoll</Link></li>
              <li><Link href="/breeds/maine-coon" className="hover:text-emerald-400 transition-colors">Maine Coon</Link></li>
              <li><Link href="/breeds/persian" className="hover:text-emerald-400 transition-colors">Persian</Link></li>
              <li><Link href="/breeds/british-shorthair" className="hover:text-emerald-400 transition-colors">British Shorthair</Link></li>
              <li><Link href="/breeds" className="hover:text-emerald-400 transition-colors">All Breeds →</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Cat Insurance Blog</Link></li>
              <li><Link href="/faqs" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
              <li><Link href="/cat-insurance/best-cat-insurance-nz" className="hover:text-emerald-400 transition-colors">Best Cat Insurance NZ</Link></li>
              <li><Link href="/cat-insurance/cheap-cat-insurance-nz" className="hover:text-emerald-400 transition-colors">Cheap Cat Insurance NZ</Link></li>
              <li><Link href="/cat-insurance/cat-insurance-for-older-cats-nz" className="hover:text-emerald-400 transition-colors">Senior Cat Insurance</Link></li>
              <li><Link href="/cat-insurance/cat-insurance-for-kittens-nz" className="hover:text-emerald-400 transition-colors">Kitten Insurance</Link></li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <h3 className="text-white text-sm font-semibold mb-3">Cat Insurance by Location</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {[
              ['Auckland', '/cat-insurance/cat-insurance-auckland'],
              ['Wellington', '/cat-insurance/cat-insurance-wellington'],
              ['Christchurch', '/cat-insurance/cat-insurance-christchurch'],
              ['Hamilton', '/cat-insurance/cat-insurance-hamilton'],
              ['Tauranga', '/cat-insurance/cat-insurance-tauranga'],
              ['Dunedin', '/cat-insurance/cat-insurance-dunedin'],
              ['Palmerston North', '/cat-insurance/cat-insurance-palmerston-north'],
              ['Nelson', '/cat-insurance/cat-insurance-nelson'],
            ].map(([city, href]) => (
              <Link key={href} href={href} className="hover:text-emerald-400 transition-colors">
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer & Legal */}
        <div className="border-t border-slate-800 mt-6 pt-6">
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> CatInsurance.co.nz is an independent comparison and information service. We are not a licensed financial adviser and do not provide personalised financial advice. The information on this website is general in nature only. Always read the policy document (PDS) before purchasing any insurance product. Cat insurance products are provided by independent insurers — not by CatInsurance.co.nz. The insurers referred to on this site are regulated under the Insurance (Prudential Supervision) Act 2010. Our referred insurance advisers are registered financial advisers under the Financial Markets Conduct Act 2013.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()}{' '}
              <a
                href="https://www.cover4you.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 underline"
              >
                Cover4You
              </a>
              . All rights reserved. CatInsurance.co.nz
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Use</Link>
              <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">Disclaimer</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
