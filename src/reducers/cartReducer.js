export const cartReducer = (cartData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartData,
        cartItems: action.payload,
        qty: 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartData,
        cartItems: action.payload,
      };
    case "INC_QTY":
      return {
        ...cartData,
        qty: cartData.qty + 1,
        cartItems: action.payload,
      };
    case "DEC_QTY":
      return {
        ...cartData,
        qty: cartData.qty - 1,
        cartItems: action.payload,
      };
    default:
      return cartData;
  }
};
