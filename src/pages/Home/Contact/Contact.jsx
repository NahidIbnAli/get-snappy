import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../assets/Mail sent-rafiki.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div>
      <Container>
        <h3 className="text-center display-5 fw-semibold mb-3">Get In Touch</h3>
        <Row className="align-items-center">
          <Col lg="6">
            <p className="mb-4">
              I'd Love to hear from you. Whether you have a question or just
              want to say Hi, feel free to drop a message. I'll try my best to
              get back to you!
            </p>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  className="py-3"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  className="py-3"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <Button variant="dark btn-lg" className="w-100" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={image} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
