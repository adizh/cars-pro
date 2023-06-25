import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleUserName, handlePassword, createUser } from "../redux/slice";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((s) => s.cars.userName);
  const password = useSelector((s) => s.cars.password);
  const [isError, setIsError] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const handleClick = () => {
    const saved = localStorage.getItem("persist:root");
    let { user } = JSON.parse(saved);
    let name = JSON.parse(user)?.name;
    if (userName === name) {
      setIsExist(true);
    } else {
      if (userName && password) {
        dispatch(createUser());
        setIsExist(false);
        navigate("/home");
      }
    }
  };
  const singInUser = () => {
    navigate("/signin");
  };
  return (
    <div className="login">
      <div className="login-signin">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => singInUser()}
        >
          Войти
        </button>
        <p>или</p>
      </div>
      <div className="login-signup">
        <input
          onChange={(e) => dispatch(handleUserName(e.target.value))}
          type="text"
          className="form-control inputs"
          placeholder="Имя пользователя"
        />
        {isExist ? (
          <div
            id="error-message"
            className="alert alert-danger d-flex align-items-center  "
            role="alert"
          >
            Пользователь уже зарегистрирован
          </div>
        ) : (
          ""
        )}
        <input
          onChange={(e) => dispatch(handlePassword(e.target.value))}
          type="password"
          className="form-control inputs"
          placeholder="Пароль"
        />
        <button onClick={handleClick} className="btn btn-success">
          Зарегистрироваться
        </button>
        {isError && (
          <div
            id="error-message"
            className="alert alert-danger d-flex align-items-center  "
            role="alert"
          >
            <svg
              className="bi flex-shrink-0 me-2"
              role="img"
              aria-label="Danger:"
            ></svg>
            Введите имя пользователя и пароль!
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
