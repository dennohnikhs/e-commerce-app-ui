import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail.jsx";
import { Cart } from "./components/Cart.jsx";
import { CheckOut } from "./components/CheckOut.jsx";
import { Category } from "./components/Category.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/categories/:categoryId" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
