import { useDispatch, useSelector } from "react-redux";
import { handleCart } from "../reducer/headerSlice";
import CartItem from "./CartItem";

const CartContainer = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.fetchSlice);
  console.log(state);
  return (
    <>
      <div
        className={`cartContainer position-fixed w-100 h-100 top-0 start-0   `}
      >
        <div className="cartBox bg-light py-3 rounded overflow-scroll">
          <div className="d-flex text-dark justify-content-between border-bottom mb-3 px-4">
            <h5 className="">
              Shopping Cart (<span>{0} item</span>)
            </h5>
            <span
              className="pointer fw-bold"
              onClick={() => dispatch(handleCart())}
            >
              X
            </span>
          </div>
          {state.cartArr.map((item, i) => (
            <CartItem obj={item} key={i} />
          ))}
        </div>
        <div className="paySlip w-100 row bg-dark py-3 px-2 text-light align-items-center position-fixed bottom-0">
          <div className="col-5">
            <p>Delivery and payment options can be selected later</p>
            <div className="d-flex align-items-center">
              <i className="fa fa-shield" aria-hidden="true"></i>
              <p className="mb-0 ms-2"> Safe and Secure Payments</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa fa-money" aria-hidden="true"></i>
              <p className="mb-0 ms-2">
                100% Payment Protection, Easy Returns Policy
              </p>
            </div>
          </div>
          <div className="col">
            <p>Sub Total</p>
            <p>Delivery Charges :</p>
          </div>
          <div className="col">
            <p>
              Rs: <span></span>
            </p>
            <p className="text-success">FREE</p>
          </div>
          <button className="btn btn-danger text-capitalize col">
            process to pay
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
