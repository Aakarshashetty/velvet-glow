import React from 'react'
import { useWishList } from '../../contexts/wishlist-context';
import { MdDelete } from "react-icons/md";
import { useCart } from '../../contexts/cart-context';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/auth-context';

const WishListCard = ({product}) => {
  const { cartData, addToCart } = useCart();
    const {removeFromWishlist} = useWishList();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { _id, name, image, original_price, price, rating,offer } = product;
    const addProductToCart = () => {
      isLoggedIn ? addToCart(product) : navigate("/login");
    };
  return (
    <div className='wishlist-card'>
        <li key={_id}>
        <div className="wishlist-card-image">
          <img src={image} alt={name} width={200} />
        </div>
        <div className="wishlist-card-details">
          <h3>{name.slice(0, 50)}...</h3>
          <p className="price">
            ₹{price}
            <span className="original-price">₹{original_price}</span>
          </p>
          <p className="offer">{offer}</p>
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
          <button
            onClick={() => removeFromWishlist(product)}
            className="remove-from-wishlist"
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </div>
  )
}

export default WishListCard