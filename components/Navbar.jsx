import React from 'react';
import SearchBar from './SearchBar';

export default function Navbar({ setView, searchTerm, setSearchTerm, syneClass }) {
  return (
    <header className="sticky top-0 z-50 bg-white md:border-b border-gray-100 px-2 md:px-10 py-2 md:py-5">

      {/* ---------------- LAPTOP VIEW (UNCHANGED) ---------------- */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView("home")}>
          <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xs md:text-base">
            RX
          </div>

          <div className={`${syneClass} text-sm md:text-2xl tracking-tighter text-blue-600 font-bold`}>
            RomeXity
          </div>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex items-center gap-4">
         <button className="text-sm md:text-lg font-medium px-4 md:px-6 py-2 md:py-3 hover:bg-gray-50 rounded-full text-gray-600">
            List your shop
          </button>

          <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs md:text-base font-bold">
            RX
          </div>
        </div>

      </div>


      {/* ---------------- MOBILE VIEW (CENTERED) ---------------- */}
      <div className="md:hidden flex flex-col items-center pt-6 pb-3">

        {/* Logo - Centered and slightly larger */}
        <div className="mb-5">
          <div
            className={`${syneClass} text-2xl tracking-tighter text-blue-600 cursor-pointer italic font-bold`}
            onClick={() => setView("home")}
          >
            RomeXity
          </div>
        </div>

        {/* Search - Centered below logo with original bar sizing */}
        <div className="w-full px-4 flex justify-center">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

      </div>

    </header>
  );
}