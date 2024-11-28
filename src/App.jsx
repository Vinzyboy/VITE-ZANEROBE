import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import Category from "./components/pages/backend/category/Category";
import Clothes from "./components/pages/backend/clothes/Clothes";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:slug" element={<ProductInfo />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/clothes" element={<Clothes />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
