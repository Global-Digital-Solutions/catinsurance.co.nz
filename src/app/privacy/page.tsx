import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — CatInsurance.co.nz',
  description: 'Privacy policy for CatInsurance.co.nz — how we collect, use and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-emerald-200 mt-2 text-sm">Last updated: May 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2>1. Who We Are</h2>
          <p>CatInsurance.co.nz is operated by Cover4You, a New Zealand business. We are committed to protecting your privacy in accordance with the New Zealand Privacy Act 2020.</p>
          <h2>2. Information We Collect</h2>
          <p>We may collect personal information including your name, email address and enquiry details when you submit a contact form. We also collect non-personal analytics data through Google Analytics (page views, session duration, referral source).</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to respond to your enquiries and to improve our website and services. We do not sell or share your personal information with third parties, except where required to respond to your enquiry (e.g., forwarding to an insurance adviser at your request).</p>
          <h2>4. Cookies</h2>
          <p>We use Google Analytics cookies to understand how visitors use our website. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on. We do not use any advertising or tracking cookies beyond analytics.</p>
          <h2>5. Third-Party Links</h2>
          <p>Our website contains links to insurance providers&apos; websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.</p>
          <h2>6. Data Retention</h2>
          <p>We retain contact form submissions for up to 12 months. Analytics data is retained for 26 months as per Google Analytics default settings.</p>
          <h2>7. Your Rights</h2>
          <p>Under the Privacy Act 2020, you have the right to access and correct your personal information. To exercise these rights, contact us at hello@cover4you.co.nz.</p>
          <h2>8. Contact</h2>
          <p>For privacy enquiries: hello@cover4you.co.nz</p>
        </div>
      </section>
    </>
  );
}
