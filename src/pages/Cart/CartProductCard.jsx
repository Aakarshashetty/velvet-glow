import React from "react";
import { useCart } from "../../contexts/cart-context";
import { MdDelete } from "react-icons/md";

import "./cartStyles.css";

const CartProductCard = ({ product }) => {
  const { removeFromCart, incrementQunatity, decrementQuantity } = useCart();
  const { _id, name, image, original_price, price, rating, qty,offer } = product;
  return (
    <div className="cart-card">
      <li key={_id}>
        <div className="cart-card-image">
          <img src={image} alt={name} width={200} />
        </div>
        <div className="cart-card-details">
          <h3>{name.slice(0, 50)}...</h3>
          <p className="price">
            ₹{price}
            <span className="original-price">₹{original_price}</span>
          </p>
          <p className="offer">{offer}</p>
          <p className="rating">{rating}★</p>

          <span className="cart-quantity">
            <button onClick={() => incrementQunatity(product)}>+</button>
            <span>{qty}</span>
            <button onClick={() => decrementQuantity(product)}>-</button>
          </span>

          <button
            onClick={() => removeFromCart(product)}
            className="remove-from-cart"
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartProductCard;
