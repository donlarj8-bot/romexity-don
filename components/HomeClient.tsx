"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ShopGrid from '@/components/ShopGrid';

type Shop = {
  _id: string;
  name: string;
  loc: string;
  img: string;
  tags: string;
  description: string;
  phone?: string;
  price?: string;
  googleMapsUrl?: string; // Updated to match your new schema/query
};

export default function HomeClient({ initialShops, syneClass }: { initialShops: Shop[], syneClass: string }) {
  const [view, setView] = useState("home"); 
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [shops] = useState<Shop[]>(initialShops);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shopId = params.get('shop');
    if (shopId) {
      const shopToRestore = shops.find(s => s._id === shopId);
      if (shopToRestore) {
        setSelectedShop(shopToRestore);
        setView("shop");
      }
    }
  }, [shops]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const shopId = params.get('shop');
      if (!shopId) {
        setView("home");
        setSelectedShop(null);
      } else if (shops.length > 0) {
        const shopToRestore = shops.find(s => s._id === shopId);
        if (shopToRestore) {
          setSelectedShop(shopToRestore);
          setView("shop");
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [shops]);

  const handleOpenShop = (shop: Shop) => {
    setSelectedShop(shop);
    setView("shop");
    window.history.pushState({ view: 'shop' }, '', `?shop=${shop._id}`);
  };

  const filteredShops = shops.filter(shop => {
    const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
    const combinedContent = `${shop.name?.toLowerCase() || ""} ${shop.tags?.toLowerCase() || ""}`;
    return searchWords.every(word => combinedContent.includes(word));
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans">
      <Navbar 
        setView={setView} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        syneClass={syneClass} 
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-1">
        {view === "home" && (
           <ShopGrid 
             filteredShops={filteredShops} 
             setSelectedShop={(shop: Shop) => handleOpenShop(shop)} 
             setView={() => {}} 
           />
        )}

        {view === "shop" && selectedShop && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row border border-gray-200 rounded-[24px] overflow-hidden bg-white mb-12 shadow-sm">
              <div className="w-full md:w-[35%] h-[220px] md:h-[280px] border-r border-gray-100 bg-gray-50">
                <img src={selectedShop.img} className="w-full h-full object-cover" alt={selectedShop.name} />
              </div>

              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-left">
                <h1 className={`${syneClass} text-2xl md:text-4xl text-gray-900 leading-tight mb-2 uppercase`}>
                  {selectedShop.name}
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-4 max-w-md">
                  {selectedShop.description || "Premium experience available at this location."}
                </p>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                   <span className="text-[10px] font-black uppercase tracking-widest">{selectedShop.loc}</span>
                </div>

                {/* ADDED: SHOW DIRECTIONS BUTTON IN SHOP VIEW */}
                {selectedShop.googleMapsUrl && (
                  <a 
                    href={selectedShop.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white py-3 px-8 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all duration-200 shadow-md w-fit"
                  >
                    📍 Show Directions
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-3">
               <h2 className="text-lg font-black text-gray-900 tracking-tighter uppercase italic">AVAILABLE NOW</h2>
               <div className="flex items-center gap-2 text-green-600 pb-1">
                  <span className="w-1 h-1 bg-green-600 rounded-full animate-pulse"></span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-green-600/80">Live Inventory</span>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-50 rounded-xl mb-3 overflow-hidden border border-gray-100 relative">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 italic opacity-20 text-[8px]">Scanning...</div>
                  </div>
                  <h4 className="font-bold text-[12px] text-gray-800 leading-tight">Stock Item {item}</h4>
                  <p className="text-blue-600 font-black text-[10px] uppercase">Details Pending</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <footer className="mt-20 border-t border-gray-100 py-10 px-6 bg-gray-50 text-center">
         <div className={`${syneClass} text-xl uppercase italic opacity-20 text-blue-600 mb-2 cursor-pointer`} onClick={() => setView("home")}>RomeXity</div>
         <p className="text-[10px] text-gray-400 font-medium tracking-wide">© 2026 RomeXity India.</p>
      </footer>
    </div>
  );
}