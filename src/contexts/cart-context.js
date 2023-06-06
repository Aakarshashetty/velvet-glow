import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { toast } from "react-hot-toast";

const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cartData, cartDispatcher] = useReducer(cartReducer, { cartItems: [] });

  const totalCartValue = cartData.cartItems.reduce(
    (totalPrice, product) =>
      (totalPrice += Number(product.price) * product.qty),
    0
  );

  let cartLength = cartData?.cartItems?.length;

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        { headers: { authorization: localStorage.getItem("encodedToken") } }
      );
      if (response.status === 200 || response.status === 201) {
        cartDispatcher({
          type: "ADD_TO_CART",
          payload: response.data.cart,
        });
      }
      toast.success("Added to Cart")
    } catch (e) {
      toast.error("Something went wrong")
      console.error("Couldn't able to add product", e);
    }
  };
  const removeFromCart = async (product) => {
    try {
      const response = await axios.delete(
        `/api/user/cart/${product._id}`,

        { headers: { authorization: localStorage.getItem("encodedToken") } }
      );
      if (response.status === 200 || response.status === 201) {
        cartDispatcher({
          type: "REMOVE_FROM_CART",
          payload: response.data.cart,
        });
      }
      toast.error("Removed from cart")
    } catch (e) {
      toast.error("Something went wrong")
      console.error("Couldn't able to delete product", e);
    }
  };
  const incrementQunatity = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        {
          action: { type: "increment" },
        },
        { headers: { authorization: localStorage.getItem("encodedToken") } }
      );
      if (response.status === 200 || response.status === 201) {
        cartDispatcher({
          type: "INC_QTY",
          payload: response.data.cart,
        });
      }
    } catch (e) {}
  };
  const decrementQuantity = async (product) => {
    try {
      if (product.qty > 1) {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: { type: "decrement" },
          },
          { headers: { authorization: localStorage.getItem("encodedToken") } }
        );
        if (response.status === 200 || response.status === 201) {
          cartDispatcher({ type: "DEC_QTY", payload: response.data.cart });
        }
      } else {
        const response = await axios.delete(
          `/api/user/cart/${product._id}`,

          { headers: { authorization: localStorage.getItem("encodedToken") } }
        );
        if (response.status === 200 || response.status === 201) {
          cartDispatcher({
            type: "REMOVE_FROM_CART",
            payload: response.data.cart,
          });
        }
      }
    } catch (e) {}
  };
  return (
    <CartContext.Provider
      value={{
        cartDispatcher,
        addToCart,
        removeFromCart,
        incrementQunatity,
        decrementQuantity,
        totalCartValue,
        cartData,
        cartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
