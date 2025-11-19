import FeaturedProducts from "@/components/Home/FeaturedProducts";
import HeroSection from "@/components/Home/HeroSection";
import RecentlyAddedProduct from "@/components/Home/RecentlyAddedProduct";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <FeaturedProducts />
      <RecentlyAddedProduct />
    </main>
  );
}
