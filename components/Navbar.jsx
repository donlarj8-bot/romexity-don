import React from 'react';
import SearchBar from './SearchBar';

export default function Navbar({ setView, searchTerm, setSearchTerm, syneClass }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView("home")}>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xs">
            RX
          </div>
          <div className={`${syneClass} text-2xl tracking-tighter text-blue-600`}>
            RomeXity
          </div>
        </div>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium px-4 py-2 hover:bg-gray-50 rounded-full text-gray-600">List your shop</button>
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">RX</div>
        </div>
      </div>
    </header>
  );
}