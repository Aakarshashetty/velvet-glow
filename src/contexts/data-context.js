import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer, productReducer } from "../reducers/productReducter";

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [productData, productDispatcher] = useReducer(productReducer, {
    categories: [],
    products: [],
    filteredProducts: [],
    setFilterWomen: false,
    setFilterMen: false,
    setFilteMom: false,
  });
  const [filterData, filterDispatcher] = useReducer(filterReducer, {
    sort: "",
    byWomen: false,
    byMen: false,
    byMomAndBaby: false,
    byPrice: 0,
    search: "",
  });
  useEffect(() => {
    (async () => {
      try {
        const categoryData = await axios.get("/api/categories");
        categoryData.status === 200 &&
          productDispatcher({
            type: "SET_CATEGORIES",
            payload: categoryData.data.categories,
          });
        const productData = await axios.get("/api/products");
        productData.status === 200 &&
          productDispatcher({
            type: "SET_PRODUCTS",
            payload: productData.data.products,
          });
      } catch (e) {
        console.error("coludn't load the data");
      }
    })();
  }, []);
  return (
    <DataContext.Provider
      value={{ productData, productDispatcher, filterData, filterDispatcher }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
