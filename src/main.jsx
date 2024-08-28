import React from 'react'
import './index.css'
import TgmApp from './temp/TgmApp.jsx'
import {createRoot} from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react";

let container = null;
document.addEventListener('DOMContentLoaded', function() {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <TgmApp/>
        <Analytics />
      </React.StrictMode>
    )}
});