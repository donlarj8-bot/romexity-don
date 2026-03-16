import React from 'react';
import ShopCard from './ShopCard';

export default function ShopGrid({ filteredShops, setSelectedShop, setView }) {
  return (
    <section className="mt-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">Verified in Madhapur</h2>
        <p className="text-gray-500 text-xs font-medium">Showing {filteredShops.length} stores nearby</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredShops.map((shop) => (
          <ShopCard 
            key={shop._id}
            shop={shop} 
            setSelectedShop={setSelectedShop} 
            setView={setView} 
          />
        ))}
      </div>
    </section>
  );
}