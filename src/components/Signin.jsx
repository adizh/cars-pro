import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [notExist, setNotExist] = useState(false);
  const navigate = useNavigate();
  const signIn = () => {
    const saved = localStorage.getItem("persist:root");
    let { user } = JSON.parse(saved);
    let savedName = JSON.parse(user).name;
    let savedPassword = JSON.parse(user).password;
    if (savedName === name && password === savedPassword) {
      navigate("/home");
      setNotExist(false);
    } else {
      setNotExist(true);
      setTimeout(() => {
        setNotExist(false);
      }, 3000);
    }
  };
  return (
    <div className="login-signin">
      <input
        onChange={(e) => setName(e.target.value)}
        className="form-control inputs"
        type="text"
        placeholder="Имя пользователя"
      />
      {notExist ? (
        <div
          id="error-message"
          className="alert alert-danger d-flex align-items-center  "
          role="alert"
        >
          Пользователь не существует
        </div>
      ) : (
        ""
      )}
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="form-control inputs"
        type="password"
        placeholder="Пароль"
      />
      <button onClick={signIn} className="btn btn-info">
        Войти
      </button>
    </div>
  );
}

export default Signin;
