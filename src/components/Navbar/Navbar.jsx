import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useMotion } from "../../contexts/MotionContext";
import "./Navbar.css";

export default function Navbar() {
  const { enabled, setEnabled } = useMotion();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extrabold" aria-label="Home">
          <span style={{color: "var(--brand)"}}>PureWrap</span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/" className={({isActive})=> isActive ? "font-semibold" : "text-gray-600"}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=> isActive ? "font-semibold" : "text-gray-600"}>Products</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "font-semibold" : "text-gray-600"}>About</NavLink>
          <NavLink to="/wholesale" className={({isActive})=> isActive ? "font-semibold" : "text-gray-600"}>Wholesale</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? "font-semibold" : "text-gray-600"}>Contact</NavLink>

          <button
            onClick={() => setEnabled(!enabled)}
            title="Toggle animations (reduce motion)"
            className="ml-4 px-3 py-1 rounded-md border text-sm"
          >
            {enabled ? "Motion On" : "Motion Off"}
          </button>
        </nav>
      </div>
    </header>
  );
}
