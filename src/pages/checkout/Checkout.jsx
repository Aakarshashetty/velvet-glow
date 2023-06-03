import React from "react";
import UserAddress from "../Profile/UserAddress";
import { useCart } from "../../contexts/cart-context";

const Checkout = () => {
  const { totalCartValue } = useCart();
  return (
    <div>
      <div className="address">
        {/* <UserAddress /> */}
      </div>
      <div className="price-details">
        <h2>Price Details</h2>
        <input placeholder="coupon code" /> <button>Apply</button>
        <hr />
        <div>
          <p>Price </p>
          <span>₹{totalCartValue}</span>
          <p>Delivery charges </p>
          <span>₹100</span>
          <hr />
          <b>
            <p>Total Price</p>
            <span>₹{totalCartValue + 100}</span>
          </b>
        </div>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
