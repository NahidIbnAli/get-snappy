import React, { useRef } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import image from "../../../assets/Mail sent-rafiki.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoadingBtn(true);

    emailjs
      .sendForm(
        "service_b80b2h4",
        "template_2ry597q",
        form.current,
        "PZj4QnbeyxZPIvyaI"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setLoadingBtn(false);
          toast.success("Your message has been sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Container>
        <h2 className="text-center display-5 fw-semibold mb-3">Get In Touch</h2>
        <Row className="align-items-center flex-row-reverse">
          <Col lg="6">
            <img className="img-fluid" src={image} alt="" />
          </Col>
          <Col lg="6">
            <p className="mb-4">
              If you want to hire me for photography services, you can drop a
              message here. I'll try my best to get back to you ASAP!!
            </p>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  className="py-3"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  className="py-3"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button variant="dark btn-lg" className="w-100" type="submit">
                {loadingBtn ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  <span>Send Message</span>
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
