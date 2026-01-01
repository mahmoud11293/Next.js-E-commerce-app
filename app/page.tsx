import Categories from "@/components/home/Categories";
import MainSlider from "@/components/home/MainSlider";
import ProductsSection from "@/components/home/ProductsSection";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Suspense fallback={<SkeletonCard />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<SkeletonCard />}>
        <ProductsSection />
      </Suspense>
    </>
  );
}
