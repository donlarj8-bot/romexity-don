"use client";

export default function Categories() {

  const categories = [
    "🍎 Fruits",
    "👕 Clothes",
    "💻 Electronics",
    "📚 Books",
    "🛒 Groceries",
    "🥩 Meat",
    "🍕 Food",
    "🎧 Gadgets",
    "🏠 Home"
  ];

  return (

    <section className="py-6">

      <div className="max-w-7xl mx-auto px-4">

        {/* Centered Categories */}
        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((cat, index) => (

            <button
              key={index}
              className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              {cat}
            </button>

          ))}

        </div>

      </div>

    </section>

  );
}