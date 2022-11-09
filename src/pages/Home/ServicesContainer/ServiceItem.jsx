import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ServiceItem = ({ service }) => {
  const { _id, image, name, price, description } = service;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100) + "..."}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <Card.Text className="fw-semibold m-0">${price}</Card.Text>
          <Button variant="dark">View Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
