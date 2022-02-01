import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleSearch, handleSerchType } from "../reducer/fetchDataSlice";
import { handleRegisterpage } from "../reducer/headerSlice";
import { useState } from "react";
import { isUserLogin } from "../utilit";
import DropdownMenu from "./DropdownMenu";
import RegisterPage from "./RegisterPage";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer);
  const [menuDropdown, setMenudropdown] = useState(false);
  const [active, setActive] = useState({ name: "Title", selected: false });
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const handleHeaderTag = (value) => {
    setActive({ name: value, selected: true });
  };
  const handleDropdown = () => {
    setMenudropdown(!menuDropdown);
  };

  const handleUserDropdown = () => {
    setActive3(!active3);
  };

  const handleWatchList = () => {
    console.log("los");
    setActive4(!active4);
  };
  console.log(state);
  return (
    <>
      <div
        className={`header row mx-0 text-light bg-dark align-items-center p-2 ${
          menuDropdown ? "show" : "hide"
        } ${state.headerSlice.active ? "registeShow" : "registerHide"} ${
          active3 ? "userDropdownshow" : "userDropdownhide"
        }`}
      >
        <h3 className="fw-bold col-auto bg-warning mb-0 px-1 rounded text-dark">
          IMDb
        </h3>
        <span className="col-auto pointer" onClick={handleDropdown}>
          <i
            className="fa fa-bars text-secondary me-1 fs-5"
            aria-hidden="true"
          ></i>
          Menu
        </span>
        <form
          className="input-group col"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(handleSearch(e.target.elements.searchBox.value));
            navigate("/filterCont");
            // navigate(`https://imdb-api.com/en/API/Search/k_dt7f4jmr`);
          }}
        >
          <button
            className=" btn btn-outline-secondary fw-bold dropdown-toggle bg-light text-dark"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {active.name}
          </button>
          <ul className="dropdown-menu dropbtn">
            <li
              className={`${
                active.selected && active.name === "Directors"
                  ? "bg-warning"
                  : "bg-light"
              }`}
              onClick={(e) => {
                dispatch(handleSerchType("title"));
                handleHeaderTag("Directors");
                navigate("/filterCont");
              }}
            >
              <span className="dropdown-item">Directors</span>
            </li>
            <li
              className={`${
                active.selected && active.name === "Crew"
                  ? "bg-warning"
                  : "bg-light"
              }`}
              onClick={(e) => {
                dispatch(handleSerchType("title"));
                handleHeaderTag("Crew");
                navigate("/filterCont");
              }}
            >
              <span className="dropdown-item">Crew</span>
            </li>
            <li
              className={`${
                active.selected && active.name === "Title"
                  ? "bg-warning"
                  : "bg-light"
              }`}
              onClick={() => {
                dispatch(handleSerchType("title"));
                handleHeaderTag("Title");
                navigate("/filterCont");
              }}
            >
              <span className="dropdown-item">Title</span>
            </li>
          </ul>
          <input
            type="text"
            name="searchBox"
            className="form-control"
            aria-label="Text input with dropdown button"
            onInput={(e) => dispatch(handleSearch(e.target.value))}
          ></input>
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-search " aria-hidden="true"></i>
          </span>
        </form>
        <span className="col-auto">IMBDPro</span>
        <div
          className="col-auto d-flex align-items-center gap-1 pointer"
          onClick={() => {
            isUserLogin(state.headerSlice.user)
              ? navigate("/watchlist")
              : dispatch(handleRegisterpage());
          }}
        >
          <i className="fa fa-plus-square " aria-hidden="true"></i>
          <span>
            Watchlist{" "}
            <span className="bg-warning text-dark px-1 rounded-circle">
              {state.fetchSlice.watchListArr.length}
            </span>
          </span>
        </div>
        {isUserLogin(state.headerSlice.user) ? (
          <span
            className="col-auto pointer badge bg-success fw-bold fs-4 py-1 px-3 text-capitalize"
            onClick={handleUserDropdown}
          >
            {state.headerSlice.user.name}
          </span>
        ) : (
          <span
            className="col-auto pointer"
            onClick={() => dispatch(handleRegisterpage())}
          >
            Signin
          </span>
        )}
        <DropdownMenu handleDropdown={handleDropdown} />
        <RegisterPage />
        <UserDropdown
          obj={state.headerSlice.user}
          handleUserDropdown={handleUserDropdown}
        />
      </div>
    </>
  );
};

export default Header;
