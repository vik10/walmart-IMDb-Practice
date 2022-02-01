import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleCategory } from "../reducer/fetchDataSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import React from "react";

const DropdownMenu = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.fetchSlice);
  const [active, setActive] = useState({ name: "", selected: false });

  const handleCateogryBtn = (value) => {
    setActive({ name: value, selected: true });
  };

  return (
    <div className={`dropdown px-0 pb-4 text-light`}>
      <div className="crossBox row py-1  mx-0">
        <div className="col"></div>
        <span
          className="fw-bold fs-3 col-auto pointer text-danger"
          onClick={props.handleDropdown}
        >
          X
        </span>
      </div>
      <ul className="">
        <Link
          className={`${
            active.selected && active.name === "home"
              ? "selectedBtn"
              : "notSelectedBtn"
          }`}
          to="/"
          onClick={() => {
            props.handleDropdown();
            handleCateogryBtn("home");
          }}
        >
          <li className="d-flex gap-3 my-3 align-items-center">
            <i className="fa fa-home  fs-3" aria-hidden="true"></i>
            <span className="fs-5 ">Home</span>
          </li>
        </Link>
        <Link
          className={`${
            active.selected && active.name === "all"
              ? "selectedBtn"
              : "notSelectedBtn"
          }`}
          to="/filterCont"
          onClick={() => {
            props.handleDropdown();
            dispatch(
              handleCategory({ value: `${state.searchText}`, tag: "title" })
            );
            handleCateogryBtn("all");
          }}
        >
          <li className="d-flex gap-3 my-3 align-items-center">
            <i className="fa fa-heart  fs-3" aria-hidden="true"></i>
            <span className="fs-5" style={{ letterSpacing: 2 }}>
              All
            </span>
          </li>
        </Link>
        <Link
          className={`${
            active.selected && active.name === "movie"
              ? "selectedBtn"
              : "notSelectedBtn"
          }`}
          to="/filterCont"
          onClick={() => {
            props.handleDropdown();
            dispatch(handleCategory({ value: "movie", tag: "category" }));
            handleCateogryBtn("movie");
          }}
        >
          <li className="d-flex gap-3 my-3 align-items-center">
            <i className="fa fa-film  fs-3" aria-hidden="true"></i>
            <span className="fs-5 ">Movies</span>
          </li>
        </Link>
        <Link
          className={`${
            active.selected && active.name === "tv-show"
              ? "selectedBtn"
              : "notSelectedBtn"
          }`}
          to="/filterCont"
          onClick={() => {
            props.handleDropdown();
            dispatch(handleCategory({ value: "tv-show", tag: "category" }));
            handleCateogryBtn("tv-show");
          }}
        >
          <li className="d-flex gap-3 my-3 align-items-center">
            <i className="fa fa-television fs-3" aria-hidden="true"></i>
            <span className="fs-5">Tv-Shows</span>
          </li>
        </Link>
        <Link
          className={`${
            active.selected && active.name === "celebs"
              ? "selectedBtn"
              : "notSelectedBtn"
          }`}
          to="/filterCont"
          onClick={() => {
            props.handleDropdown();
            dispatch(
              handleCategory({ value: `${state.searchText}`, tag: "fullTitle" })
            );
            handleCateogryBtn("celebs");
          }}
        >
          <li className="d-flex gap-3 my-3 align-items-center">
            <i className="fa fa-users fs-3" aria-hidden="true"></i>
            <span className="fs-5">Celebs</span>
          </li>
        </Link>
        <Link
          className={`${
            active.selected && active.name === "awards"
              ? "selectedBtn"
              : "notSelectedBtn"
          }`}
          to="/filterCont"
          onClick={() => {
            props.handleDropdown();
            dispatch(
              handleCategory({ value: `${state.searchText}`, tag: "fullTitle" })
            );
            handleCateogryBtn("awards");
          }}
        >
          <li className="d-flex gap-3 my-3 align-items-center">
            <i className="fa fa-trophy fs-3" aria-hidden="true"></i>
            <span className="fs-5">{`Awards & Events`} </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
