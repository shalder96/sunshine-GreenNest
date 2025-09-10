import React from "react";

const ShippingPolicyPage = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-br from-[#054207] to-[#0ca811]  text-white">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 font-serif text-4xl text-center md:text-5xl">
          Shipping Policy
        </h1>
        <p className="text-center text-lg text-[#FAFAFA]/90 mb-10">
          Here’s everything you need to know about our shipping & delivery 🚚
        </p>

        <div className="p-6 space-y-6 shadow-lg bg-white/10 backdrop-blur-lg rounded-2xl">
          <div>
            <h3 className="mb-2 text-xl font-semibold">🌍 Delivery Locations</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              We ship nationwide across India through trusted courier partners.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">⏱ Delivery Time</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Orders are usually processed within 1–2 business days and delivered
              within 3–7 days depending on your location.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">📦 Packaging</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Plants are carefully packed in eco-friendly boxes to ensure they
              arrive safely and fresh.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">🔄 Returns & Replacements</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              If your plant arrives damaged, we offer a 7-day free replacement or
              refund. Please provide an image for verification.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">💳 Shipping Charges</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Free shipping for orders above ₹999. For smaller orders, standard
              courier charges apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
