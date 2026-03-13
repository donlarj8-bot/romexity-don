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
    "🎧 Gadgets"
  ];

  return (
    <section className="py-6">

      <div className="max-w-7xl mx-auto px-4">

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 my-3" />

        {/* Centered Categories */}
        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-6 py-2 border border-gray-400 rounded-full shadow-md"
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Bottom Horizontal Line */}
        <hr className="border-t border-gray-300 my-3" />

      </div>

    </section>
  );
}