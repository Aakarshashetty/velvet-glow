import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../contexts/data-context";

import "./styles.css";
import { useAuth } from "../contexts/auth-context";
import { BiSearchAlt } from "react-icons/bi";
import { BsBagHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
export const Header = () => {
  const { filterDispatcher } = useData();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const searchFilterHandler = (e) => {
    filterDispatcher({
      type: "FILTER_BY_SEARCH",
      payload: e.target.value,
    });
    navigate("/products");
  };
  return (
    <div className="header">
      <NavLink to="/" className="header-name">
        VelvetGlow
      </NavLink>
      <BiSearchAlt className="search-icon" />
      <input placeholder="search" onChange={(e) => searchFilterHandler(e)} />
      <div className="header-link">
        {isLoggedIn ? (
          <NavLink to="/profile" className="header-link-profile">
            Profile
          </NavLink>
        ) : (
          <NavLink to="/login" className="header-link-login">
            Login
          </NavLink>
        )}

        <NavLink to="/wishlist">
          <BsBagHeartFill />
        </NavLink>
        <NavLink to="/cart" className="cart-icon">
          <ImCart />
        </NavLink>
      </div>
    </div>
  );
};
