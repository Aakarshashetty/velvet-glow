import { useCart } from "../../contexts/cart-context";
import CartProductCard from "./CartProductCard";

import "./cartStyles.css";

export const Cart = () => {
  const { cartData, cartLength, totalCartValue } = useCart();

  return (
    <div className="cart">
      <h4>My Cart({cartLength})</h4>
      <div className="cart-list">
        {cartData.cartItems?.map((product) => (
          <CartProductCard product={product} />
        ))}
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
    </div>
  );
};
