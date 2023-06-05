import { Route, Routes } from "react-router";
import "./App.css";
import { Landing } from "./pages/Landing/Landing";
import { Product } from "./pages/ProductPage/Product";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/Login/Login";
import { Header } from "./Components/Header";
import { RequiresAuth } from "./Components/RequiresAuth";
import SignUp from "./signup/SignUp";
import Logout from "./pages/Logout/Logout";
import ProductDetails from "./pages/ProductPage/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import UserAddress from "./pages/Profile/UserAddress";
import {Toaster} from 'react-hot-toast';
import UserDetails from "./pages/Profile/UserDetails";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserDetails />} />
        <Route path="/address" element={<UserAddress />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
