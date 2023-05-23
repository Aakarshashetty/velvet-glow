import React from 'react'
import { useWishList } from '../../contexts/wishlist-context';
import { MdDelete } from "react-icons/md";

const WishListCard = ({product}) => {
    const {removeFromWishlist} = useWishList();
    const { _id, name, image, original_price, price, rating,offer } = product;
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