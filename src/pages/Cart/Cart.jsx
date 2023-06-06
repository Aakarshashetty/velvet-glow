import { useCart } from "../../contexts/cart-context";
import CartProductCard from "./CartProductCard";
import "./cartStyles.css";
import { useNavigate } from "react-router";

export const Cart = () => {
  const { cartData, cartLength, totalCartValue } = useCart();
  const navigate = useNavigate();
  const checkoutHandler=() => {
    navigate("/checkout")
  }
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
            <div className="empty-cart">
              <h2>Your bag is empty!</h2>
              <p>This feels too light! Go on, add all your favourites</p>
              <button
                className="start-shopping"
                onClick={() => navigate("/products")}
              >
                Start Shopping
              </button>
            </div>
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
      {cartLength > 0 && (
        <button onClick={checkoutHandler} className="checkout">
          CheckOut
        </button>
      )}
    </div>
  );
};
