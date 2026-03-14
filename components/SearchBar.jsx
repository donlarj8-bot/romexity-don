import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-[90%] md:w-[700px] max-w-3xl">
      <div className="flex flex-nowrap items-center bg-white border border-gray-200 rounded-full py-2 md:py-3 px-3 md:px-4 shadow-xl">

        {/* Input */}
        <input
          type="text"
          placeholder="Search 'hotel', 'biriyani'..."
          className="flex-1 min-w-0 bg-transparent outline-none text-sm text-gray-700 px-2 md:px-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Search button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full flex items-center justify-center gap-2 ml-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          {/* hide text on small screens */}
          <span className="hidden md:inline text-xs md:text-sm font-bold">
            Search
          </span>
        </button>

        {/* divider */}
        <div className="h-5 w-[1px] bg-gray-200 mx-3"></div>

        {/* location */}
        <button className="flex items-center gap-1 text-xs md:text-sm font-semibold text-gray-600 whitespace-nowrap flex-shrink-0">
          <span>Madhapur, HYD</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

      </div>
    </div>
  );
}