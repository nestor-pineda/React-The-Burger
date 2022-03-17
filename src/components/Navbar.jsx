import Switcher from "./Switcher";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../scss/components/_navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <div className="pre-navigation">
        <div className="pre-navigation__left"></div>
        <div className="pre-navigation__center"></div>
        <div className="pre-navigation__right"></div>
      </div>
      <div className="navigation">
        <div className="navigation__left"></div>
        <div className="navigation__center">
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Brand href="/">
                <img src="/images/the-burger-logo.png" alt="The Burger" className="nav-logo" />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <img src="/images/the-burger-logo.png" alt="The Burger" className="nav-offcanvas-logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/" className="nav-item">
                      Home
                    </Link>
                    <Link to="/menu" className="nav-item">
                      Menu
                    </Link>
                    <Link to="/register" className="nav-item">
                      Register
                    </Link>
                    <Link to="/login" className="nav-item">
                      Signin
                    </Link>
                  </Nav>
                  <Switcher />
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
        <div className="navigation__right"></div>
      </div>
    </nav>
  );
};

export default Navigation;
