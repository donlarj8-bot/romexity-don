import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="hidden md:flex flex-grow max-w-2xl mx-12">
      <div className="flex w-full items-center bg-white border border-gray-200 rounded-full py-3 px-4 shadow-sm hover:shadow-md transition-all">
        <input 
          type="text" 
          placeholder="Search 'hotel', 'biriyani'..." 
          className="flex-grow bg-transparent outline-none text-sm text-gray-700 px-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="text-sm font-bold">Search</span>
        </button>
        <div className="h-4 w-[1px] bg-gray-200 mx-4"></div>
        
        <button className="text-sm font-semibold text-gray-500 hover:text-black flex items-center gap-2 pr-2 whitespace-nowrap">
          <span>Madhapur, HYD</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}