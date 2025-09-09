import React, { useState } from "react";

const faqs = [
  {
    question: "How do I care for my plants?",
    answer:
      "Each plant comes with a care guide. Most require indirect sunlight and watering once or twice a week. 🌱",
  },
  {
    question: "Do you offer replacements if my plant arrives damaged?",
    answer:
      "Yes, we provide a 7-day replacement guarantee if your plant arrives damaged or unhealthy.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once shipped, you’ll receive a tracking link on your email or WhatsApp.",
  },
  {
    question: "Do you deliver nationwide?",
    answer: "Yes, we ship across India with fast and secure delivery partners.",
  },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-black text-white">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">
          FAQs
        </h1>
        <p className="text-center text-lg text-[#FAFAFA]/90 mb-10">
          Find answers to some of the most common questions 🌿
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-md p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <h3 className="flex justify-between items-center text-lg font-semibold">
                {faq.question}
                <span>{openIndex === idx ? "−" : "+"}</span>
              </h3>
              {openIndex === idx && (
                <p className="mt-2 text-sm text-[#FAFAFA]/90">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
