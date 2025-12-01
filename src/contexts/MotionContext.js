import React, { createContext, useState, useContext, useEffect } from "react";

const MotionContext = createContext();

export function MotionProvider({ children }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) setEnabled(false);
  }, []);

  return (
    <MotionContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
