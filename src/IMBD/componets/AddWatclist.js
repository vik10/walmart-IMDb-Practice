import { addTolist } from "../reducer/fetchDataSlice";
import { handleRegisterpage } from "../reducer/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { isRepeat, isUserLogin } from "../utilit";

const AddWatchlist = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer);

  return (
    <div
      className={`addBtn bg-info position-absolute top-0 left-0 px-0 text-light pointer ${
        isRepeat(state.fetchSlice.watchListArr, props.id) ? "bg-warning" : ""
      }`}
      onClick={() => {
        isUserLogin(state.headerSlice.user)
          ? dispatch(addTolist(props.id))
          : dispatch(handleRegisterpage());
      }}
    >
      <i
        className={`fa ${
          isRepeat(state.fetchSlice.watchListArr, props.id)
            ? "fa-check text-success"
            : "fa-plus"
        }`}
      ></i>
    </div>
  );
};

export default AddWatchlist;
