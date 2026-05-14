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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
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
