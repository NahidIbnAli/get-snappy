import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = () => {
  return (
    <Col>
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4 pt-0">
          <Card.Img src={image} className="rounded-3" />
          <Card.Title className="fs-3 fw-bold mt-0 mb-3">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
