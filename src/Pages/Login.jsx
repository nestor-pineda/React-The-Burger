import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext/LoginContext"
// import { loginUser, useAuthState, useAuthDispatch } from "../Context/LoginContext";
import "../scss/pages/login.scss";


const INITIAL_STATE = {
  email: "",
  password: ""
}


const Login = () => {
  const {setUserLogged} = useContext(LoginContext);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loginError, setLoginError] = useState(false);
  // const dispatch = useAuthDispatch();
  let navigate = useNavigate();
  // const { loading, errorMessage } = useAuthState(); //lee los valores del loading y errorMessages del contexto

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // let response = await loginUser(dispatch, { email, password });
  //     if (!response.user) return;
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const submitForm = (ev) => {
    ev.preventDefault();
    loginUser(formData);
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({...formData, [name]: value})
  }


  const loginUser = (formData) => {
    fetch("https://the-burger-server.herokuapp.com/api/users").then((res) => res.json()).then((usersInJSON) => {
      const user = usersInJSON;
      const emailExist = user.find((el) => el.email === formData.email);
      if (emailExist) {
        axios.post("https://the-burger-server.herokuapp.com/api/login", {
          email: formData.email,
          password: formData.password
        })
        .then((res) => {
          if (res.data !== "Email o contraseña incorrectos") {
            localStorage.setItem("user", res.data.token)
            sessionStorage.setItem("email", res.data.user)
            const userEmail = sessionStorage.getItem("email")
            setUserLogged(userEmail)
            navigate("/dashboard")
          } else {
            setLoginError(true)
          }
        })
      } else {
        setLoginError(true)
      }
    })
  }

  return (

    <div className="container">
      <div className="formContainer">
        <h1>Login Page</h1>
        {/* {errorMessage ? <p className="error">{errorMessage}</p> : null} */}
        <form onSubmit={submitForm}>
          <div className="loginForm">
            <div className="loginFormItem">
              <label htmlFor="email">Username</label>
              <input name="email" type="text" value={formData.email} onChange={handleChange}></input>
              {/* <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} /> */}
            </div>
            <div className="loginFormItem">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" value={formData.password} onChange={handleChange}></input>
              {/* <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} /> */}
            </div>
          </div>
          {loginError ? <p>Usuario o contraseña incorrectos</p> : null}
          <button type="submit">Login</button>
          {/* <button onClick={handleLogin}>login</button> */}
        </form>
            </div>
        </div>
   
  );
}

export default Login;
