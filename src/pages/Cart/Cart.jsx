import { useCart } from "../../contexts/cart-context";

export const Cart = () => {
  const { cartDispatcher, cartData } = useCart();
  return (
    <>
      {cartData.cartItems?.map((product) => {
        const { _id, name, description, image, original_price, price, rating } =
          product;
        return (
          <li
            key={_id}
            style={{ listStyle: "none", margin: "10px", border: "1px solid" }}
          >
            <img src={image} alt={name} width={200} />
            <h3>{name}</h3>
            <p>
              <span>{original_price}</span>
              {price}
            </p>
            <p>{rating}/5</p>
            <p>{description}</p>
            <button
              onClick={() =>
                cartDispatcher({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from cart
            </button>
          </li>
        );
      })}
    </>
  );
};
