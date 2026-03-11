"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [cartCount] = useState(0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6">

        <a className="flex items-center bg-gray-100 px-3 py-2 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
          <Image
            src="/romexity-logo.jpeg"
            alt="RomeXity Logo"
            width={60}
            height={32}
            className="rounded-md"
          />
        </a>

        {/* empty space */}
        <div></div>

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