import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from "../Context/LoginContext";
import "../scss/pages/login.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch();
  let navigate = useNavigate();
  const { loading, errorMessage } = useAuthState(); //lee los valores del loading y errorMessages del contexto

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { email, password });
      if (!response.user) return;
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h1>Login Page</h1>
        {errorMessage ? <p className="error">{errorMessage}</p> : null}
        <form>
          <div className="loginForm">
            <div className="loginFormItem">
              <label htmlFor="email">Username</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
            </div>
            <div className="loginFormItem">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
            </div>
          </div>
          <button onClick={handleLogin}>login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
