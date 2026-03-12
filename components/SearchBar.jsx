"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    onSearch(text);
  };

  return (
    <div className="pt-32 pb-6 flex justify-center">

      <div className="relative">

        <input
          type="text"
          placeholder="Search shops..."
          value={value}
          onChange={handleChange}
          className="w-80 md:w-[420px] px-5 py-3 pr-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Search Icon with Pink Circle */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-400 hover:bg-sky-600 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.3-4.3m1.3-5.7a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

      </div>

    </div>
  );
}