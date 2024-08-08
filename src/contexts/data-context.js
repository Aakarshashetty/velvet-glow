import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { filterReducer, productReducer } from "../reducers/productReducter";

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [productData, productDispatcher] = useReducer(productReducer, {
    categories: [],
    products: [],
    filteredProducts: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, filterDispatcher] = useReducer(filterReducer, {
    sort: "",
    byWomen: false,
    byMen: false,
    byMomAndBaby: false,
    byPrice: 2000,
    search: "",
    byRating:0,
  });
  const [showMenu,setShowMenu] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <DataContext.Provider
      value={{
        productData,
        productDispatcher,
        filterData,
        filterDispatcher,
        isLoading,
        showMenu,
        setShowMenu
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
