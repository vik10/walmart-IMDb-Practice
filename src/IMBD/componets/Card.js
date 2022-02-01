import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../reducer/fetchDataSlice";
import AddWatchlist from "./AddWatclist";

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="Card rounded px-0 bg-dark position-relative text-light">
        <Link
          to="/product"
          className="text-light"
          onClick={() => dispatch(selectedProduct(props.obj.id))}
        >
          <img className="" src={props.obj.image}></img>
          <div className="px-3 py-3 d-grid">
            <p className="d-flex gap-5 align-items-center">
              <span>
                <i
                  className="fa fa-star me-2 text-warning"
                  aria-hidden="true"
                ></i>
                <span>{props.obj.imDbRating}</span>
              </span>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </p>
            <p className="fw-bold mb-0 title">{props.obj.title}</p>
            <button className="btn-secondary my-3  btn text-warning">
              Watch opction
            </button>
            <div className="fw-bold mt-3 mx-3 d-flex align-items-center justify-content-between">
              <span className="">
                <i className="fa fa-play me-2 " aria-hidden="true"></i>
                Trailer
              </span>
              <i className="fa fa-info-circle fs-4" aria-hidden="true"></i>
            </div>
          </div>
        </Link>
        <AddWatchlist id={props.obj.id} />
      </div>
    </>
  );
};

export default Card;
