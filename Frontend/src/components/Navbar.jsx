import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="NavBar">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/products">
              Producten
            </Nav.Link>
            <Nav.Link as={Link} to="/basket">
              WinkelMand
            </Nav.Link>

            {/* <Nav.Link onClick={goProduct}>Producten</Nav.Link>  */}
            {/* <Nav.Link onClick={goBasket}>Winkelmand</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
