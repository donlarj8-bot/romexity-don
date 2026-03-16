import React from 'react';

export default function ShopCard({ shop, setSelectedShop, setView }) {
  return (
    <div 
      className="group cursor-pointer"
      onClick={() => { 
        setSelectedShop(shop); 
        setView("shop"); 
        window.scrollTo(0, 0); 
      }}
    >
      <div className="aspect-video w-full bg-gray-100 rounded-xl mb-3 overflow-hidden relative border border-gray-100">
        <div className="absolute top-2 left-2 bg-white/95 backdrop-blur px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-green-600 z-10">Live</div>
        <img 
          src={shop.img || "/placeholder.jpg"} 
          alt={shop.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <h3 className="font-bold text-sm text-gray-900">{shop.name}</h3>
        <p className="text-[14px] text-gray-500 mt-0.5 line-clamp-1">
          {shop.description}
        </p>
      
        {/* CHANGED THIS LINE BELOW */}
        <p className="text-[11px] mt-1 font-bold text-blue-600 uppercase tracking-tight">
          {shop.loc}
        </p>
      </div>
    </div>
  );
}