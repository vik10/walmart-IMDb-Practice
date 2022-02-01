import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reducer/fetchDataSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.fetchSlice);
  return (
    <>
      <div className="card p-3">
        <img
          src={props.obj.image}
          className="card-img-top"
          alt="..."
          style={{ height: 200 }}
        ></img>
        <div className="card-body text-capitalize">
          <h5 className="card-title">{props.obj.title}</h5>
          <p className="card-text">{props.obj.category}</p>
          <p className="text-primary fw-bold">$ {props.obj.price}</p>
          <div className="d-flex gap-1">
            {Array.from({ length: Math.floor(props.obj.rating.rate) }).map(
              (item, i) => (
                <i
                  className="fa fa-star text-warning"
                  key={i}
                  aria-hidden="true"
                ></i>
              )
            )}
          </div>
          <p className="card-text">{props.obj.rating.rate}</p>
          <button
            className="btn btn-warning"
            onClick={(e) => dispatch(addToCart(props.obj.id))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
