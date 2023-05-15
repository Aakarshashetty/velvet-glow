import { NavLink } from "react-router-dom";
import { Search } from "./Search";

export const Header = () => {
  return (
    <>
      <NavLink to="/">VelvetGlow</NavLink>
      <Search />
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/whishlist">Whislist</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  );
};
