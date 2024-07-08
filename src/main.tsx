import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from "./context/CartContext";
import App from './App.tsx'
import './index.css'
import { LikeProvider } from './context/HeartContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LikeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LikeProvider>
  </React.StrictMode>
);
