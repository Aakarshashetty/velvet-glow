import { NavLink } from "react-router-dom";
import { useData } from "../contexts/data-context";

export const Header = () => {
  const { filterDispatcher } = useData();
  return (
    <>
      <NavLink to="/">VelvetGlow</NavLink>
      <input
        placeholder="search"
        onChange={(e) =>
          filterDispatcher({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          })
        }
      />
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/whishlist">Whislist</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  );
};
