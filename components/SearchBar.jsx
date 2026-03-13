"use client";

import { useState } from "react";

export default function SearchBar({ onSearch, scrolled }) {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);

    if (onSearch) {
      onSearch(text);
    }
  };

  if (scrolled) return null;

  return (
    <div className="pt-32 pb-6 flex justify-center">

      <div className="flex gap-3 relative">

        <input
          type="text"
          placeholder="Search shops..."
          value={value}
          onChange={handleChange}
          className="w-80 md:w-[420px] px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Search Icon */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-500 text-white px-3 py-2 rounded-full z-10">
          🔍
        </div>

      </div>

    </div>
  );
}