import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext/LoginContext";
import "../scss/components/_form.scss";

const Form = () => {
  const { userLogged } = useContext(LoginContext);

  const [people, setPeople] = useState("");
  const [date, setDate] = useState("2022-03-11");
  const [time, setTime] = useState("12:00");
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [reservationDone, setReservationDone] = useState(false)


//TRAER INFO DEL USUARIO LOGGEADO

const requestUserInfo = () => {
  fetch(`https://the-burger-server.herokuapp.com/api/users/email/${userLogged}`).then((res) => res.json()).then((resInJSON) => {
    setUserInfo(resInJSON[0])
  })
}



  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      date: date,
      numero: people,
      hour: time
    };
    setLoading(true);

    fetch(`https://the-burger-server.herokuapp.com/api/reservas/${userInfo.idUsers}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    }).then(() => {
      setLoading(false);
      setPeople("");
      setDate("");
      setTime("");
      setLoading("");
    }).finally(() => setReservationDone(true))
  };


  useEffect(() => {
    requestUserInfo()
  }, [])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" className="text" value={userInfo.name} name="name" id="name" placeholder="Name" disabled />

        <input type="number" className="text" value={people} onChange={(event) => setPeople(event.target.value)} name="name" id="people" placeholder="People" required />
      </div>

      <div className="form-row">
        <input type="date" className="date" defaultValue={date} onChange={(event) => setDate(event.target.value)} id="date" name="date" min="2022-03-11" max="2022-12-31"></input>

        <input type="time" className="date" defaultValue={time} onChange={(event) => setTime(event.target.value)} id="time" name="time" min="12:00" max="22:00" required></input>
      </div>

      <div className="form-row">
        <input type="email" className="text" value={userInfo.email} id="email" size="30" placeholder="Email" disabled></input>

        <input type="tel" className="text" value={userInfo.phone} id="phone" name="phone" placeholder="Phone" disabled></input>
      </div>

      {userLogged ? (
        <button className="submit" type="submit">
          Make reservation
        </button>
      ) : (
        <button className="submit" disabled>Must Log in</button>
      )}
      {reservationDone ? <p className="reservation-ok">Reservatrion registered correctly</p> : null}
    </form>
  );
};

export default Form;
