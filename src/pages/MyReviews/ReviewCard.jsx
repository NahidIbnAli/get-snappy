import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ReviewCard = ({ review }) => {
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
          <Button variant="dark">Edit Review</Button>
          <Button variant="dark">Delete Review</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;

{
  /* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */
}
