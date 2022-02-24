import "../scss/components/_reservation.scss";
import Form from "./Form";

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation__left"></div>
      <div className="reservation__center">
        <div className="reservation__col">
          <h3 className="reserv-title">Make your reservation</h3>
          <p className="reserv-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident, reiciendis ullam accusamus, adipisci</p>
        </div>
        <div className="reservation__col">
          <h3 className="reserv-title">The Story</h3>
          <Form />
        </div>
      </div>
      <div className="reservation__right"></div>
    </div>
  );
};

export default Reservation;
