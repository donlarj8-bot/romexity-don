"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ onSearch }) {
  const [cartCount] = useState(0);
  const [value, setValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    onSearch(text);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">

      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        
        {/* Logo */}
        <a className="flex items-center bg-gray-100 px-3 py-2 rounded-xl shadow-sm hover:shadow-md transition">
          <Image
            src="/romexity-logo.jpeg"
            alt="RomeXity Logo"
            width={60}
            height={32}
            className="rounded-md"
          />
        </a>

        {/* SearchBar inside Navbar */}
        <div className="flex-1 flex justify-center">

          <input
            type="text"
            placeholder="Search shops..."
            value={value}
            onChange={handleChange}
            className={`border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300
              
              ${
                scrolled
                  ? "w-56 px-4 py-2"
                  : "w-96 md:w-[420px] px-6 py-3"
              }
            `}
          />

        </div>

        {/* Cart */}
        <button className="relative border border-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100">
          🛍️
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            {cartCount}
          </span>
        </button>

      </div>
    </nav>
  );
}