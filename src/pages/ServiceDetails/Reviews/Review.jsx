import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  const { name, photoURL, message } = review;
  return (
    <Col>
      <Card className="shadow-sm border-0">
        <Card.Body className="p-4 text-center">
          <Card.Img
            src={photoURL}
            className="rounded-circle"
            style={{ width: "60px" }}
          />
          <Card.Title className="fs-3 fw-bold">{name}</Card.Title>
          <Card.Text>{message}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
