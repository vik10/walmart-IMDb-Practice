import { useDispatch } from "react-redux";
import { handleUserLogout } from "../reducer/headerSlice";

const UserDropdown = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="userDropdown text-light p-3 ">
      <ul className="ps-0">
        <li className="d-flex gap-3">
          <p className="text-capitalize text-warning mb-1">
            <i className="fa fa-user me-1"></i>
            Name :
          </p>
          {props.obj.name}
        </li>
        <li className="d-flex gap-3 my-3">
          <p className="text-capitalize text-warning mb-1">
            <i className="fa fa-envelope me-1"></i>
            E-Mail :
          </p>
          {props.obj.email}
        </li>
        <li className="d-flex gap-3">
          <p className="text-capitalize text-warning mb-1">
            <i className="fa fa-home me-1"></i>
            Your WatchList
          </p>
        </li>
      </ul>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.handleUserDropdown();
            dispatch(handleUserLogout());
          }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
