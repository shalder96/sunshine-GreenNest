import React from "react";
import { Truck, Headphones, Shield, Leaf, Undo2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Free Delivery",
      icon: <Truck size={32} className="text-green-700" />,
      description: "For All Orders Above ₹499",
    },
    {
      title: "24x7 Support",
      icon: <Headphones size={32} className="text-green-700" />,
      description: "Quick Support",
    },
    {
      title: "Secure Payment",
      icon: <Shield size={32} className="text-green-700" />,
      description: "100% Secure Payment",
    },
    {
      title: "Eco-Friendly",
      icon: <Leaf size={32} className="text-green-700" />,
      description: "Sustainable Packaging.",
    },
    {
      title: "14 Days Return",
      icon: <Undo2 size={32} className="text-green-700" />,
      description: "14-Day Return",
    },
  ];

  return (
    <section className="relative py-8 px-6 bg-[#1B4332]">
  {/* Glassmorphic overlay behind content */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl z-10" />

      <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-white relative z-10">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto relative z-10">
        {features.map((f, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300"
        >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#FAFAFA] mb-4">
              {f.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">{f.title}</h3>
            <p className="text-sm text-white/90">{f.description}</p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default FeaturesSection;
