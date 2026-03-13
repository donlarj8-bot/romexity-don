"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ onSearch }) {
  
  const [value, setValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    onSearch?.(text);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">

      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center bg-gray-100 px-3 py-2 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <Image
            src="/romexity-logo.jpeg"
            alt="RomeXity Logo"
            width={60}
            height={32}
            className="rounded-md"
          />
        </Link>

        {/* SearchBar */}
        <div className="flex-1 flex justify-center">
          
          <div className="relative">

            <input
              type="text"
              placeholder="Search shops..."
              value={value}
              onChange={handleChange}
              className={`border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300
                ${
                  scrolled
                    ? "w-56 py-2 px-4 pr-10"
                    : "w-96 md:w-105 py-3 px-6 pr-12"
                }
              `}
            />

            {/* Search Icon */}
            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
              🔍
            </span>

          </div>

        </div>

      </div>

    </nav>
  );
}