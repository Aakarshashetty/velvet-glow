export const productReducer = (productData, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...productData,
        categories: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...productData,
        products: action.payload,
        filteredProducts: action.payload,
      };
    // case "SET_FILTER_PRODUCTS":
    //   return {
    //     ...productData,
    //     filteredProducts: action.payload,
    //   };
    // case "SET_FILTER_CATEGORIES":
    //   return {
    //     ...productData,
    //     [action.payload]: true,
    //   };

    default:
      return productData;
  }
};
export const filterReducer = (filterData, action) => {
  switch (action.type) {
    case "FILTER_BY_SORT":
      return {
        ...filterData,
        sort: action.payload,
      };
    case "FILTER_BY_WOMEN":
      return {
        ...filterData,
        byWomen: !filterData.byWomen,
      };
    case "FILTER_BY_MEN":
      return {
        ...filterData,
        byMen: !filterData.byMen,
      };
    case "FILTER_BY_MOM&BABY":
      return {
        ...filterData,
        byMomAndBaby: !filterData.byMomAndBaby,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...filterData,
        search: action.payload,
      };
    case "FILTER_BY_PRICE":
      return {
        ...filterData,
        byPrice: action.payload,
      };
    case "FILTER_BY_RATING":
      return { ...filterData, byRating: action.payload };
    case "CLEAR_FILTER":
      return {
        sort: "",
        byWomen: false,
        byMen: false,
        byMomAndBaby: false,
        byPrice: 0,
        search: "",
      };
    default:
      return filterData;
  }
};
