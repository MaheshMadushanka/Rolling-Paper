// src/components/Hero/Hero.jsx
import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie-player"; // default export
import smokeJson from "../../assets/lottie/smoke.json"; // ensure file exists here
import gsap from "gsap";
import { useMotion } from "../../contexts/MotionContext";
import "./hero.css";

export default function Hero() {
  const { enabled } = useMotion();
  const container = useRef(null);
  const product = useRef(null);
  const smoke = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(container.current.querySelectorAll(".stagger"), {
      y: 24, opacity: 0, stagger: 0.08, duration: 0.6
    });
    tl.from(product.current, { scale: 0.9, opacity: 0, duration: 0.9 }, "-=0.4");

    // floating loop
    const float = gsap.to(product.current, {
      y: -8, rotation: 1.6, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut"
    });

    // gentle drift for the smoke wrapper (slow, large movement)
    const drift = gsap.to(smoke.current, {
      x: 20,
      y: -8,
      rotation: 0.8,
      duration: 12,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      tl.kill(); float.kill(); drift.kill();
    };
  }, [enabled]);

  return (
    <section className="hero-wrapper" aria-label="Hero">
      <div className="hero-inner container" ref={container}>
        <div className="hero-copy">
          <h1 className="stagger text-4xl md:text-5xl font-extrabold mb-4">
            PureWrap — Natural Rolling Papers
          </h1>
          <p className="stagger text-gray-600 mb-6 max-w-xl">
            Ultra-thin, slow-burning rolling papers crafted from natural fibers.
          </p>
          <div className="stagger hero-cta-group">
            <a href="/products" className="px-6 py-3 bg-black text-white rounded-lg mr-3">Shop Now</a>
            <a href="/wholesale" className="px-6 py-3 border rounded-lg">Wholesale</a>
          </div>
        </div>

        <div className="hero-product" aria-hidden="true">
          {/* product card */}
          <div ref={product} className="product-card float-y">
            <img src="/images/placeholder-product.jpg" alt="product" />
            <div className="meta">
              <div className="font-semibold">PureWrap Hemp</div>
              <div className="text-sm text-gray-500">King Slim — 32 leaves</div>
            </div>
          </div>

          {/* smoke: debug-friendly wrapper */}
          <div
            ref={smoke}
            className="smoke-wrap smoke-container debug-visible"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <Lottie
              loop
              play
              animationData={smokeJson}
              style={{ width: 420, height: 260 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
