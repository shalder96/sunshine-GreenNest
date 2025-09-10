import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-[#1B4332] to-black text-white">
      {/* Logo with scale/rotate effect */}
      <motion.img
        src="/logo.png" // 👉 replace with your logo path
        alt="Site Logo"
        className="w-20 h-20 mb-4"
        initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Website Name with shimmer gradient */}
      <motion.h1
        className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-green-400 to-lime-500 bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        GreeNest Store
      </motion.h1>

      {/* Sub loading text */}
      <motion.span
        className="mt-2 text-sm text-gray-200"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading...
      </motion.span>
    </div>
  );
};

export default Loading;
