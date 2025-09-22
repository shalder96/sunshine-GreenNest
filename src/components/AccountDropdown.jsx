import React, { useState, useEffect, useRef } from "react";
import { User, LogOut, Heart, Package, UserCircle2, LogIn } from "lucide-react";
import UserAuthForm from "./Authentication/userAuthForm";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const AccountDropdown = () => {
  const [open, setOpen] = useState(false);    //dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // fake state for demo
  const [formOpen, setFormOpen] = useState(false);  //login/signup
  const dropdownRef = useRef(null);
  const formRef = useRef(null);


  // Close dropdown only when clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        formRef.current &&
        !formRef.current.contains(e.target)
      ) {
        setOpen(false);
        setFormOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOpen = () => setOpen((prev) => !prev);
  const handleCloseForm = () => setFormOpen(false);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Account Icon */}
      <IconButton
        onClick={handleToggleOpen}
        aria-haspopup="true"
        aria-expanded={open}
        sx={{
          color: "white",
          p: 1,
          "&:hover": { backgroundColor: "rgba(165, 214, 167, 0.2)" },
        }}
      >
        <User className="w-6 h-6" />
      </IconButton>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 z-50 w-56 mt-2 overflow-hidden border shadow-lg bg-white/10 border-white/20 backdrop-blur-lg rounded-xl"
        >
          {!isLoggedIn ? (
            <>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  setFormOpen(true); // open login/signup modal
                  setOpen(false); // close dropdown
                }}
                startIcon={<LogIn size={18} />}
                sx={{
                  position: "relative",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  borderRadius: "12px",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(165, 214, 167, 0.2)",
                    color: "black",
                    borderColor: "rgba(255,255,255,0.5)",
                  },
                }}
              >
                Login / Signup
              </Button>

              {/* Modal Form */}
              <div ref={formRef}>
                <UserAuthForm open={formOpen} onClose={handleCloseForm} />
              </div>
            </>
          ) : (
            <>
              {/* If logged in */}
              <Button 
                fullWidth 
                startIcon={<UserCircle2 size={18} />}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  px: 2,
                  py: 1.5,
                  color: "#FAFAFA",
                  borderRadius: "0",
                  "&:hover": { backgroundColor: "rgba(165, 214, 167, 0.2)" },
                }}
              >
                My Account
              </Button>

              <Button fullWidth startIcon={<Package size={18} />}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  px: 2,
                  py: 1.5,
                  color: "#FAFAFA",
                  borderRadius: "0",
                  "&:hover": { backgroundColor: "rgba(165, 214, 167, 0.2)" },
                }}
              >
                My Orders
              </Button>

              <Button fullWidth startIcon={<Heart size={18} />}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  px: 2,
                  py: 1.5,
                  color: "#FAFAFA",
                  borderRadius: "0",
                  "&:hover": { backgroundColor: "rgba(165, 214, 167, 0.2)" },
                }}
              >
                Wishlist
              </Button>

              <Button
                fullWidth
                startIcon={<LogOut size={18} />}
                onClick={() => setIsLoggedIn(false)}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  px: 2,
                  py: 1.5,
                  color: "#FAFAFA",
                  borderRadius: "0",
                  "&:hover": { backgroundColor: "rgba(244, 67, 54, 0.2)" },
                }}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
