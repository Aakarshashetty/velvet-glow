import React from 'react'
import { useCart } from '../../contexts/cart-context'
import './orders.css'

const Orders = () => {
  const {cartData,cartLength} = useCart();
  return (
    <div className='orders'>
      <h2>Orders</h2>
      <p>{cartLength} Items(s) ordered</p>
      <p>Order Number: ABC-1345787999-12537</p>
      <div className='orders-list'>
        {
          cartData?.cartItems.map(({_id, name, image}) => <li key={_id}>
            <img src={image} alt={name} width={50} height={50}/>
          </li>)
        }
      </div>
      <button className='track-button'>Track</button>
    </div>
  )
}

export default Orders