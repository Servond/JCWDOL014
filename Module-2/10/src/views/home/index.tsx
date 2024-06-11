"use client";
import dynamic from "next/dynamic";

// import CounterSection from "./sections/counterSection";
// import ProductSection from "./sections/productSection";

const CounterSection = dynamic(() => import("./sections/counterSection"));
const ProductSection = dynamic(() => import("./sections/productSection"));

function HomeView() {
  return (
    <div>
      <CounterSection />
      <ProductSection />
    </div>
  );
}

export default HomeView;
