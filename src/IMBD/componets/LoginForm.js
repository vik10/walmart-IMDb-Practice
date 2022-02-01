import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleUserAcess } from "../reducer/headerSlice";
import { isUserValid } from "../utilit";
import { handleRegisterpage } from "../reducer/headerSlice";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const userArr = JSON.parse(localStorage.getItem("userArr"));
  const [active, setActive] = useState(false);
  console.log(userArr);
  return (
    <>
      <form
        className="mt-3 text-center"
        onSubmit={(e) => {
          e.preventDefault();
          //   isUserValid(e.target);
          dispatch(handleUserAcess(isUserValid(userArr, e.target)));
          {
            isUserValid(userArr, e.target).length
              ? dispatch(handleRegisterpage())
              : setActive(true);
          }
        }}
      >
        <input
          className="form-control my-2"
          type="email"
          name="email"
          placeholder="type login e-mail"
        ></input>
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="your password"
        ></input>
        <div>
          {active ? (
            <span className="text-danger">Invalid User try again</span>
          ) : (
            ""
          )}
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-danger mt-4"
        ></input>
      </form>
    </>
  );
};

export default LoginForm;
