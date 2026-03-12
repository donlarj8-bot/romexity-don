"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ShopGrid from "../components/ShopGrid";
import SearchBar from "../components/SearchBar";

export default function Home() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <SearchBar onSearch={setSearch} />
      
      <Categories />

      <ShopGrid search={search} />
    </>
  );
}