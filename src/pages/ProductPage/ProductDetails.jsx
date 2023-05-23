import React from "react";
import { useParams } from "react-router";
import { useData } from "../../contexts/data-context";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useCart } from "../../contexts/cart-context";
import { useWishList } from "../../contexts/wishlist-context";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productData } = useData();
  const {addToWishlist, removeFromWishlist,wishlistData} = useWishList();
  const { cartData, addToCart } = useCart();
  const product = productData.products.find(({ _id }) => _id === productId);
  const { _id, name, image, original_price, price, rating,offer,description } = product;
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
      </div>
    </div>
  );
};

export default ProductDetails;
