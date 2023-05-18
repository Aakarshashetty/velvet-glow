export const cartReducer = (cartData, action) => {
  switch (action.type) {
    case "GET_CART_DATA":
      return {
        ...cartData,
        cartItems: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...cartData,
        cartItems: [...cartData.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartData,
        cartItems: cartData.cartItems.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };
  }
};
