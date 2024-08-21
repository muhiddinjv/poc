import React from 'react'
import './index.css'
import App from './App.jsx'
import {createRoot} from 'react-dom/client'

let container = null;
document.addEventListener('DOMContentLoaded', function() {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    )}
});
