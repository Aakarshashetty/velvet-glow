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
import Profile from "./pages/Profile/Profile";
import Logout from "./pages/Logout/Logout";


function App() {
  return (
    <div className="App">
      <Header />
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
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </div>
  );
}

export default App;
