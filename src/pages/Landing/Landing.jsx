import { useNavigate } from "react-router";
import { useData } from "../../contexts/data-context";
import { NavLink } from "react-router-dom";

import "./landing.css";
import Footer from "../../Components/Footer";
import Loader from "../../Components/Loader";
export const Landing = () => {
  const { productData, filterDispatcher, isLoading } = useData();

  const navigate = useNavigate();
  const categoryHandler = (categoryName) => {
    window.scrollTo(0, 0);
    filterDispatcher({
      type: `FILTER_BY_${categoryName.toUpperCase()}`,
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
        <NavLink to="/products" className="hero-image">
          <div className="hero-image2"></div>
        </NavLink>
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
              <h3>{categoryName}</h3>
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
