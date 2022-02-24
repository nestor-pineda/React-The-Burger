import "../scss/components/_form.scss";

const Form = () => {
  return (
    <form className="form" action="/">
      <div className="form-row">
        <input type="text" className="text" name="name" id="name" placeholder="Name" required />

        <input type="number" className="text" name="name" id="people" placeholder="People" required />
      </div>

      <div className="form-row">
        <input type="date" className="date" id="date" name="date" defaultValue="2022-02-22" min="2022-02-22" max="2022-12-31"></input>

        <input type="time" className="date" id="time" name="time" defaultValue="13:00" min="12:00" max="22:00" required></input>
      </div>

      <div className="form-row">
        <input type="email" className="text" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" placeholder="Email" required></input>

        <input type="tel" className="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" required></input>
      </div>

      <button className="submit" type="submit" href="/">
        Submit
      </button>
    </form>
  );
};

export default Form;
