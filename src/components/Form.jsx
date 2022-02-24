import "../scss/components/_form.scss";

const Form = () => {
  return (
    <form className="pardot-form" action="/">
      <input type="text" className="text" name="name" id="name" placeholder="Name" required />
      <input type="number" className="text" name="name" id="people" placeholder="People" required />

      <input type="date" className="date" id="date" name="date" defaultValue="2018-07-22" min="2018-01-01" max="2018-12-31"></input>
      <input type="time" className="date" id="time" name="time" min="09:00" max="18:00" required></input>

      <input type="email" className="text" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" placeholder="Email" required></input>

      <input type="tel" className="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" required></input>

      <button className="submit" type="submit" href="/">
        Submit
      </button>
    </form>
  );
};

export default Form;
