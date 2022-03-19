import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserData from "../Components/UserData";
import "../scss/pages/dashboard.scss";
import { LoginContext } from "../Context/LoginContext/LoginContext";

const Dashboard = (props) => {
  let navigate = useNavigate();
  const {setUserLogged} = useContext(LoginContext);
  // const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  // const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    // logout(dispatch); //llama a la acción logout
    localStorage.removeItem("user");
    sessionStorage.removeItem("email");
    setUserLogged(null);
    navigate("/login"); //navega de nuevo al login sin usuario
  };
  return (
    <>
      <UserData />
    </>
  );
};

export default Dashboard;
