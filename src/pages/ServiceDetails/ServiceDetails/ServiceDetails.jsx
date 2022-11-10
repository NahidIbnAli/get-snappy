import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { _id, image, name, price, description } = useLoaderData();

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const user = {
      serviceId: _id,
      // email,
      review,
    };
    fetch("");
  };
  return (
    <div>
      <Container className="w-half pt-3 pb-5">
        {/* service details section */}
        <Card className="border-0 shadow-sm">
          <div className="p-4">
            <PhotoProvider>
              <PhotoView src={image}>
                <Card.Img src={image} className="rounded-3" />
              </PhotoView>
            </PhotoProvider>
          </div>
          <Card.Body className="p-4 pt-0">
            <Card.Title className="fs-3 fw-bold mt-0 mb-3">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="fw-semibold">${price}</Card.Text>
          </Card.Body>
        </Card>
        {/* review section */}
        {/* form for adding review */}
        <Form
          onSubmit={handleSubmitReview}
          className="shadow-sm rounded mt-5 p-4"
        >
          <h5>Add Review</h5>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control name="review" as="textarea" rows={4} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="dark" type="submit" className="px-4">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default ServiceDetails;
