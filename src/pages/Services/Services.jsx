import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Loading from "../../component/Loading";
import ServiceItem from "../Home/ServicesContainer/ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://get-snappy-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="pt-4 pb-5 min-vh-100">
      <Helmet>
        <title>Services - Get Snappy</title>
      </Helmet>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Container>
          <h2 className="display-5 fw-semibold text-center">Services</h2>
          <Row className="py-4 g-4">
            {services?.map((service) => (
              <Col md="6" xl="4" key={service._id}>
                <ServiceItem service={service}></ServiceItem>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Services;
