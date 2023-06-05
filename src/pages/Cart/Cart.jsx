import { useNavigate } from "react-router";
import { useCart } from "../../contexts/cart-context";
import CartProductCard from "./CartProductCard";
import {toast} from 'react-hot-toast';

import "./cartStyles.css";

export const Cart = () => {
  const { cartData, cartLength, totalCartValue } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h4>My Cart({cartLength})</h4>
      <div className="cart-box">
      <div className="cart-list">
        {cartLength > 0 ? (
          cartData.cartItems?.map((product) => (
            <CartProductCard product={product} />
          ))
        ) : (
          <h2>Your cart is empty!</h2>
        )}
</div>
        <div className="cart-price">
          <h3>CART PRICE DETAILS</h3>
          {cartData.cartItems?.map(({ name, qty, price }) => (
            <li key={name}>
              <span>
                {name} ({qty})
              </span>{" "}
              <span className="cart-price-price">₹{price}</span>
            </li>
          ))}
          <p className="total-price">
            <span>Total Price: </span>
            <span className="total-price-price">₹{totalCartValue}</span>
          </p>
        </div>
        </div>
     {cartLength > 0 && <button onClick={() => toast.success("Product ordered successfully!")} className="checkout">CheckOut</button>} 
    </div>
  );
};
