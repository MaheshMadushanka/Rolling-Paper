import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductGrid limit={4} />
      </section>
    </div>
  );
}
