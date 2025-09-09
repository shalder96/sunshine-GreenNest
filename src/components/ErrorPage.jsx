import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-[#1B4332] to-black text-white">
      {/* Glass effect backdrop */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      <div className="text-center max-w-lg p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
        <h1 className="text-8xl font-bold text-[#66BB6A] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-[#FAFAFA]/80 mb-6">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track! 🚀
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1B4332] to-[#66BB6A] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition"
        >
          <Home size={20} /> Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
