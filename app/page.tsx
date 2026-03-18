"use client";
import React, { useState, useEffect } from 'react';
import { Syne } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ShopGrid from '@/components/ShopGrid';
import { client } from '@/sanity/lib/client'; 

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

type Shop = {
  _id: string;
  name: string;
  loc: string;
  img: string;
  tags: string;
  description: string;
};

export default function Home() {
  const [view, setView] = useState("home"); 
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getShops() {
      try {
        const query = `*[_type == "store"]{
          _id,
          name,
          description,
          "loc": location,
          "img": mainImage.asset->url,
          tags
        }`;
        const data = await client.fetch(query);
        setShops(data);
      } catch (error) {
        console.error("Sanity connection failed:", error);
      } finally {
        setLoading(false);
      }
    }
    getShops();
  }, []);

  const filteredShops = shops.filter(shop => {
    const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
    const shopName = shop.name?.toLowerCase() || "";
    const shopTags = shop.tags?.toLowerCase() || "";
    const combinedContent = `${shopName} ${shopTags}`;
    
    return searchWords.every(word => combinedContent.includes(word));
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans">
      <Navbar 
        setView={setView} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        syneClass={syne.className} 
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-1">
  {/* --- KEEP THE HOME VIEW --- */}
  {view === "home" && (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-64 gap-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Syncing with RomeXity DB...</p>
        </div>
      ) : (
        <ShopGrid 
          filteredShops={filteredShops} 
          setSelectedShop={setSelectedShop as any} 
          setView={setView} 
        />
      )}
    </>
  )}

  {/* --- NEW UPDATED SHOP VIEW (PASTE STARTS HERE) --- */}
  {view === "shop" && selectedShop && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
    {/* Slim Back Button */}
    <button 
      onClick={() => setView("home")} 
      className="text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 mb-6 hover:text-blue-600 transition-colors text-gray-400"
    >
      ← BACK TO MADHAPUR
    </button>
    
    {/* Compact Shop Info Card */}
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-[24px] overflow-hidden bg-white mb-12 shadow-sm">
      
      {/* Left: Smaller Image Slot */}
      <div className="w-full md:w-[35%] h-[220px] md:h-[280px] border-r border-gray-100 bg-gray-50">
        <img 
          src={selectedShop.img} 
          className="w-full h-full object-cover" 
          alt={selectedShop.name} 
        />
      </div>

      {/* Right: Tightened Text Content */}
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-left">
        <h1 className={`${syne.className} text-2xl md:text-4xl text-gray-900 leading-tight mb-2`}>
          {selectedShop.name}
        </h1>
        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-4 max-w-md">
          {selectedShop.description || "Premium experience available at this location."}
        </p>
        <div className="flex items-center gap-2 text-gray-400">
           <span className="text-[10px] font-black uppercase tracking-widest">{selectedShop.loc}</span>
        </div>
      </div>
    </div>

    {/* Section Title: AVAILABLE NOW */}
    <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-3">
       <h2 className="text-lg font-black text-gray-900 tracking-tighter uppercase italic">AVAILABLE NOW</h2>
       <div className="flex items-center gap-2 text-green-600 pb-1">
          <span className="w-1 h-1 bg-green-600 rounded-full animate-pulse"></span>
          <span className="text-[8px] font-bold uppercase tracking-widest text-green-600/80">Live Inventory</span>
       </div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="group cursor-pointer">
          <div className="aspect-square bg-gray-50 rounded-xl mb-3 overflow-hidden border border-gray-100 relative group-hover:border-blue-200 transition-all">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
               <span className="text-[8px] font-bold uppercase tracking-tighter italic opacity-20 text-center px-2">Scanning...</span>
            </div>
          </div>
          <h4 className="font-bold text-[12px] text-gray-800 leading-tight mb-0.5">Stock Item {item}</h4>
          <p className="text-blue-600 font-black text-[10px] uppercase tracking-tighter">Details Pending</p>
        </div>
      ))}
    </div>
  </div>
)}
</main>
      
      <footer className="mt-20 border-t border-gray-100 py-10 px-6 bg-gray-50 text-center">
         <div className={`${syne.className} text-xl uppercase italic opacity-20 text-blue-600 mb-2 cursor-pointer`} onClick={() => setView("home")}>RomeXity</div>
         <p className="text-[10px] text-gray-400 font-medium tracking-wide">© 2026 RomeXity India. Onlining the Offline.</p>
      </footer>
    </div>
  );
}