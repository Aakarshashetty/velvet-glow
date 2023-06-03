import React from "react";
import { useNavigate, useParams } from "react-router";
import { useData } from "../../contexts/data-context";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useCart } from "../../contexts/cart-context";
import { useWishList } from "../../contexts/wishlist-context";
import { useAuth } from "../../contexts/auth-context";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productData } = useData();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const {addToWishlist, removeFromWishlist,wishlistData} = useWishList();
  const { cartData, addToCart } = useCart();
  const product = productData.products.find(({ _id }) => _id === productId);
  const { _id, name, image, original_price, price, rating,offer,description } = product;
  const addProductToCart = () => {
    isLoggedIn ? addToCart(product) : navigate("/login");
  };
  return (
    <div className="product-details">
      <div className="product-details-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details-details">
        <h3>{name}</h3>
        <span className="price">
          ₹{price}
          <span className="original-price">₹{original_price}</span>
        </span>
        <span className="offer">{offer}</span>
        <p className="offer">inclusive of all taxes</p>
        <p className="description"><b>Desciption:</b> {description}</p>
        <p className="rating">{rating}★</p>

        {
          cartData?.cartItems?.some((product) => product._id === _id) ? <button onClick={() => navigate("/cart")} className="add-to-cart">
            Go to Cart
          </button> : <button onClick={addProductToCart} className="add-to-cart">Add to Cart</button>
        }
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
      </div>
    </div>
  );
};

export default ProductDetails;
