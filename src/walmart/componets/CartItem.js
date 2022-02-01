import { useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../reducer/fetchDataSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cartItem row mx-0 mb-4 px-4 text-dark text-capitalize">
        <div className="col-6">
          <div className="row mx-auto">
            <div className="col-3" style={{ height: 100 }}>
              <img
                src={props.obj.image}
                alt=".."
                className="w-100 h-100 rounded-circle"
              ></img>
            </div>
            <div className="col">
              <p>{props.obj.title}</p>
            </div>
          </div>
        </div>
        <p className="col fs-5">
          $ <span>{props.obj.price}</span>
        </p>
        {/* <div className="col">
    <div className="d-flex gap-1">
      <span className="fw-bold fs-3 pointer">-</span>
      <button className="btn btn-secondary" type="button">
        {props.obj.quantity}
      </button>
      <span
        className="fw-bold fs-3 pointer"
        onClick={() =>
          props.dispatch({ type: "INCREMENT", id: props.obj.id })
        }
      >
        +
      </span>
    </div>
  </div> */}

        <p
          className="col-auto pointer"
          onClick={() => dispatch(handleDelete(props.obj.id))}
        >
          <i
            className="fa fa-trash fs-4 text-danger pointer"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </>
  );
};

export default CartItem;
