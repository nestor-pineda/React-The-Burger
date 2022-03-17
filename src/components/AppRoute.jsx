// //  Este componente se utiliza para definir rutas protegidas(rutas a las que sólo pueden acceder usuarios autentificados)

// // import { useAuthState } from "../Context/LoginContext";
import { LoginContext } from "../Context/LoginContext/LoginContext"
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function AppRoutes() {
    const {userLogged} = useContext(LoginContext);
    // const token= localStorage.getItem("user")
  // const { user } = useAuthState();

  return <>{userLogged !== null ? <Dashboard /> : <Navigate to="/" />}</>;
}

export default AppRoutes;
