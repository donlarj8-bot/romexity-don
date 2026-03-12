"use client";

import ShopCard from "./ShopCard";

export default function ShopGrid({ search }) {

  const shops = [
    {
      name: "KFC",
      image: "/kfc.jpg",
      address: "Madhapur, Hyderabad",
      phone: "9876543210",
      category: "food",
      products: [
        { name: "Chicken Bucket", price: 100 },
        { name: "Zinger Burger", price: 120 },
        { name: "French Fries", price: 80 }
      ]
    },
    {
      name: "Lenskart",
      image: "/lenskart.jpg",
      address: "Banjara Hills, Hyderabad",
      phone: "9123456780",
      category: "electronics",
      products: [
        { name: "Sunglasses", price: 999 },
        { name: "Computer Glasses", price: 799 },
        { name: "Contact Lenses", price: 599 }
      ]
    },
    {
      name: "S Mart",
      image: "/s-mart.jpg",
      address: "Kukatpally, Hyderabad",
      phone: "9012345678",
      category: "groceries",
      products: [
        { name: "Rice Bag", price: 1200 },
        { name: "Cooking Oil", price: 250 },
        { name: "Sugar Pack", price: 90 }
      ]
    },
    {
      name: "Walnutz House",
      image: "/walnutz-house.jpg",
      address: "Gachibowli, Hyderabad",
      phone: "9345678123",
      category: "meat",
      products: [
        { name: "Almonds Pack", price: 350 },
        { name: "Cashews Pack", price: 400 },
        { name: "Walnuts Pack", price: 450 }
      ]
    },
    {
      name: "Biriyani Dukaan",
      image: "/biriyani-dukaan.jpg",
      address: "Charminar, Hyderabad",
      phone: "9456123789",
      category: "food",
      products: [
        { name: "Chicken Biryani", price: 180 },
        { name: "Mutton Biryani", price: 220 },
        { name: "Egg Biryani", price: 140 }
      ]
    },
    {
      name: "Alan Krutha Restaurant",
      image: "/alan-krutha-restaurant.jpg",
      address: "Hitech City, Hyderabad",
      phone: "9567812340",
      category: "restaurant",
      products: [
        { name: "Paneer Butter Masala", price: 200 },
        { name: "Veg Fried Rice", price: 160 },
        { name: "Butter Naan", price: 40 }
      ]
    }
  ];

  const query = search.toLowerCase();

  const categoryMap = {
    food: ["food", "restaurant"],
    electronics: ["electronics", "gadgets"],
    groceries: ["groceries", "fruits", "meat"]
  };

  const relatedCategories = categoryMap[query] || [];

  const filteredShops = shops.filter((shop) => {

    const shopCategory = shop.category.toLowerCase();

    const categoryMatch =
      shopCategory.includes(query) ||
      relatedCategories.includes(shopCategory);

    return (
      shop.name.toLowerCase().includes(query) ||
      categoryMatch ||
      shop.address.toLowerCase().includes(query)
    );

  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        Browse Shops
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredShops.map((shop, index) => (
          <ShopCard key={index} shop={shop} />
        ))}

      </div>

    </div>
  );
}