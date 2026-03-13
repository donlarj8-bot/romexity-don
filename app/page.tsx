"use client";
import React, { useState } from 'react';
import { Syne } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Categories from '@/components/Categories';
import ShopGrid from '@/components/ShopGrid';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

export default function Home() {
  const [view, setView] = useState("home"); 
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const shops = [
    { id: 1, name: "Alankrutha Restaurant", loc: "Main Road", dist: "200m", items: 55, img: "/alankrutha Restaurant.jpg", tags: "food restaurant eating hotel dining meals lunch dinner non-veg veg" },
    { id: 2, name: "Biriyani Dukaan", loc: "Ramanthapur X Roads", dist: "450m", items: 32, img: "/biriyani Dukaan.jpg", tags: "food restaurant eating hotel biriyani rice spicy non-veg" },
    { id: 3, name: "Gadget Houz", loc: "Near TV Studio", dist: "1.1km", items: 124, img: "/gadget Houz.jpg", tags: "electronics mobile phone gadgets tech accessories laptop" },
    { id: 4, name: "Guntur Gongoora", loc: "Beside Public School", dist: "700m", items: 40, img: "/guntur Gongoora.jpg", tags: "food restaurant eating hotel south indian spicy traditional meals" },
    { id: 5, name: "Just For You", loc: "Church Lane", dist: "350m", items: 88, img: "/just For You.png", tags: "fashion clothes apparel gifts shopping boutique" },
    { id: 6, name: "Katragadda's Food Court", loc: "Metro Pillar 1502", dist: "1.4km", items: 62, img: "/katragadda's Food Court.jpg", tags: "food restaurant eating hotel snacks tiffins street food" },
    { id: 7, name: "KFC", loc: "Main Road", dist: "100m", items: 25, img: "/KFC.jpg", tags: "food restaurant eating hotel chicken burger fast food" },
    { id: 8, name: "Lenskart", loc: "Opp. More Supermarket", dist: "900m", items: 215, img: "/Lenskart.jpg", tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic" },
    { id: 9, name: "Waltnutz", loc: "Opp. More Supermarket", dist: "900m", items: 215, img: "/walnutz House.jpg", tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic" },
  ];

  const categories = [
    { name: 'Shoes', icon: '👟' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Watches', icon: '⌚' },
    { name: 'Home Decor', icon: '🖼️' },
    { name: 'Bikes', icon: '🏍️' },
    { name: 'Gifts', icon: '🎁' }
  ];

  const filteredShops = shops.filter(shop => {
    const searchLower = searchTerm.toLowerCase();
    return (
      shop.name.toLowerCase().includes(searchLower) ||
      shop.tags.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans">
      
      <Navbar 
        setView={setView} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        syneClass={syne.className} 
      />

      <main className="max-w-7xl mx-auto px-6 pt-12">
        
        {view === "home" && (
          <>
            <Categories 
              categories={categories} 
              setSearchTerm={setSearchTerm} 
            />

            <ShopGrid 
              filteredShops={filteredShops} 
              setSelectedShop={setSelectedShop} 
              setView={setView} 
            />
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
                <p className="text-gray-200 text-sm">{selectedShop.loc} • {selectedShop.items} Items</p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
               <h2 className="text-lg font-bold text-gray-900 tracking-tight">Live Shelf View</h2>
               <div className="flex items-center gap-2 text-green-600">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Stock Updated 1h ago</span>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-gray-50 rounded-xl mb-3 overflow-hidden border border-gray-100 relative">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                       <span className="text-[10px] font-bold uppercase tracking-tighter italic opacity-30">Scan in progress</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded text-[8px] font-bold shadow-sm">NEW</div>
                  </div>
                  <h4 className="font-bold text-[12px] text-gray-800 leading-tight">Premium Verified Item</h4>
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