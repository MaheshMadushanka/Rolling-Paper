import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import products from "../../data/products.js";

export default function ProductGrid({ limit }) {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {list.map(p => <ProductCard key={p.id} item={p} />)}
      </div>
    </div>
  );
}
