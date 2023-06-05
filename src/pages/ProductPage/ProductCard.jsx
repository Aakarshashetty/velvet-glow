import React from "react";
import { useCart } from "../../contexts/cart-context";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useWishList } from "../../contexts/wishlist-context";

import { useAuth } from "../../contexts/auth-context";

const ProductCard = ({ product }) => {
  const { cartData, addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistData } = useWishList();
  const { _id, name, image, original_price, price, rating } = product;
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const productDetailsHandler = (id) => {
    navigate(`/products/${id}`);
  };
  const addProductToCart = () => {
    isLoggedIn ? addToCart(product) : navigate("/login");
  };
  return (
    <div className="product-card" key={_id}>
      <li >
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
        {cartData?.cartItems?.some((product) => product._id === _id) ? (
          <button onClick={() => navigate("/cart")} className="add-to-cart">
            Go to Cart
          </button>
        ) : (
          <button onClick={addProductToCart} className="add-to-cart">
            Add to Cart
          </button>
        )}
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
