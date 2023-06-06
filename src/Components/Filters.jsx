import { useData } from "../contexts/data-context";

export const Filters = () => {
  const {
    filterDispatcher,
    filterData: { sort, byWomen, byMen, byMomAndBaby },
  } = useData();

  return (
    <div className="filter-panel">
      <div className="filter-header">
      <h4>Filters</h4>
      <button onClick={() => filterDispatcher({ type: "CLEAR_FILTER" })}>
        clear
      </button>
      </div>
      <h4>Category</h4>
      <div className="filter-checkbox">
        <label>
          <input
            type="checkbox"
            checked={byWomen}
            onChange={() => filterDispatcher({ type: "FILTER_BY_WOMEN" })}
          />
          <span>Women</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={byMen}
            onChange={() => filterDispatcher({ type: "FILTER_BY_MEN" })}
          />
          <span>Men</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={byMomAndBaby}
            onChange={() => filterDispatcher({ type: "FILTER_BY_MOMANDBABY" })}
          />
          <span>Mom & Baby</span>
        </label>
      </div>
      <h4>Sort By</h4>
      <div className="filter-radio">
        <input
          type="radio"
          name="price"
          onChange={() =>
            filterDispatcher({ type: "FILTER_BY_SORT", payload: "lowToHigh" })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        Low to High
        <input
          type="radio"
          name="price"
          onChange={() =>
            filterDispatcher({ type: "FILTER_BY_SORT", payload: "HighToLow" })
          }
          checked={sort === "HighToLow" ? true : false}
        />
        High to Low
      </div>
      <h4>Price</h4>
      <div className="price-range">
          <p>100</p>
          <p>500</p>
          <p>1000</p>
      </div>
      <input
        type="range"
        min="100"
        max="1000"
        onChange={(e) =>
          filterDispatcher({ type: "FILTER_BY_PRICE", payload: e.target.value })
        }
        className="range"
      />
     
    </div>
  );
};
