import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { _id, image, name, price, description } = service;
  return (
    <Card className="h-100">
      <PhotoProvider>
        <PhotoView src={image}>
          <Card.Img variant="top" src={image} />
        </PhotoView>
      </PhotoProvider>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100) + "..."}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <Card.Text className="fw-bold fs-4 m-0">${price}</Card.Text>
          <Link to={`/services/${_id}`}>
            <Button variant="dark">View Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
