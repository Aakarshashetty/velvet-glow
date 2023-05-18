import { useNavigate } from "react-router";
import { useData } from "../../contexts/data-context";

export const Landing = () => {
  const { productData, productDispatcher } = useData();
  const navigate = useNavigate();
  const categoryHandler = (categoryName) => {
    productDispatcher({
      type: "SET_FILTER_PRODUCTS",
      payload: productData.products.filter(
        (product) => product.category === categoryName
      ),
    });
    navigate("/products");
  };
  return (
    <>
      <div>
        {productData.categories.map(({ _id, categoryName }) => (
          <div key={_id} onClick={() => categoryHandler(categoryName)}>
            {categoryName}
          </div>
        ))}
      </div>
    </>
  );
};
