import React from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";

export default function Products() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ProductGrid />
    </div>
  );
}
