import React from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        <ProductGrid />
      </div>
    </div>
  );
}
