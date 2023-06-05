import { Filters } from "../../Components/Filters";
import Footer from "../../Components/Footer";
import { useData } from "../../contexts/data-context";
import ProductCard from "./ProductCard";
import { v4 as uuid } from "uuid";
import "./product.css";
import Loader from "../../Components/Loader";
export const Product = () => {
  const {
    productData,
    filterData: { sort, byWomen, byMen, byMomAndBaby, byPrice, search },
    isLoading,
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
    if (byMen && byWomen && byMomAndBaby) {
      filteredProducts = productData.products;
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
      <div className="product">
        <Filters />
        {isLoading && <Loader />}
        <div className="product-list">
          {getFilteredProducts().map((product) => (
            <ProductCard product={product} key={uuid()} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
