"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ShopGrid from "../components/ShopGrid";

export default function Home() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar onSearch={setSearch} />

      <div className="pt-32">
        <Categories />
        <ShopGrid search={search} />
      </div>
    </>
  );
}