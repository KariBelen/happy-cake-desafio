import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" expand="lg" variant="dark">
      <Container fluid>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll>
          <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">📱 Contacto</Link>
          </Nav>
          <Navbar.Brand className="d-flex">Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
