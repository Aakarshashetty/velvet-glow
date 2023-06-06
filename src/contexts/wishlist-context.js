import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { toast } from "react-hot-toast";

const WishListContext = createContext();
export const WishListContextProvider = ({ children }) => {
  const [wishlistData, wishlistDispatcher] = useReducer(wishlistReducer, {
    wishList: [],
  });

  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: { authorization: localStorage.getItem("encodedToken") },
        }
      );
      if (response.status === 200 || response.status === 201) {
        wishlistDispatcher({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
      }
      toast.success("Added to Wishlist")
    } catch (e) {
      toast.error("Something went wrong")
      console.error("something is wrong");
    }
  };

  const removeFromWishlist = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: localStorage.getItem("encodedToken") },
      });
      if (response.status === 200 || response.status === 201) {
        wishlistDispatcher({
          type: "REMOVE_FROM_WISHLIST",
          payload: response.data.wishlist,
        });
      }
      toast.error("Removed from Wishlist")
    } catch (e) {
      console.error("something is wrong");
    }
  };

  const wishListLength = wishlistData?.wishList?.length;
  
  return (
    <WishListContext.Provider
      value={{
        wishlistData,
        addToWishlist,
        removeFromWishlist,
        wishListLength,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
export const useWishList = () => useContext(WishListContext);
