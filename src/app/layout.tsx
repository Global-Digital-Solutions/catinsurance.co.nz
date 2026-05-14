import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Cat Insurance NZ — Compare NZ Cat Insurance Providers | CatInsurance.co.nz',
    template: '%s | CatInsurance.co.nz',
  },
  description: 'Compare cat insurance in New Zealand. Find the best cover for your cat from SPCA Pet Insurance, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance. Cat cover from $11/month.',
  metadataBase: new URL('https://catinsurance.co.nz'),
  openGraph: {
    siteName: 'CatInsurance.co.nz',
    locale: 'en_NZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CatInsurance.co.nz',
  url: 'https://catinsurance.co.nz',
  logo: 'https://catinsurance.co.nz/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@cover4you.co.nz',
    contactType: 'customer support',
    areaServed: 'NZ',
    availableLanguage: 'English',
  },
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CatInsurance.co.nz',
  url: 'https://catinsurance.co.nz',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://catinsurance.co.nz/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PLACEHOLDER');`}
        </Script>
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
