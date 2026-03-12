"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ShopGrid from "../components/ShopGrid";
import SearchBar from "../components/SearchBar";

export default function Home() {

  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <SearchBar onSearch={setSearch} scrolled={scrolled} />

      <Categories />

      <ShopGrid search={search} />
    </>
  );
}