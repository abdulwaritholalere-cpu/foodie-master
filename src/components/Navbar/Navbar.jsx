import React, { useState } from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Menu", link: "#menu" },
  { id: 3, name: "About", link: "#about" },
  { id: 4, name: "Book Table", link: "#reservation" },
  { id: 5, name: "Reviews", link: "#testimonials" },
];

const Navbar = ({ onCartClick, totalCartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 shadow-sm backdrop-blur-md bg-white/95 dark:bg-gray-900/95 dark:text-white duration-200">
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#home" className="font-extrabold text-2xl sm:text-3xl flex items-center gap-2 group">
              <img src={Logo} alt="Foodie Logo" className="w-9 group-hover:rotate-12 duration-200" />
              <span className="tracking-tight">
                Foodie<span className="text-primary">Zone</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-5">
            <ul className="hidden md:flex items-center gap-6">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-2 text-sm font-medium hover:text-primary transition duration-150"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark mode switcher */}
            <div>
              <DarkMode />
            </div>

            {/* Order / Cart Button */}
            <button
              onClick={onCartClick}
              className="relative bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white text-xs sm:text-sm font-bold py-2 px-4 rounded-full flex items-center gap-2 shadow-md shadow-primary/20"
              aria-label="View order cart"
            >
              <span>Order</span>
              <FaCartShopping className="text-base" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-gray-900 animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-100 dark:border-gray-800 mt-3 space-y-2">
            {Menu.map((menu) => (
              <a
                key={menu.id}
                href={menu.link}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-primary transition"
              >
                {menu.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
