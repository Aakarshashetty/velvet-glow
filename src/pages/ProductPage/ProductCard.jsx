import React from "react";
import { useCart } from "../../contexts/cart-context";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useWishList } from "../../contexts/wishlist-context";

const ProductCard = ({ product }) => {
  const { cartData, addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistData } = useWishList();
  const { _id, name, image, original_price, price, rating } = product;
  const navigate = useNavigate();
  const productDetailsHandler = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="product-card">
      <li key={_id}>
        <img
          src={image}
          alt={name}
          width={200}
          onClick={() => productDetailsHandler(_id)}
        />
        <h3 onClick={() => productDetailsHandler(_id)}>
          {name.slice(0, 29)}...
        </h3>
        <p className="price">
          ₹{price}
          <span className="original-price">₹{original_price}</span>
        </p>
        <p className="rating">{rating}★</p>

        <button onClick={() => addToCart(product)} className="add-to-cart">
          {cartData?.cartItems?.some((product) => product._id === _id)
            ? "Go to Cart"
            : "Add to cart"}
        </button>
        <button>
          {wishlistData?.wishList?.some((product) => product._id === _id) ? (
            <BsFillSuitHeartFill
              className="wishlist-selected"
              onClick={() => removeFromWishlist(product)}
            />
          ) : (
            <BsFillSuitHeartFill
              className="wishlist"
              onClick={() => addToWishlist(product)}
            />
          )}
        </button>
      </li>
    </div>
  );
};

export default ProductCard;
