import { Filters } from "../../Components/Filters";
import { useCart } from "../../contexts/cart-context";
import { useData } from "../../contexts/data-context";

export const Product = () => {
  const {
    productData,
    filterData: { sort, byWomen, byMen, byMomAndBaby, byPrice, search },
  } = useData();
  const { cartDispatcher, cartData } = useCart();

  const getFilteredProducts = () => {
    let filteredProducts = productData.products;
    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byWomen) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === "Women"
      );
    }
    if (byMen) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === "Men"
      );
    }
    if (byMomAndBaby) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === "Mom & Baby"
      );
    }
    if (byMen && byWomen) {
      filteredProducts = productData.products.filter(
        ({ category }) => category !== "Mom & Baby"
      );
    }
    if (byMomAndBaby && byWomen) {
      filteredProducts = productData.products.filter(
        ({ category }) => category !== "Men"
      );
    }
    if (byMen && byMomAndBaby) {
      filteredProducts = productData.products.filter(
        ({ category }) => category !== "Women"
      );
    }
    if (byPrice) {
      filteredProducts = filteredProducts.filter(
        ({ price }) => Number(price) <= byPrice
      );
    }
    if (search !== "") {
      filteredProducts = filteredProducts.filter(({ name }) =>
        name.toLowerCase().includes(search)
      );
    }
    return filteredProducts;
  };

  return (
    <>
      <Filters />
      {getFilteredProducts().map((product) => {
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
                cartDispatcher({ type: "ADD_TO_CART", payload: product })
              }
            >
              {cartData.cartItems.some((product) => product._id === _id)
                ? "Go to Cart"
                : "Add to cart"}
            </button>
            <button>Add to whishlist</button>
          </li>
        );
      })}
    </>
  );
};
