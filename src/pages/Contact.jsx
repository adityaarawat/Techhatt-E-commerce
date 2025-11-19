import React from "react";

const Contact=()=> {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-11 h-11 rounded-md flex items-center justify-center bg-red-500/20 ring-1 ring-red-500">
            <span className="text-red-400 font-extrabold text-lg">SF</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Contact <span className="text-red-400">Shopfinity</span>
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              We're here to help — reach out anytime.
            </p>
          </div>
        </div>

        {/* Static contact info */}
        <div className="bg-[#0b0b0b] rounded-xl p-8 shadow-sm border border-transparent hover:border-red-600 transition">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Have questions, suggestions, or feedback? Feel free to reach out to
            us — we’d love to hear from you! Our team is available every day to
            ensure you get the best experience while shopping with Shopfinity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-5">
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                  Email
                </h3>
                <p className="text-lg text-white break-all">
                  aadityarawaat@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                  Address
                </h3>
                <p className="text-gray-300">
                  221B, Shopfinity Lane, Sector 14, Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                  Customer Support Hours
                </h3>
                <p className="text-gray-300">
                  Monday – Sunday <br />
                  9:00 AM – 9:00 PM (IST)
                </p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                  Business Inquiries
                </h3>
                <p className="text-gray-300">
                  For collaborations or partnerships, contact us at{" "}
                  <span className="text-red-400 font-medium">
                    aadityarawaat@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-10" />

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              Thank you for choosing{" "}
              <span className="text-red-400">Shopfinity</span>
            </h3>
            <p className="text-gray-400 text-sm">
              We aim to make your shopping experience seamless, secure, and
              satisfying.
            </p>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-10 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>© {new Date().getFullYear()} Shopfinity — All rights reserved.</span>
          <nav className="flex gap-4">
            <a href="/terms" className="text-gray-400 hover:text-gray-200">
              Terms
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">
              Privacy
            </a>
            <a href="/about" className="text-gray-400 hover:text-gray-200">
              About
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Contact;