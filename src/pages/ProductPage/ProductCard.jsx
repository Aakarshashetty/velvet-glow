import React from "react";
import { useCart } from "../../contexts/cart-context";
import {BsFillSuitHeartFill} from 'react-icons/bs'


const ProductCard = ({ product }) => {
  const { cartData, addToCart } = useCart();
  const { _id, name, image, original_price, price, rating } =
    product;
  return (
    <div className="product-card">
      <li
        key={_id}
      >
        <img src={image} alt={name} width={200} />
        <h3>{name.slice(0,29)}...</h3>
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
        <button className="wishlist"><BsFillSuitHeartFill/></button>
      </li>
    </div>
  );
};

export default ProductCard;
