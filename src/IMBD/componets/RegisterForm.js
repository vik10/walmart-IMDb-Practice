import { useState } from "react";
import { getObj, handleRegisterDataStore, makeFormEmpty } from "../utilit";

const RegisterForm = (props) => {
  const [active, setActive] = useState(false);

  return (
    <form
      className="text-center mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegisterDataStore(getObj(e.target));
        setActive(true);
        makeFormEmpty(e.target);
      }}
    >
      <input
        className="form-control"
        type="name"
        name="name"
        placeholder="Name"
        required
      ></input>
      <input
        className="form-control my-2"
        type="email"
        name="email"
        placeholder="Type e-mail here"
        required
      ></input>
      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="choose password"
        required
      ></input>
      {active ? (
        <span className="text-success my-3">
          Your account created Login Now
        </span>
      ) : (
        <input
          type="submit"
          value="Register"
          className="btn btn-primary mt-4"
        ></input>
      )}
    </form>
  );
};

export default RegisterForm;
