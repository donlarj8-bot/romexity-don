"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ scrolled }) {
  const [cartCount] = useState(0);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

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

        {/* Small search bar when scrolled */}
        {scrolled && (
          <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">
            <span className="text-sm font-medium px-2">Anywhere</span>
            <span className="border-l h-4 mx-2"></span>
            <span className="text-sm px-2">Anytime</span>
            <span className="border-l h-4 mx-2"></span>
            <span className="text-sm text-gray-500 px-2">Add guests</span>

            <button className="ml-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              🔍
            </button>
          </div>
        )}

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