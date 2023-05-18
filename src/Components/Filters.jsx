import { useData } from "../contexts/data-context";

export const Filters = () => {
  const {
    filterDispatcher,
    filterData: { sort, byWomen, byMen, byMomAndBaby },
  } = useData();

  return (
    <section>
      <div>
        <input
          type="checkbox"
          checked={byWomen}
          onChange={() => filterDispatcher({ type: "FILTER_BY_WOMEN" })}
        />
        <span>Women</span>
        <input
          type="checkbox"
          checked={byMen}
          onChange={() => filterDispatcher({ type: "FILTER_BY_MEN" })}
        />
        <span>Men</span>
        <input
          type="checkbox"
          checked={byMomAndBaby}
          onChange={() => filterDispatcher({ type: "FILTER_BY_MOMANDBABY" })}
        />
        <span>Mom & Baby</span>
      </div>
      <div>
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
      <input
        type="range"
        min="100"
        max="1000"
        onChange={(e) =>
          filterDispatcher({ type: "FILTER_BY_PRICE", payload: e.target.value })
        }
      />
      <button onClick={() => filterDispatcher({ type: "CLEAR_FILTER" })}>
        clear Filters
      </button>
    </section>
  );
};
