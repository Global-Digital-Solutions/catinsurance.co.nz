import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer — CatInsurance.co.nz',
  description: 'Disclaimer for CatInsurance.co.nz — general advice warning and important disclosures.',
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Disclaimer</h1>
          <p className="text-emerald-200 mt-2 text-sm">Last updated: May 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2>General Advice Warning</h2>
          <p>CatInsurance.co.nz provides general information only. Any information on this website does not constitute financial advice and does not take into account your personal objectives, financial situation or needs.</p>
          <p>Before acting on any information on this website, you should consider whether it is appropriate for your circumstances and, if necessary, seek professional advice from a registered financial adviser.</p>
          <h2>Not a Financial Adviser</h2>
          <p>CatInsurance.co.nz and Cover4You are not licensed financial advisers under the Financial Markets Conduct Act 2013. We do not provide personalised financial recommendations. The insurers referred to on this site are subject to their own regulatory requirements.</p>
          <h2>Insurance Adviser Referrals</h2>
          <p>Where CatInsurance.co.nz refers you to an insurance adviser, that adviser is a registered financial adviser or financial advice provider under the Financial Markets Conduct Act 2013. They are responsible for any advice they provide.</p>
          <h2>Referral Arrangements</h2>
          <p>CatInsurance.co.nz may receive referral fees or commissions when you click through to insurance providers or advisers from our website. These arrangements do not influence our independent comparisons or editorial content.</p>
          <h2>No Warranty</h2>
          <p>While we take care to ensure information is accurate and current, we make no warranty, express or implied, about the accuracy, reliability or completeness of information on this website. Insurance products, pricing, terms and availability change frequently.</p>
          <p>Always read the Product Disclosure Statement (PDS) before purchasing any insurance product.</p>
          <h2>Contact</h2>
          <p>For disclaimer enquiries: hello@cover4you.co.nz</p>
        </div>
      </section>
    </>
  );
}
