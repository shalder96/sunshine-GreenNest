import { Facebook, Instagram, Twitter, Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center space-x-2">
            <img 
            src="/logo.png" 
            alt="GreeNest"
            className="bg-[#2E7D32] h-7 text-[#66BB6A]"
          />
            <h2 className="text-xl font-bold">GreeNest</h2>
          </div>
          <p className="mt-2 text-sm text-green-200">
            Bringing nature to your doorstep 🌱  
            Fresh plants, eco-friendly packaging, and happy vibes.
          </p>
        </div>
        
        {/* Shop Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-green-300">All Plants</a></li>
            <li><a href="/indoor" className="hover:text-green-300">Indoor Plants</a></li>
            <li><a href="/outdoor" className="hover:text-green-300">Outdoor Plants</a></li>
            <li><a href="/care" className="hover:text-green-300">Plant Care</a></li>
          </ul>
        </div>
        
        {/* Info Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink 
                to="/contact" 
                className="hover:text-green-300"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="hover:text-green-300"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/faq" 
                className="hover:text-green-300"
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/shipping" 
                className="hover:text-green-300"
              >
                Shipping Policy
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/returns" 
                className="hover:text-green-300"
              >
                Returns & Refunds
              </NavLink>
            </li>
          </ul>
        </div>
        
        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>
          <p className="text-sm mb-2">Email: support@greenest.com</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-green-300" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-green-300" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-green-300" /></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Strip */}
      <div className="mt-10 border-t border-green-700 pt-4 text-center text-sm text-green-300">
        © {new Date().getFullYear()} GreeNest. All rights reserved.
      </div>
    </footer>
  );
}
