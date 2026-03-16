"use client";
import React, { useState, useEffect } from 'react';
import { Syne } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ShopGrid from '@/components/ShopGrid';
// FIXED PATH: Pointing to the root sanity folder
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
    const searchLower = searchTerm.toLowerCase();
    const shopName = shop.name?.toLowerCase() || "";
    const shopTags = shop.tags?.toLowerCase() || "";
    return shopName.includes(searchLower) || shopTags.includes(searchLower);
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

        {view === "shop" && selectedShop && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setView("home")} className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 mb-6 hover:text-blue-600 transition-colors text-gray-400">
              ← Back to Madhapur
            </button>
            
            <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-10">
              <img src={selectedShop.img} className="w-full h-full object-cover" alt={selectedShop.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="bg-blue-600 text-white text-[9px] font-black w-fit px-2 py-0.5 rounded mb-2 uppercase tracking-widest">Verified Store</div>
                <h1 className={`${syne.className} text-3xl text-white`}>{selectedShop.name}</h1>
                <p className="text-gray-200 text-sm">{selectedShop.loc}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
               <h2 className="text-lg font-bold text-gray-900 tracking-tight">Live Shelf View</h2>
               <div className="flex items-center gap-2 text-green-600">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Inventory Live</span>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-gray-50 rounded-xl mb-3 overflow-hidden border border-gray-100 relative">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                       <span className="text-[10px] font-bold uppercase tracking-tighter italic opacity-30">Scan in progress</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-[12px] text-gray-800 leading-tight">Catalog Item</h4>
                  <p className="text-blue-600 font-black text-sm mt-0.5">₹ --</p>
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