import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";


import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wholesale from "./pages/Wholesale";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wholesale" element={<Wholesale />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
