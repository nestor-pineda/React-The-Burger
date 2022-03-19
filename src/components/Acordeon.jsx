// import { useAccordionButton } from "react-bootstrap/AccordionButton";
// import { Accordion } from "react-bootstrap";
// import { Card } from "react-bootstrap";

// function CustomToggle({ children, eventKey }) {
//   const decoratedOnClick = useAccordionButton(eventKey, () => console.log("totally custom!"));

//   return (
//     <button type="button" style={{ backgroundColor: "pink" }} onClick={decoratedOnClick}>
//       {children}
//     </button>
//   );
// }

// function Example({ allReservas, cancelReserva, userInfo, requestAllReservation, requestReservation, reservasUser }) {
//   return (
//     <Accordion defaultActiveKey="0">
//       {/* <Card>
//         <Card.Header>
//           <CustomToggle eventKey="0">Click me!</CustomToggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>Hello! I'm the body</Card.Body>
//         </Accordion.Collapse>
//       </Card> */}
//       <Card>
//         <Card.Header>
//           {/* {userInfo.isAdmin === "true" ? (
//             <CustomToggle eventKey="1" onClick={() => requestAllReservation()}>
//               Click me!
//             </CustomToggle>
//           ) : (
//             <CustomToggle eventKey="1" onClick={() => requestReservation()}>
//               Click me!
//             </CustomToggle>
//           )} */}
//           {/* <CustomToggle eventKey="1">Click me!</CustomToggle> */}
//           {userInfo.isAdmin === "true" ? (
//             <button eventKey="1" onClick={requestAllReservation}>
//               Reservas
//             </button>
//           ) : (
//             <button eventKey="1" onClick={requestReservation}>
//               Reservas
//             </button>
//           )}
//         </Card.Header>
//         <Accordion.Collapse eventKey="1">
//           <Card.Body>

//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     </Accordion>
//   );
// }

// export default Example;
