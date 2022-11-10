import React, { useContext, useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import image from "../../assets/Privacy policy-rafiki.png";
import "./Login.css";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        form.reset();
        setErrorMessage(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="5">
            <img className="img-fluid" src={image} alt="" />
          </Col>
          <Col md="5">
            <Card className="cardd">
              <Card.Body className="p-4 p-lg-5">
                <h3 className="fs-2  text-center mb-4">Login</h3>
                <Form onSubmit={handleSignIn}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      className="py-2"
                      type="email"
                      placeholder="email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      className="py-2"
                      type="password"
                      placeholder="password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    {/* display error message */}
                    {errorMessage && (
                      <p className="text-danger">{errorMessage}</p>
                    )}
                    <Button
                      variant="dark"
                      className="w-100 fw-semibold"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form.Group>
                </Form>
                <p className="text-center">Or Login with</p>
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn btn-light p-3 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                >
                  <FcGoogle></FcGoogle>
                </button>
                <p className="text-center mt-3">
                  Need an account?{" "}
                  <Link
                    to="/signup"
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    Sign Up
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
