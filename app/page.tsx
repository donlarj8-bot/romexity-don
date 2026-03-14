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
  tags: "helmet bike helmet riding safety gear motorcycle accessories",
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
    name: "Alankrutha Restaurant",
    loc: "Main Road",
    dist: "200m",
    items: 55,
    img: "/Alankrutha-Restaurant.jpg",
    tags: "food restaurant eating hotel dining meals lunch dinner non-veg veg",
    description: "Restaurant serving traditional South Indian meals and biriyani."
  },
  {
    id: 12,
    name: "Biriyani Dukaan",
    loc: "Ramanthapur X Roads",
    dist: "450m",
    items: 32,
    img: "/Biriyani-Dukaan.jpg",
    tags: "food restaurant eating hotel biriyani rice spicy non-veg",
    description: "Popular place for spicy biriyani and rice dishes."
  },
  {
    id: 13,
    name: "Gadget Houz",
    loc: "Near TV Studio",
    dist: "1.1km",
    items: 124,
    img: "/Gadget-Houz.jpg",
    tags: "electronics mobile phone gadgets tech accessories laptop",
    description: "Electronics store selling gadgets, mobiles, and accessories."
  },
  {
    id: 14,
    name: "Guntur Gongoora",
    loc: "Beside Public School",
    dist: "700m",
    items: 40,
    img: "/Guntur-Gongoora.jpg",
    tags: "food restaurant eating hotel south indian spicy traditional meals",
    description: "Traditional Andhra restaurant famous for spicy meals."
  },
  {
    id: 15,
    name: "Just For You",
    loc: "Church Lane",
    dist: "350m",
    items: 88,
    img: "/Just-For-You.png",
    tags: "fashion clothes apparel gifts shopping boutique",
    description: "Fashion boutique selling clothes and gift items."
  },
  {
    id: 16,
    name: "Katragadda's Food Court",
    loc: "Metro Pillar 1502",
    dist: "1.4km",
    items: 62,
    img: "/Katragadda's-Food-Court.jpg",
    tags: "food restaurant eating hotel snacks tiffins street food",
    description: "Food court offering snacks, tiffins, and street food."
  },
  {
    id: 17,
    name: "KFC",
    loc: "Main Road",
    dist: "100m",
    items: 25,
    img: "/kfc.jpg",
    tags: "food restaurant eating hotel chicken burger fast food",
    description: "Fast-food restaurant famous for fried chicken and burgers."
  },
  {
    id: 18,
    name: "Lenskart",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/lenskart.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Eyewear store selling glasses, frames, and sunglasses."
  },
  {
    id: 19,
    name: "Waltnutz",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/Walnutz-House.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Cafe known for desserts and sweet treats."
  },
  {
    id: 20,
    name: "Belgian Waffle",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/belgian-waffle.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Dessert shop specializing in Belgian waffles."
  },
  {
    id: 21,
    name: "Bubble Recap",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/bubble-recap.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Bubble tea shop offering flavored drinks."
  },
  {
    id: 22,
    name: "Car Detailing Studio",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/car-detailing-studio.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Car detailing service for cleaning and polishing vehicles."
  },
  {
    id: 23,
    name: "Career Consultz",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/career-consultz.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Consulting center helping students with career guidance."
  },
  {
    id: 24,
    name: "Moto Vault",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/moto-vault.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Motorcycle accessories and gear store."
  },
  {
    id: 25,
    name: "Pawparazzi",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/pawparazzi.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Pet grooming and accessories shop."
  },
  {
    id: 26,
    name: "Silver Switch & Carat Switch",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/silver-switch-&-carat-switch.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Jewellery store selling silver and gold items."
  },
  {
    id: 27,
    name: "Swasa",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/swasa.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Wellness center offering health and lifestyle services."
  },
  {
    id: 28,
    name: "Viswasa",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/viswasa.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Local health and wellness service provider."
  },
  {
    id: 29,
    name: "Wow Momo",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/wow-momo.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 30,
    name: "Abc Salon Unisex",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/abc-salon-unisex.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 31,
    name: "Crystal Vision Eye Care Centre",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/crystal-vision-eye-care-centre.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 32,
    name: "Elite Hotel Hitech",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/elite-hotel-hitech.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 33,
    name: "Imfs Abroad Partner",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/imfs-abroad-partner.png",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 34,
    name: "Global Fashions",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/global-fashions.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 35,
    name: "Madhapur Bawarchi",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/madhapur-bawarchi.png",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 36,
    name: "Pralines & Cream",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/pralines-&-cream.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 37,
    name: "Sampoorna Retailing",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/sampoorna-retailing.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 38,
    name: "Sis Group Enterprises",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/sis-group-enterprises.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 39,
    name: "Skt Gold & Diamonds",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/skt-gold-&-diamonds.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 40,
    name: "Srinidha Food Court",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/srinidha-food-court.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  {
    id: 41,
    name: "Zamindar Restaurant",
    loc: "Opp. More Supermarket",
    dist: "900m",
    items: 215,
    img: "/zamindar-restaurant.jpg",
    tags: "fashion glasses frames sunglasses lens eyewear specs eye clinic",
    description: "Fast-food chain specializing in momos and quick snacks."
  },
  
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

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
        
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