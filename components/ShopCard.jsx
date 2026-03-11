"use client";

import { useState } from "react";
import Image from "next/image";

export default function ShopCard({ shop }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">

      <Image
        src={shop.image}
        alt={shop.name}
        width={400}
        height={200}
        className="w-full h-44 object-cover"
      />

      <div className="p-6 text-center">

        <h3 className="text-xl font-semibold mb-3">
          {shop.name}
        </h3>

        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
        >
          {open ? "Close Shop" : "Visit Shop"}
        </button>

        {open && (
          <div className="mt-6 text-left">

            <p className="font-semibold">
              Address: {shop.address}
            </p>

            <p className="mb-4">
              Ph: {shop.phone}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {shop.products.map((item, idx) => (

                <div
                  key={idx}
                  className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition"
                >

                  <Image
                    src={shop.image}
                    alt={item.name}
                    width={200}
                    height={120}
                    className="w-full h-28 object-cover"
                  />

                  <div className="p-3 text-center">

                    <p className="font-medium text-sm">
                      {item.name}
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}