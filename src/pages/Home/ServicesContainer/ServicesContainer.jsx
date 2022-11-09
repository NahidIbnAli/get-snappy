import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem";

const ServicesContainer = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?limited=true")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="py-5 text-center">
      <Container>
        <h2 className="display-5 fw-semibold">My Services</h2>
        <p className="text-muted">
          Whether you're looking for photos to utilize on your company website,
          for social media, or in an advertisement, Get Snappy offers a variety
          of professional photography service.
        </p>
        <Row className="py-4 g-4">
          {services?.map((service) => (
            <Col md="6" xl="4" key={service._id}>
              <ServiceItem service={service}></ServiceItem>
            </Col>
          ))}
        </Row>
        <Link to="/services">
          <Button variant="dark" className="px-4 mt-3">
            See All
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default ServicesContainer;
