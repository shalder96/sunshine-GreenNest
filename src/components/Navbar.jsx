import { useState } from "react";
import { Search, ShoppingCart, User, Leaf, Menu, X } from "lucide-react";
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2E7D32] text-white px-6 py-4 font-['Poppins']">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="GreeNest"
            loading="lazy"
            className="bg-[#2E7D32] h-12 text-[#66BB6A]"
          />
          <span className="text-xl font-bold font-poppins">
            GreeNest
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden space-x-8 font-medium md:flex">
          <li>
            <NavLink 
              to="/" 
              className={({isActive}) => isActive
              ? "text-[#66BB6A] font-semibold" 
              : "hover:text-[#66BB6A]"}
            >
                HOME
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/shop" 
              className={({isActive}) => isActive
              ? "text-[#66BB6A] font-semibold" 
              : "hover:text-[#66BB6A]"}
            >
                SHOP
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blogs" 
              className={({isActive}) => isActive
              ? "text-[#66BB6A] font-semibold" 
              : "hover:text-[#66BB6A]"}
            >
              BLOGS
            </NavLink>
          </li>
        </ul>

        {/* Right Icons (Desktop) */}
        <div className="items-center hidden space-x-6 md:flex">
          <button aria-label="Search"><Search className="h-5 w-5 hover:text-[#66BB6A]" /></button>
          <button aria-label="Cart"><ShoppingCart className="h-5 w-5 hover:text-[#66BB6A]" /></button>
          <button aria-label="Account"><User className="h-5 w-5 hover:text-[#66BB6A]" /></button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#2E7D32] border-t border-green-800 py-4 px-6 rounded-lg shadow-lg">
          <ul className="space-y-4 text-lg font-medium">
            <li><a href="/" className="block hover:text-[#66BB6A]">HOME</a></li>
            <li><a href="/about" className="block hover:text-[#66BB6A]">ABOUT US</a></li>
            <li><a href="/shop" className="block hover:text-[#66BB6A]">SHOP</a></li>
            <li><a href="/blogs" className="block hover:text-[#66BB6A]">BLOGS</a></li>
            <li><a href="/contact" className="block hover:text-[#66BB6A]">CONTACT</a></li>
          </ul>
          {/* Mobile Icons */}
          <div className="flex items-center mt-6 space-x-6">
            <Search className="h-5 w-5 hover:text-[#66BB6A]" />
            <ShoppingCart className="h-5 w-5 hover:text-[#66BB6A]" />
            <User className="h-5 w-5 hover:text-[#66BB6A]" />
          </div>
        </div>
      )}
    </nav>
  );
}
