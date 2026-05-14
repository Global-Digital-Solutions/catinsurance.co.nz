import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — CatInsurance.co.nz',
  description: 'Terms of use for CatInsurance.co.nz.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Terms of Use</h1>
          <p className="text-emerald-200 mt-2 text-sm">Last updated: May 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using CatInsurance.co.nz, you accept these terms of use. If you do not agree, please do not use this website.</p>
          <h2>2. Nature of the Service</h2>
          <p>CatInsurance.co.nz is an independent comparison and information service. We provide general information about cat insurance products available in New Zealand. We are not a licensed financial adviser and do not provide personalised financial advice.</p>
          <h2>3. General Information Only</h2>
          <p>All information on this website is general in nature and does not take into account your personal financial situation or needs. You should read the Product Disclosure Statement (PDS) of any insurance product before purchasing and consider obtaining advice from a registered financial adviser.</p>
          <h2>4. Accuracy of Information</h2>
          <p>We endeavour to keep information accurate and up to date, but we do not warrant the accuracy, completeness or currency of information on this website. Insurance products, pricing and terms change frequently — always verify information directly with the insurer before purchasing.</p>
          <h2>5. Referral Relationships</h2>
          <p>We may receive referral fees from insurers when you click through to their websites from CatInsurance.co.nz. These relationships do not influence our independent comparisons.</p>
          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Cover4You and CatInsurance.co.nz accept no liability for any loss or damage arising from your use of, or reliance on, information on this website.</p>
          <h2>7. Intellectual Property</h2>
          <p>All content on CatInsurance.co.nz is the property of Cover4You or its licensors. You may not reproduce, distribute or modify content without our prior written consent.</p>
          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of New Zealand. Any disputes shall be subject to the exclusive jurisdiction of the New Zealand courts.</p>
          <h2>9. Contact</h2>
          <p>For questions about these terms: hello@cover4you.co.nz</p>
        </div>
      </section>
    </>
  );
}
