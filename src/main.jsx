import "regenerator-runtime/runtime";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

let container = null;
document.addEventListener("DOMContentLoaded", function () {
  if (!container) {
    container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
          <Analytics />
        </ClerkProvider>
      </React.StrictMode>
    );
  }
});
