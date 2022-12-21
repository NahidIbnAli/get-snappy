import React, { useContext, useRef, useState } from "react";
import { Button, Image, OverlayTrigger, Popover } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/UserContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign-out Successful"))
      .catch((error) => console.error(error));
  };

  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img style={{ width: "45px" }} src={logo} alt="" />
          <span className="ms-2">Get Snappy</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center gap-2">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            {user?.uid && (
              <>
                <Link to="/myreviews" className="nav-link">
                  My Reviews
                </Link>
                <Link to="/addservice" className="nav-link">
                  Add Service
                </Link>
              </>
            )}
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            {user?.uid ? (
              <OverlayTrigger
                trigger="click"
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover id="popover-positioned-bottom">
                    <Popover.Body className="text-center pt-2">
                      <strong className="d-block">{user?.displayName}</strong>
                      <strong className="d-block">{user?.email}</strong>
                      <Button
                        onClick={handleSignOut}
                        variant="outline-danger"
                        size="sm"
                        className="px-1 py-0 mt-1"
                      >
                        Logout
                      </Button>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Link className="nav-link p-0">
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                      objectFit: "cover",
                    }}
                    roundedCircle
                    src={user?.photoURL || "https://i.ibb.co/RzLyywb/user.png"}
                  ></Image>
                </Link>
              </OverlayTrigger>
            ) : (
              <Link
                to="/login"
                className="nav-link bg-dark rounded-pill px-3 text-light btn"
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
