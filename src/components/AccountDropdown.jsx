import React, { useState } from "react";
import { User, LogOut, Heart, Package, UserCircle2, LogIn } from "lucide-react";
import UserAuthForm from "./Authentication/userAuthForm";
import Button from "@mui/material/Button";

const AccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // fake state for demo
  const [formOpen, setFormOpen] = useState(false);
  

  const handleToggleOpen = () => {
    setOpen((prev) => (!prev))
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <div className="relative">
      {/* Account Icon */}
      <button
        onClick={() => handleToggleOpen(!open)}
        className="p-2 rounded-full hover:bg-[#A5D6A7]/30 transition"
      >
        <User className="w-6 h-6 text-white" />
      </button>
    

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 z-50 w-56 mt-2 overflow-hidden border shadow-lg bg-white/10 border-white/20 backdrop-blur-lg rounded-xl">
          {!isLoggedIn ? (
            <>
              {/* If NOT logged in */}
              <Button 
              fullWidth
                variant="outlined"
                onClick={() => setFormOpen(true)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2, // theme.spacing(2)
                  px: 2,
                  py: 1,
                  transition: "all 0.3s ease",
                  backgroundColor: "none",
                  color: "white",
                  borderRadius: "12px",
                  "&:hover": {backgroundColor: "rgba(165, 214, 167, 0.2)", color: "black"}
                }}
              >
                <LogIn size={18} /> Login / Signup
              </Button>
              <UserAuthForm open={formOpen} onClose={handleClose} />
            </>
          ) : (
            <>
              {/* If logged in */}
              <button className="w-full flex items-center gap-2 px-4 py-3 text-[#FAFAFA] hover:bg-[#A5D6A7]/20 transition">
                <UserCircle2 size={18} /> My Account
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 text-[#FAFAFA] hover:bg-[#A5D6A7]/20 transition">
                <Package size={18} /> My Orders
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 text-[#FAFAFA] hover:bg-[#A5D6A7]/20 transition">
                <Heart size={18} /> Wishlist
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-2 px-4 py-3 text-[#FAFAFA] hover:bg-red-500/20 transition"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
