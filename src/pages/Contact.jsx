import React from "react";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-[#2E7D32] text-white">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-lg text-[#FAFAFA]/90 mb-10">
          Have questions or want to get in touch? We’d love to hear from you!
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form className="flex flex-col gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#A5D6A7]/30 border border-[#A5D6A7]/40 text-[#A5D6A7] hover:bg-[#A5D6A7]/40 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-sm text-[#FAFAFA]/90">
                GreenScape HQ, Sector 21, New Delhi, India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-sm text-[#FAFAFA]/90">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-sm text-[#FAFAFA]/90">support@greenscape.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
