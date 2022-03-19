import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log("totally custom!"));

  return (
    <button type="button" style={{ backgroundColor: "pink" }} onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function Example({ allReservas, cancelReserva, userInfo, requestAllReservation, requestReservation, reservasUser }) {
  return (
    <Accordion defaultActiveKey="0">
      {/* <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card> */}
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {userInfo.isAdmin === "true" ? <button onClick={requestAllReservation}>Reservas</button> : <button onClick={requestReservation}>Reservas</button>}
            {allReservas.map((reserva) => {
              return (
                <div className="reservation-info" key={reserva.idReserva}>
                  <div className="reservation-info__texts">
                    <p className="reservation-info__paragraph">
                      coduser: <span>{reserva.codUser}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      People: <span>{reserva.numero}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      Date: <span>{reserva.date}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      Time: <span>{reserva.hour}</span>
                    </p>
                  </div>
                  <button className="reservation-info_cancel" onClick={() => cancelReserva(reserva)}>
                    Cancel
                  </button>
                </div>
              );
            })}
            {reservasUser.map((reserva) => {
              return (
                <div className="reservation-info" key={reserva.idReserva}>
                  <div className="reservation-info__texts">
                    <p className="reservation-info__paragraph">
                      Name: <span>{userInfo.name}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      People: <span>{reserva.numero}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      Date: <span>{reserva.date}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      Time: <span>{reserva.hour}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      Phone: <span>{userInfo.phone}</span>
                    </p>
                    <p className="reservation-info__paragraph">
                      Email: <span>{userInfo.email}</span>
                    </p>
                  </div>
                  <button className="reservation-info_cancel" onClick={() => cancelReserva(reserva)}>
                    Cancel
                  </button>
                </div>
              );
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Example;
