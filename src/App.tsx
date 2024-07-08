import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import NavSection from "./section/NavSection";
import Footer from "./section/Footer";
import SectionThree from "./section/SectionThree";

const App: React.FC = () => (
  <BrowserRouter>
    <NavSection />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:name" element={<ProductDetails />} />
    </Routes>
    <SectionThree />
    <Footer />
  </BrowserRouter>
);

export default App;
