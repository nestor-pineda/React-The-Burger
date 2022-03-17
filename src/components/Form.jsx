import { useState } from "react";
import "../scss/components/_form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("2022-03-11");
  const [time, setTime] = useState("12:00");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      name,
      people,
      date,
      time,
      email,
      phone,
    };
    setLoading(true);

    fetch("http://localhost:8001/reservation/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    }).then(() => {
      setLoading(false);
      setName("");
      setPeople("");
      setDate("");
      setTime("");
      setEmail("");
      setPhone("");
      setLoading("");
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" className="text" value={name} onChange={(event) => setName(event.target.value)} name="name" id="name" placeholder="Name" required />

        <input type="number" className="text" value={people} onChange={(event) => setPeople(event.target.value)} name="name" id="people" placeholder="People" required />
      </div>

      <div className="form-row">
        <input type="date" className="date" defaultValue={date} onChange={(event) => setDate(event.target.value)} id="date" name="date" min="2022-03-11" max="2022-12-31"></input>

        <input type="time" className="date" defaultValue={time} onChange={(event) => setTime(event.target.value)} id="time" name="time" min="12:00" max="22:00" required></input>
      </div>

      <div className="form-row">
        <input type="email" className="text" value={email} onChange={(event) => setEmail(event.target.value)} id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" placeholder="Email" required></input>

        <input type="tel" className="text" value={phone} onChange={(event) => setPhone(event.target.value)} id="phone" name="phone" placeholder="Phone" required></input>
      </div>

      {loading ? (
        <button className="submit" type="submit">
          Sending
        </button>
      ) : (
        <button className="submit" type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default Form;
