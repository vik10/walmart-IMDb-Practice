import CardFilter from "./CardFilter";
import { useSelector, useDispatch } from "react-redux";
import {
  addToObj,
  sortfilter,
  sortfilterAlpha,
  sortfilterDescending,
  sortfilterAlphaDescending,
} from "../utilit";
import { handleSort } from "../reducer/fetchDataSlice";
import { useState } from "react";

const Watchlist = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.fetchSlice);
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const baseWatchlistArr = addToObj(state.watchListArr);

  if (active) {
    state.sortValue === "title"
      ? sortfilterAlpha(baseWatchlistArr, state.sortValue)
      : sortfilter(baseWatchlistArr, state.sortValue);
  } else {
    state.sortValue === "title"
      ? sortfilterAlphaDescending(baseWatchlistArr, state.sortValue)
      : sortfilterDescending(baseWatchlistArr, state.sortValue);
  }

  console.log(baseWatchlistArr, state.sortValue, active);

  return (
    <div className={`watchlistCont bg-light ${active2 ? "gridChng" : ""}`}>
      <div className="row mx-0 py-3 px-2">
        <div className="col">
          <h1 className="text-dark">Your Watchlist</h1>
          <span className="fw-bold">
            <i className="fa fa-lock me-2"></i>
            PRIVATE
          </span>
        </div>
        <div className="col-auto text-center">
          <p>
            <i className="fa fa-pencil"></i>
          </p>
          <span>EDIT</span>
        </div>
      </div>
      <div className="filter row border-top border-bottom mx-0 p-3 align-items-center text-secondary">
        <span className="col">{baseWatchlistArr.length} Titles</span>
        <div className="col-auto">
          <label>Sort by : </label>
          <select
            onChange={(e) => dispatch(handleSort(e.target.value))}
            name=""
            className="border border-2 border-secondary px-2 text-secondary"
          >
            <option value="id" className="">
              List Oreder
            </option>
            <option value="title" className="">
              Alphabetical
            </option>
            <option value="imDbRating" className="">
              IMDb rating
            </option>
            <option value="imDbRatingCount" className="">
              Number of rating
            </option>
          </select>
        </div>
        <div
          className="col-auto d-flex pointer"
          onClick={() => setActive(!active)}
        >
          <i className={`fa fa-arrow-up ${active ? "" : "text-warning"}`}></i>
          <i className={`fa fa-arrow-down ${active ? "text-warning" : ""}`}></i>
        </div>
        <div className="col-auto pointer" onClick={() => setActive2(!active2)}>
          <i className={`fa fa-th fs-4 ${active2 ? "text-warning" : ""}`}></i>
        </div>
      </div>
      <div className="watchlistCardCont mx-auto">
        {baseWatchlistArr.map((item) => (
          <CardFilter obj={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
