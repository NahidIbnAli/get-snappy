import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../assets/profile.jpg";

const About = () => {
  return (
    <div className="pb-5">
      <Container>
        <h2 className="text-center display-5 fw-semibold mb-5">About Me</h2>
        <Row className="align-items-center g-4">
          <Col lg="6">
            <img
              className="img-fluid rounded mx-auto d-block d-lg-inline"
              src={image}
              alt=""
            />
          </Col>
          <Col lg="6">
            <h3>Talha Ibn Iqbal</h3>
            <p className="lead">
              Talha is one of the commercial photographers in the USA. He is
              passionate about his work and he's following his passion for more
              than 10 years. He believes in simplicity so he always tries to
              exhibit his works creatively in a simple way. His work includes
              Commercial, Food, Products, Lifestyle and more.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
