import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cartData, cartDispatcher] = useReducer(cartReducer, { cartItems: [] });
  console.log(cartData);
  useEffect(() => {
    (async () => {
      try {
        const cartData = await axios.get("/api/user/cart");
        cartData.status === 200 &&
          cartDispatcher({ type: "GET_CART_DATA", payload: cartData.cart });
      } catch (e) {}
    })();
  }, []);
  return (
    <CartContext.Provider value={{ cartDispatcher, cartData }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
