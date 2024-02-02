import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryProductDetails } from "./components/ProductDetail.jsx";
import { Cart } from "./components/Cart.jsx";
import { CheckOut } from "./components/CheckOut.jsx";
import { CategoryProducts } from "./components/CategoryProducts.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index="/" element={<Home />} />
          <Route
            path="/products/:productId"
            element={<CategoryProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/categories/:categoryId"
            element={<CategoryProducts />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
