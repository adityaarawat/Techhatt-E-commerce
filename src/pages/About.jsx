import React from "react";

const About=()=> {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header / Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-500/20 ring-1 ring-red-500">
            <span className="text-red-400 font-extrabold text-lg">SF</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shopfinity</h2>
            <p className="text-sm text-gray-400 -mt-0.5">
              Discover Every Category, Every Deal.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-red-400">Shopfinity</span>
            </h1>

            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to <span className="text-red-400 font-semibold">Shopfinity</span> — your one-stop
              online destination for the best in electronics, fashion, and home essentials. We bring
              together quality, trust, and convenience to deliver a seamless shopping experience
              right to your doorstep.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Our goal is simple: to provide high-quality products at affordable prices while ensuring
              fast delivery and secure transactions. From trending tech to timeless style, Shopfinity
              connects you to everything you love — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/products"
                className="inline-block bg-red-500 hover:bg-red-600 text-black font-semibold px-5 py-3 rounded-lg shadow-sm transition"
              >
                Browse Products
              </a>
              <a
                href="/contact"
                className="inline-block border border-gray-700 hover:border-gray-600 text-gray-300 px-5 py-3 rounded-lg transition"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1607083206173-4c8a1de0d8b6?auto=format&fit=crop&w=900&q=80"
              alt="Shopfinity products"
              className="w-full max-w-md rounded-2xl object-cover shadow-[0_10px_30px_rgba(255,59,59,0.12)]"
            />
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0b0b0b] border border-transparent hover:border-red-600 transition rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">All Categories</h3>
            <p className="text-gray-400 text-sm">
              Shop across electronics, fashion, beauty, and home essentials — all in one place.
            </p>
          </div>

          <div className="bg-[#0b0b0b] border border-transparent hover:border-red-600 transition rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-400 text-sm">
              Reliable doorstep delivery with real-time updates and trusted logistics partners.
            </p>
          </div>

          <div className="bg-[#0b0b0b] border border-transparent hover:border-red-600 transition rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-400 text-sm">
              Our customer support team is always here to help you anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;