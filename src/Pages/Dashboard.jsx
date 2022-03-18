import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserData from "../Components/UserData";
import "../scss/pages/dashboard.scss";
import { LoginContext } from "../Context/LoginContext/LoginContext";

const Dashboard = (props) => {
  let navigate = useNavigate();
  const { userLogged, setUserLogged } = useContext(LoginContext);
  console.log(userLogged);

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
      <div style={{ padding: 10 }}>
        <div className="dashboardPage">
          <h1>Dashboard</h1>
          <button className="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <p>Welcome {userLogged}</p>
      </div>
    </>
  );
};

export default Dashboard;
