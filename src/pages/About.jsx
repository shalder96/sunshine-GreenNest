import React from "react";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-black text-white">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">About Us</h1>
        <p className="text-lg text-[#FAFAFA]/90 leading-relaxed mb-10">
          At <span className="text-[#A5D6A7] font-semibold">GreenScape</span>,
          we believe plants bring life, calm, and positivity into every space.
          Our mission is to make greenery accessible to everyone — from busy
          professionals to plant enthusiasts. 🌱
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">🌿 Our Mission</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              We aim to spread happiness by providing healthy plants, easy care
              tips, and sustainable products that fit your lifestyle.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">🌍 Our Vision</h3>
            <p className="text-sm text-[#FAFAFA]/90">
              A greener world where homes and offices are alive with vibrant,
              thriving plants — making the planet healthier one pot at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
