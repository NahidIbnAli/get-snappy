import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
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
              <>
                <Link className="nav-link p-0">
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                </Link>
                <Button
                  variant="dark"
                  onClick={handleSignOut}
                  className="rounded-pill"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" className="nav-link">
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
