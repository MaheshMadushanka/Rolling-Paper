import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // tailwind + custom styles
import { MotionProvider } from "./contexts/MotionContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MotionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MotionProvider>
  </React.StrictMode>
);
