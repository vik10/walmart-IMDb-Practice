import CardFilter from "./CardFilter";
import { filterCatgry, filterSearch, addToObj, sortfilter } from "../utilit";
import { useSelector, useDispatch } from "react-redux";
import { handleSort, fetchingFilterData } from "../reducer/fetchDataSlice";
import { useEffect, useState } from "react";

const FilterContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer);
  const [arrayFilter, setArrayFilter] = useState([]);

  const searchBarValue = state.fetchSlice.searchText;

  const url =
    `https://imdb-api.com/en/API/${
      !searchBarValue.length ? "Top250Movies" : "SearchTitle"
    }/k_nnu95bc2/` + state.fetchSlice.searchText;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((promise) => promise.json())
      .then((item) => {
        setArrayFilter(!searchBarValue.length ? item.items : item.results);
        // dispatch(fetchingFilterData(item.results));
      });
  }, [state.fetchSlice.searchText]);

  if (arrayFilter === null) return <h1>key Expired...</h1>;

  if (arrayFilter.length === 0)
    return (
      <div className="text-center mt-5">
        <h1 className="text-warning">Loading...</h1>
      </div>
    );

  const baseArr = addToObj(arrayFilter);

  // sortfilter(baseArr, state.fetchSlice.sortValue);
  console.log(baseArr);

  const filterArr = filterSearch(
    filterCatgry(
      baseArr,
      state.fetchSlice.categoryTag,
      state.fetchSlice.category
    ),
    state.fetchSlice.searchTag,
    state.fetchSlice.searchText
  );
  // if (filterArr.length === 0)
  //   return (
  //     <div className="text-center mt-5">
  //       <h1 className="text-warning">Loading...</h1>
  //     </div>
  //   );

  return (
    <>
      <div className="" style={{ backgroundColor: "gray" }}>
        <div
          className="filterCont border rounded p-3 mx-auto bg-light"
          style={{ maxWidth: 600 }}
        >
          <div className="sortFilterbox bg-secondary px-2 py-3 mb-5">
            <label htmlFor="sort" className="text-light">
              Sort By :
            </label>
            <select
              id="cars"
              name="sort"
              className="rounded bg-transparent text-light"
              onChange={(e) => dispatch(handleSort(e.target.value))}
            >
              5
              <option value="id" defaultValue>
                Popularity
              </option>
              <option value="year">Year</option>
              <option value="imDbRating">Rating</option>
            </select>
          </div>
          <p>
            Displaying {filterArr.length} results for
            <span className="fw-bold">{state.fetchSlice.searchText}</span>
          </p>
          <span className="my-4">Search category : </span>
          <div className="d-flex justify-content-between">
            <h5 className="text-warning text-capitalize">
              {state.fetchSlice.category === state.fetchSlice.searchText
                ? "All"
                : state.fetchSlice.category}
            </h5>
            <p>View: Eact totle matches</p>
          </div>
          {filterArr.map((item) => (
            <CardFilter obj={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
