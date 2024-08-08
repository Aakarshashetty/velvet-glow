import { Filters } from "../../Components/Filters";
import { useData } from "../../contexts/data-context";
import ProductCard from "./ProductCard";
import { v4 as uuid } from "uuid";
import "./product.css";
import Loader from "../../Components/Loader";
import { FaFilter } from "react-icons/fa";
export const Product = () => {
  const {
    productData,
    filterData: {
      sort,
      byWomen,
      byMen,
      byMomAndBaby,
      byPrice,
      search,
      byRating,
    },
    isLoading,
    showMenu,
    setShowMenu,
  } = useData();

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
        ({ category }) =>
          category.split(" ").join("").toLowerCase() === "mom&baby"
      );
    }
    if (byMen && byWomen) {
      filteredProducts = productData.products.filter(
        ({ category }) =>
          category.split(" ").join("").toLowerCase() !== "mom&baby"
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
    if (byMen && byWomen && byMomAndBaby) {
      filteredProducts = productData.products;
    }
    if (byPrice) {
      let priceFilteredProducts = filteredProducts.filter(
        ({ price }) => Number(price) <= byPrice
      );
      filteredProducts = priceFilteredProducts.length > 0 ? priceFilteredProducts: filteredProducts
    }
    if (search !== "") {
      filteredProducts = filteredProducts.filter(({ name }) =>
        name.toLowerCase().includes(search)
      );
    }
    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (prod) => Number(prod.rating) >= byRating
      );
    }
    return filteredProducts;
  };

  return (
    <>
      <div className="product">
        <Filters />
        <FaFilter className="filter" onClick={() => {setShowMenu(!showMenu)} }/>
        {isLoading && <Loader />}
        <h2>All Products({getFilteredProducts().length})</h2>
        {getFilteredProducts().length > 0 ? (
          <div className="product-list" onClick={() => setShowMenu(!showMenu)}>
            {getFilteredProducts().map((product) => (
              <ProductCard product={product} key={uuid()} />
            ))}
          </div>
        ) : (
          <h1>No Products available with applied filters</h1>
        )}
      </div>
    </>
  );
};
