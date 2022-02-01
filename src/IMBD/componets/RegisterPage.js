import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { handleRegisterpage } from "../reducer/headerSlice";

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const [activeform, setActivefrom] = useState(false);

  const handleLoginNregister = () => {
    setActivefrom(!activeform);
  };

  return (
    <div className="registerCont w-100 h-100 position-fixed px-0 top-0 left-0 d-flex">
      <div className="registerbox bg-light rounded p-3 mx-auto my-auto">
        <div className="d-flex justify-content-between text-dark">
          <h4 className="">Register here/Login</h4>
          <span
            className="pointer fw-bold fs-3"
            onClick={() => {
              dispatch(handleRegisterpage());
              handleLoginNregister();
            }}
          >
            X
          </span>
        </div>
        <p className="text-secondary mt-4">
          If you are not registed yet register here or{" "}
          <span className="text-primary pointer" onClick={handleLoginNregister}>
            {activeform ? "Register" : "Login"}
          </span>
        </p>
        {activeform ? (
          <LoginForm handleRegisterpage={props.handleRegisterpage} />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
