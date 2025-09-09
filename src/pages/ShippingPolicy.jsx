import React from "react";

const ShippingPolicyPage = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-[#2E7D32] text-white">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">
          Shipping Policy
        </h1>
        <p className="text-center text-lg text-[#FAFAFA]/90 mb-10">
          Here’s everything you need to know about our shipping & delivery 🚚
        </p>

        <div className="space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
          <div>
            <h3 className="text-xl font-semibold mb-2">🌍 Delivery Locations</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              We ship nationwide across India through trusted courier partners.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⏱ Delivery Time</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Orders are usually processed within 1–2 business days and delivered
              within 3–7 days depending on your location.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📦 Packaging</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Plants are carefully packed in eco-friendly boxes to ensure they
              arrive safely and fresh.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔄 Returns & Replacements</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              If your plant arrives damaged, we offer a 7-day free replacement or
              refund. Please provide an image for verification.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">💳 Shipping Charges</h3>
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
