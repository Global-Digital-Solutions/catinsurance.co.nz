import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CatInsurance.co.nz — Get in Touch',
  description: 'Contact the CatInsurance.co.nz team. Questions about cat insurance in NZ? We\'re here to help.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Questions about cat insurance? Corrections to our content? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 mb-6">
                CatInsurance.co.nz is managed by a Kiwi owned company with a team of insurance professionals who are passionate about helping New Zealanders protect their cats.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Email</div>
                    <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:text-emerald-700">
                      hello@cover4you.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Website</div>
                    <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">
                      www.cover4you.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇳🇿</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Location</div>
                    <span className="text-slate-600">New Zealand</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-500">
                  <strong className="text-slate-700">Note:</strong> We are not a licensed financial adviser and cannot provide personalised insurance recommendations. For advice on your specific situation, please contact a registered NZ insurance adviser.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Send a Message</h2>
              <form
                action="https://formsubmit.co/hello@cover4you.co.nz"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="CatInsurance.co.nz Enquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://catinsurance.co.nz/thank-you" />

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="e.g. Question about cat insurance"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
