import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import Category from "./components/pages/backend/category/Category";
import Clothes from "./components/pages/backend/clothes/Clothes";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/clothes" element={<Clothes />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
