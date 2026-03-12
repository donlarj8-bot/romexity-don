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

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Search shops..."
          value={value}
          onChange={handleChange}
          className="w-80 md:w-[420px] px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700">
          Search
        </button>

      </div>

    </div>
  );
}