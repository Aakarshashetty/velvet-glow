import { useWishList } from "../../contexts/wishlist-context";
import WishListCard from "./WishListCard";
import { v4 as uuid } from "uuid";
import "./wishList.css";

export const Wishlist = () => {
  const { wishlistData, wishListLength } = useWishList();
  return (
    <div className="wishlist">
      <h2>
        My WishList <span className="wishlist-length">({wishListLength})</span>
      </h2>
      {wishListLength > 0 ? (
        wishlistData.wishList?.map((product) => (
          <div className="wishlist-list">
            <WishListCard product={product} key={uuid()} />
          </div>
        ))
      ) : (
        <h1>Your WishList is empty!</h1>
      )}
    </div>
  );
};
