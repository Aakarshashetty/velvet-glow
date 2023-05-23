export const wishlistReducer = (wishListData, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishListData,
        wishList: action.payload,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishListData,
        wishList: action.payload,
      };
    default:
      return wishListData;
  }
};
