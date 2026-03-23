import React from 'react';

export default function ShopCard({ shop, setSelectedShop, setView }) {
  
  const handleDirectionsClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div 
      className="group cursor-pointer"
      onClick={() => { 
        setSelectedShop(shop); 
        setView("shop"); 
        window.scrollTo(0, 0); 
      }}
    >
      {/* Image Section */}
      <div className="aspect-video w-full bg-gray-100 rounded-xl mb-3 overflow-hidden relative border border-gray-100">
        <div className="absolute top-2 left-2 bg-white/95 backdrop-blur px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-green-600 z-10">Live</div>
        <img 
          src={shop.img || "/placeholder.jpg"} 
          alt={shop.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Text Section */}
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-sm text-gray-900">{shop.name}</h3>
        
        <p className="text-[14px] text-gray-500 line-clamp-1">
          {shop.description}
        </p>
      
        {/* Blue Address Text Block Removed From Here */}

        {/* Show Directions Button */}
        {shop.googleMapsUrl && (
          <a 
            href={shop.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDirectionsClick}
            className="mt-2 inline-flex items-center justify-center bg-blue-600 text-white py-2 px-3 rounded-lg text-[12px] font-bold hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            📍 Show Directions
          </a>
        )}
      </div>
    </div>
  );
}