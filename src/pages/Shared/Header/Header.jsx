import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img style={{ width: "45px" }} src={logo} alt="" />
          <span className="ms-2">Get Snappy</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
