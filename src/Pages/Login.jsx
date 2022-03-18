import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext/LoginContext";
import { Link } from "react-router-dom";
import "../scss/pages/login.scss";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const { setUserLogged } = useContext(LoginContext);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loginError, setLoginError] = useState(false);
  let navigate = useNavigate();

  const submitForm = (ev) => {
    ev.preventDefault();
    loginUser(formData);
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = (formData) => {
    fetch("https://the-burger-server.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((usersInJSON) => {
        const user = usersInJSON;
        const emailExist = user.find((el) => el.email === formData.email);
        if (emailExist) {
          axios
            .post("https://the-burger-server.herokuapp.com/api/login", {
              email: formData.email,
              password: formData.password,
            })
            .then((res) => {
              if (res.data !== "Email o contraseña incorrectos") {
                localStorage.setItem("user", res.data.token);
                sessionStorage.setItem("email", res.data.user);
                const userEmail = sessionStorage.getItem("email");
                setUserLogged(userEmail);
                navigate("/dashboard");
              } else {
                setLoginError(true);
              }
            });
        } else {
          setLoginError(true);
        }
      });
  };

  return (
    <div className="login-section">
      <div className="login-section__left"></div>
      <div className="login-section__center">
        <div className="form-container">
          <h2 className="form-container__title">Login</h2>
          <form className="login-form" onSubmit={submitForm}>
            <div className="login-form__item">
              <input name="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange}></input>
            </div>
            <div className="login-form__item">
              <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange}></input>
            </div>

            {loginError ? <p className="error">Usuario o contraseña incorrectos</p> : null}
            <button type="submit">
              <p className="login-button">Login</p>
            </button>
            <p>Haven't got an account yet?</p>

            <button>
              <Link to="/register" className="register-button">
                Register
              </Link>
            </button>
          </form>
        </div>
      </div>
      <div className="login-section__right"></div>
    </div>
  );
};

export default Login;
