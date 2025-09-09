import React from "react";

const ReturnRefundPolicyPage = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-black text-white">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">
          Return & Refund Policy
        </h1>
        <p className="text-center text-lg text-[#FAFAFA]/90 mb-10">
          We want you to love your plants! 🌱 Here’s how we handle returns and refunds.
        </p>

        <div className="space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
          <div>
            <h3 className="text-xl font-semibold mb-2">🪴 Damaged Plants</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              If your plant arrives damaged or unhealthy, please contact us within 7 days of delivery. 
              We will happily replace the plant at no extra cost or issue a full refund.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📷 Proof of Damage</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Kindly share clear pictures of the damaged plant and packaging. 
              This helps us improve and process your claim quickly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔄 Replacement Eligibility</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Replacement is available only for plants damaged during transit. 
              If the plant dies due to neglect after delivery, replacements are not covered.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">💳 Refund Process</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Refunds will be processed within 5–7 business days to your original payment method after approval.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⚠️ Non-Returnable Items</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              Pots, soil mixes, and accessories once delivered cannot be returned unless defective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnRefundPolicyPage;
