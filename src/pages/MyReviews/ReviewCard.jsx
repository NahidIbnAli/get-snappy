import React from "react";
import { Button, Card } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ReviewCard = ({ review, handleDelete, handleShow }) => {
  const { _id, image, serviceName, message } = review;
  return (
    <Card className="h-100">
      <PhotoProvider>
        <PhotoView src={image}>
          <div className="p-5 pb-0">
            <Card.Img src={image} />
          </div>
        </PhotoView>
      </PhotoProvider>
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <div>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text className="py-3">{message}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <Button
            onClick={() => handleShow(_id, serviceName, message)}
            variant="dark"
          >
            Edit Review
          </Button>
          <Button onClick={() => handleDelete(_id)} variant="dark">
            Delete Review
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
