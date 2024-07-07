import HomePage from "./pages/HomePage";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";


const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;