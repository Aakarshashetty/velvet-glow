import React from "react";
import { useCart } from "../../contexts/cart-context";
import UserAddress from "../Profile/UserAddress";
import "./checkout.css";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const Checkout = () => {
  const { totalCartValue } = useCart();
  const navigate = useNavigate();
  const proceedToOrder = () => {
    toast.success("Product ordered successfully")
    navigate("/orders")

  }
  return (
    <div className="checkout">
      <div className="address">
        <UserAddress />
      </div>
      <div className="price-details">
        <h2>Order Summary</h2>

        <div className="price-details-details">
          <div className="total-cart-value">
            <p>Price</p>
            <span>₹{totalCartValue}</span>
          </div>
          <div className="delivery-charges">
            <p>Delivery charges </p>
            <span>₹100</span>
          </div>
          <div className="total-price">
            <p>Total Price </p>
            <span>₹{totalCartValue + 100}</span>
          </div>
        </div>
        <button
          className="proceed-button"
          onClick={proceedToOrder}
        >
          Proceed
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
