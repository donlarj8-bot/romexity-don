"use client";
import React, { useState } from 'react';
import { Syne } from 'next/font/google';
import Navbar from '@/components/Navbar';
// import Categories from '@/components/Categories';
import ShopGrid from '@/components/ShopGrid';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

type Shop = {
  id: number;
  name: string;
  loc: string;
  dist: string;
  items: number;
  img: string;
  tags: string;
  description: string;
};

export default function Home() {
  const [view, setView] = useState("home"); 
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const shops: Shop[] = [
 {
  id: 1,
  name: "Big Byte Cafe",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/big-byte-cafe.jpg",
  tags: "cafe coffee snacks beverages fastfood sandwiches burgers drinks hangout",
  description: "Cozy cafe serving coffee snacks beverages"
},
{
  id: 2,
  name: "Godavari Cuts",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/godavari-cuts.jpg",
  tags: "non-veg chicken mutton meat shop fresh meat butcher seafood",
  description: "Fresh nonveg chicken mutton meat shop"
},
{
  id: 3,
  name: "Helmet World",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/helmet-world.jpg",
  tags: "helmet bikes bike helmet riding safety gear motorcycle accessories",
  description: "Quality motorcycle helmets and riding accessories"
}, 
{
  id: 4,
  name: "Kaira",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/kaira.jpg",
  tags: "women clothing sarees dresses ethnic wear fashion boutique ladies wear",
  description: "Elegant womens sarees dresses fashion collection"
},
{
  id: 5,
  name: "Roman Island",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/roman-island.jpg",
  tags: "men clothing shirts pants fashion menswear casual formal outfits",
  description: "Trendy mens clothing shirts pants fashion"
},
{
  id: 6,
  name: "Shoe Khazana",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/shoe-khazana.jpg",
  tags: "shoes footwear sneakers sandals formal shoes casual shoes",
  description: "Wide variety shoes sandals sneakers footwear"
},
{
  id: 7,
  name: "Sweets Dude",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/sweets-dude.png",
  tags: "sweets bakery desserts mithai cakes pastries snacks",
  description: "Delicious sweets desserts cakes bakery items"
},
{
  id: 8,
  name: "Taaja Kichen",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/taaja-kichen.jpg",
  tags: "restaurant food meals lunch dinner biriyani veg nonveg dining",
  description: "Fresh restaurant meals veg nonveg biriyani"
},
{
  id: 9,
  name: "The Arvind Store",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/the-arvind-store.jpg",
  tags: "clothing shirts pants fashion menswear formal casual garments",
  description: "Branded clothing store shirts pants fashion"
},
{
  id: 10,
  name: "The Vogue salon",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/the-vogue-salon.jpg",
  tags: "salon beauty haircut hair styling grooming spa makeup skincare",
  description: "Professional salon hair beauty grooming services"
},
{
  id: 11,
  name: "Accord",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/accord.jpg",
  tags: " watches watch store wrist watch luxury watch accessories repair",
  description: "Premium wrist watches and accessories store"
},
{
  id: 12,
  name: "Beal Tree Hotel",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/bael-tree-hotel.jpg",
  tags: "hotel rooms stay lodging accommodation travel",
  description: "Comfortable hotel rooms with quality service"
},
{
  id: 13,
  name: "Cheat Clean",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/cheat-clean.jpg",
  tags: "cafe coffee desserts snacks beverages sweet",
  description: "Cafe serving desserts coffee and snacks"
},
{
  id: 14,
  name: "D style",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/d-style.png",
  tags: "mens fashion clothing shirts jeans apparel",
  description: "Trendy mens fashion clothing and accessories"
},
{
  id: 15,
  name: "Dharvaad Mishra pedaa",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/dharvaad-mishra-pedaa.jpg",
  tags: "sweets peda dessert indian sweets shop",
  description: "Famous Dharwad peda traditional sweet shop"
},
{
  id: 16,
  name: "Dhobhi Wala",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/dhobhiwala.jpg",
  tags: "laundry dryclean washing ironing clothes cleaning",
  description: "Laundry and professional dry cleaning services"
},
{
  id: 17,
  name: "Dollars Men's saloon",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/dollars-mens-saloon.jpg",
  tags: "mens salon haircut beard grooming styling",
  description: "Mens salon haircut grooming styling services"
},
{
  id: 18,
  name: "Food Paradise",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/food-paradise.png",
  tags: "restaurant food meals fastfood snacks dining",
  description: "Restaurant serving variety of delicious foods"
},
{
  id: 19,
  name: "Go Colors",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/go-colors.jpg",
  tags: "womens clothing leggings fashion apparel store",
  description: "Women's leggings and fashion clothing store"
},
{
  id: 20,
  name: "Habiller",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/Habiller.jpg",
  tags: "fashion clothing men women apparel boutique",
  description: "Stylish clothing store for men women"
},
{
  id: 21,
  name: "Heal Fitness Centre",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/heal-fitness-centre.jpg",
  tags: "gym fitness workout training health unisex",
  description: "Unisex gym fitness training and workouts"
},
{
  id: 22,
  name: "Hotel Horizon",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/hotel-horizon.jpg",
  tags: "luxury hotel rooms accommodation stay travel",
  description: "Luxurious hotel stay with modern amenities"
},
{
  id: 23,
  name: "Irani Chai",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/irani-chai.jpg",
  tags: "chai tea snacks cafe beverages irani",
  description: "Popular chai center serving tea snacks"
},
{
  id: 24,
  name: "Jaya Shree Balaji Stationary",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/jayashreebalaji-stationary&sports-gifts & decoration.png",
  tags: "stationery sports gifts decorations school supplies",
  description: "Stationery sports gifts and decorations shop"
},
{
  id: 25,
  name: "King Mandi",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/kings-mandi.jpg",
  tags: "mandi biryani restaurant arabic food dining",
  description: "Arabic mandi restaurant serving delicious meals"
},
{
  id: 26,
  name: "Komala Mess",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/komala-mess.jpg",
  tags: "restaurant tiffins meals dosa pulao chinese",
  description: "Restaurant serving tiffins meals and pulaos"
},
{
  id: 27,
  name: "Legacy Multi Speciality Hospital",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/legcy-multi-speciality-hospital.jpg",
  tags: "hospital healthcare doctors medical treatment emergency",
  description: "Multi speciality hospital with advanced care"
},
{
  id: 28,
  name: "Lenscraft",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/lenscraft.jpg",
  tags: "optical glasses spectacles lenses eyewear vision",
  description: "Optical store for glasses lenses eyewear"
},
{
  id: 29,
  name: "Louis Philippe",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/louis-philippe.jpg",
  tags: "mens clothing formal shirts fashion apparel",
  description: "Premium mens formal clothing fashion store"
},
{
  id: 30,
  name: "Manikanta's LiveSmart Womens Hostel",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/manikanta's-livesmart-womens-hostel.jpg",
  tags: "womens hostel accommodation rooms stay lodging",
  description: "Safe womens hostel with comfortable accommodation"
},
{
  id: 31,
  name: "Mercely's Icecream",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/mercely's-icecream.jpg",
  tags: "icecream desserts scoops cones sweets",
  description: "Delicious icecream scoops cones and desserts"
},
{
  id: 32,
  name: "One More Cup",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/one-more-cup.jpg",
  tags: "tea coffee beverages shawarma snacks cafe",
  description: "Tea coffee beverages and shawarma cafe"
},
{
  id: 33,
  name: "Orange Hotels",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/orange-hotels.jpg",
  tags: "hotel ac rooms stay accommodation lodging",
  description: "AC and non AC hotel rooms"
},
{
  id: 34,
  name: "Organic Creamery",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/organic-creamery.jpg",
  tags: "organic icecream desserts natural dairy sweets",
  description: "India organic natural icecream dessert store"
},
{
  id: 35,
  name: "Palamuru Grill",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/palamuru-grill.jpg",
  tags: "restaurant grill food meals dining",
  description: "Restaurant serving grilled foods and meals"
},
{
  id: 36,
  name: "Ratnadeep",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/ratnadeep.jpg",
  tags: "supermarket groceries retail shopping store",
  description: "Popular supermarket retailing groceries since 1997"
},
{
  id: 37,
  name: "Rayalaseema spice",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/rayalaseema-spice.jpg",
  tags: "family restaurant spicy food meals dining",
  description: "Rayalaseema family restaurant serving spicy food"
},
{
  id: 38,
  name: "Re Bullet Zone",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/Re-bullet-zone.jpg",
  tags: "bikes bike service royal enfield repair workshop",
  description: "Royal Enfield bike service repair centre"
},
{
  id: 39,
  name: "Siddru Bakers",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/siddru-bakers.png",
  tags: "bakery cakes cookies pastries snacks sweets",
  description: "Bakery selling cakes cookies pastries snacks"
},
{
  id: 40,
  name: "Sripala Unisex Salon",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/sripala-unisex-salon.jpg",
  tags: "unisex salon haircut beauty grooming spa",
  description: "Unisex salon beauty hair grooming services"
},
{
  id: 41,
  name: "Style On Studio",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/style-on-studio.jpg",
  tags: "mens salon haircut grooming beard styling",
  description: "Mens salon haircut grooming styling studio"
},
{
  id: 42,
  name: "Whites",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/whites.jpg",
  tags: "laundry dryclean saree polish petrol wash",
  description: "Laundry dryclean saree polish petrol wash"
},
{
  id: 43,
  name: "Zeus MotorCycle Gear",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/zeus-motorcycle-gear.jpg",
  tags: "motorcycle gear jackets gloves riding accessories",
  description: "Motorcycle riding gear jackets gloves accessories"
},
{
  id: 44,
  name: "Siva Men's Saloon",
  loc: "Main Road",
  dist: "200m",
  items: 55,
  img: "/siva-mens-saloon.png",
  tags: "mens salon haircut beard grooming styling",
  description: "Mens salon haircut grooming styling services"
}
  
  
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

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-[1px] md:pt-[1px]">
        
        {view === "home" && (
          <>
            {/* <Categories 
              categories={categories} 
              setSearchTerm={setSearchTerm} 
            /> */}

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