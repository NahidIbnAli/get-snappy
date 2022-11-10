import React from "react";
import { Button, Card } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ReviewCard = ({ review, handleDelete, handleUpdate }) => {
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
          <Link to={`/reviews/${_id}`}>
            <Button variant="dark">Edit Review</Button>
          </Link>
          <Button onClick={() => handleDelete(_id)} variant="dark">
            Delete Review
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
