import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Categories from "../components/Categories"
import ShopGrid from "../components/ShopGrid"
import SearchBar from "../components/SearchBar"

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      {/* <Hero /> */}
      <Categories />
      <ShopGrid />
    </>
  );
}