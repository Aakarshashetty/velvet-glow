import { Route, Routes } from "react-router";
import "./App.css";
import { Landing } from "./pages/Landing/Landing";
import { Product } from "./pages/ProductPage/Product";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/Login/Login";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <h1>Velvet Glow</h1>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
