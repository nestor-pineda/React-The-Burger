import "../scss/components/_user-data.scss";
import { LoginContext } from "../Context/LoginContext/LoginContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Acordeon from "./Acordeon";

const INITIAL_STATE = {
  name: "",
  surname: "",
  phone: "",
};

const UserData = () => {
  const { userLogged } = useContext(LoginContext);
  const [userInfo, setUserInfo] = useState({});
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [reservasUser, setReservasUser] = useState([]);
  const [allReservas, setAllReservas] = useState([]);

  ///FUNCION PRINCIPAL QUE SALTA EN EL USEEFFECT

  const requestUserInfo = () => {
    fetch(`https://the-burger-server.herokuapp.com/api/users/email/${userLogged}`)
      .then((res) => res.json())
      .then((resInJSON) => {
        setUserInfo(resInJSON[0]);
      });
  };

  ///FUNCIONES PARA ACTUALIZAR INFO

  const updateInfo_name = (ev) => {
    ev.preventDefault();
    axios.put(`https://the-burger-server.herokuapp.com/api/user/${userInfo.idUsers}/update`, {
      name: formData.name,
    });
    setUpdateSuccess(true);
  };

  const updateInfo_surname = (ev) => {
    ev.preventDefault();
    axios.put(`https://the-burger-server.herokuapp.com/api/user/${userInfo.idUsers}/update`, {
      surname: formData.surname,
    });
    setUpdateSuccess(true);
  };

  const updateInfo_phone = (ev) => {
    ev.preventDefault();
    fetch("https://the-burger-server.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((resInJson) => {
        const users = resInJson;
        const phoneExist = users.find((user) => formData.phone === user.phone);
        if (phoneExist) {
          setError(true);
        } else {
          axios.put(`https://the-burger-server.herokuapp.com/api/user/${userInfo.idUsers}/update`, {
            phone: formData.phone,
          });
        }
      });
  };

  ///FUNCION PARA SACAR LAS RESERVAS

  const requestReservation = () => {
    fetch(`https://the-burger-server.herokuapp.com/api/reservas/user/${userInfo.idUsers}`)
      .then((res) => res.json())
      .then((resInJson) => {
        setReservasUser(resInJson);
      });
  };

  const requestAllReservation = () => {
    fetch(`https://the-burger-server.herokuapp.com/api/reservas`)
      .then((res) => res.json())
      .then((resInJson) => {
        setAllReservas(resInJson);
      });
  };

  const cancelReserva = (reserva) => {
    fetch(`https://the-burger-server.herokuapp.com/api/reservas/${reserva.idReserva}/delete`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(false);
    });
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    requestUserInfo();
  }, []);

  return (
    <div className="user-data">
      <div className="user-data__left"></div>
      <div className="user-data__center">
        <div className="user-data__col">
          <h3 className="reservation-info__title">User information</h3>
          <div className="change-data">
            <form className="change-data__form" onSubmit={updateInfo_name}>
              <div className="change-data__left">
                <label className="change-data__lable">Name: </label>
                <input className="change-data__input" name="name" type="text" defaultValue={userInfo.name} onChange={handleChange} />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                {formData.name === "" || formData.name === userInfo.name || formData.name.length <= 3 || formData.name.length >= 30 ? (
                  <button className="change-data__button" disabled>
                    Update
                  </button>
                ) : (
                  <button className="change-data__button">Update</button>
                )}
              </div>
            </form>
            <div>{(formData.name.length <= 3 || formData.name.length >= 30) && formData.name !== "" ? <p>Invalid name</p> : null}</div>

            <form className="change-data__form" onSubmit={updateInfo_surname}>
              <div className="change-data__left">
                <label className="change-data__lable">surname: </label>
                <input className="change-data__input" name="surname" type="text" defaultValue={userInfo.surname} onChange={handleChange} />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                {(formData.surname === "") | (formData.surname === userInfo.surname) ? (
                  <button className="change-data__button" disabled>
                    Update
                  </button>
                ) : (
                  <button className="change-data__button">Update</button>
                )}
              </div>
            </form>
            <div>{(formData.surname.length <= 3 || formData.surname.length >= 60) && formData.surname !== "" ? <p>Invalid surname</p> : null}</div>

            <form className="change-data__form" onSubmit={updateInfo_phone}>
              <div className="change-data__left">
                <label className="change-data__lable">Telephone: </label>
                <input className="change-data__input" name="phone" type="text" defaultValue={userInfo.phone} onChange={handleChange} />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                {(formData.phone === "") | (formData.phone === userInfo.phone) ? (
                  <button className="change-data__button" disabled>
                    Update
                  </button>
                ) : (
                  <button className="change-data__button">Update</button>
                )}
              </div>
            </form>
            <div>{(formData.phone.length <= 8 || formData.phone.length >= 15) && formData.phone !== "" ? <p>Invalid phone number</p> : null}</div>
            <div>{error ? <p>A user with this phone already exist</p> : null}</div>
            {updateSuccess ? <p>User updated correctly</p> : null}
          </div>
        </div>
        <div className="user-data__col">
          <h3 className="reservation-info__title">Reservation information</h3>
          <Acordeon allReservas={allReservas} cancelReserva={cancelReserva} userInfo={userInfo} requestAllReservation={requestAllReservation} requestReservation={requestReservation} reservasUser={reservasUser} />
        </div>
      </div>
      <div className="user-data__right"></div>
      {userInfo.isAdmin === "true" ? <h1>Bienvenido Administrador</h1> : null}
    </div>
  );
};

export default UserData;
