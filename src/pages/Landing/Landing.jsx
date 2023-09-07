import { useNavigate } from "react-router";
import { useData } from "../../contexts/data-context";
import { useState } from "react";
import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";
import Loader from "../../Components/Loader";
import ProductCard from "../ProductPage/ProductCard";
import "./landing.css";
export const Landing = () => {
  const { productData, filterDispatcher, isLoading } = useData();
  const [bestOfProducts, setBestOfProducts] = useState("best-seller")
  

  const navigate = useNavigate();
  const categoryHandler = (categoryName) => {
    window.scrollTo(0, 0);
    filterDispatcher({
      type: `FILTER_BY_${categoryName.split(" ").join("").toUpperCase()}`,
    });
    navigate("/products");
  };
  const viewProductsHandler = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };
  return (
    <>
      <div className="landing">
        <ImageSlider/>
      
        <div>
          <div className="best-of">
            <a onClick={(e)=>{setBestOfProducts("best-seller");e.preventDefault()}} href="/">bestsellers</a>
            <a onClick={(e)=>{setBestOfProducts("combo");e.preventDefault()}} href="/">combos @ 30% off</a>
            
              {
                bestOfProducts === "best-seller" ?<div className="best-of-products">
                  {
                    productData.products.map(product => product.best_seller && <ProductCard product={product} key={product._id}/>)
                  }
                </div> :<div className="best-of-products">
                  {
                    productData.products.map(product => product.category === "combo" && <ProductCard product={product} key={product._id}/>)
                  }
                </div>
              }
            
          </div>
        </div>
        <h1> SHOP BY CATEGORIES</h1>

        <div className="landing-categories">
          {isLoading && <Loader />}
          {productData.categories.map(({ _id, categoryName, img }) => (
            <div
              key={_id}
              onClick={() => categoryHandler(categoryName)}
              className="landing-categories-category"
            >
              <img alt="categoryImage" src={img} />
              <h3 className="category-name">{categoryName}</h3>
            </div>
          ))}
        </div>

        {!isLoading && (
          <button className="landing-button" onClick={viewProductsHandler}>
            View all products
          </button>
        )}
        <Footer />
      </div>
    </>
  );
};
