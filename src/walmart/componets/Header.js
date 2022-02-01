import { useSelector, useDispatch } from "react-redux";
import { handleCart } from "../reducer/headerSlice";
import CartContainer from "./CartContainer";

const Header = (props) => {
  const state = useSelector((state) => state.reducer);

  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <div
        className={`header row  px-3 py-2 text-light bg-primary align-items-center w-100 mx-0 ${
          state.headerSlice.active ? "active" : "hide"
        }`}
      >
        <div className="col-1 ">
          <img
            className="w-100"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/BestBuy_Logo_2020-190616.png"
            alt="..."
            style={{ minWidth: 70 }}
          ></img>
        </div>
        <div className="menu fw-bold  text-light pointer fw-bold d-flex col-auto align-items-center">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <span className="">Menu</span>
        </div>
        <div className="col-auto departBtn">
          <span className="pointer  ">
            <i className="fa fa-th-large" aria-hidden="true"></i>
            Departments
          </span>
        </div>
        <form className="input-group col mx-auto">
          <input className="form-control" placeholder="Sarch Best Buy"></input>
          <i className="fa fa-search input-group-text" aria-hidden="true"></i>
        </form>
        <span className="userNsignin col-auto pointer">
          <i className="fa fa-user me-1" aria-hidden="true"></i>
          Sign In
        </span>
        <span
          className="col-auto pointer position-relative"
          onClick={() => dispatch(handleCart())}
        >
          <i className="fa fa-shopping-basket me-1" aria-hidden="true"></i>
          Cart
          <span
            className="rounded-circle px-1 text-primary position-absolute bg-warning"
            style={{ right: 0, top: -10 }}
          >
            {state.fetchSlice.count}
          </span>
        </span>
        <CartContainer />
      </div>
    </>
  );
};

export default Header;
