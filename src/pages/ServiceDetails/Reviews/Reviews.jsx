import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const Reviews = () => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
  };

  return (
    <Container className="w-half py-5">
      <Helmet>
        <title>Update Review</title>
      </Helmet>
      <Form
        onSubmit={handleUpdate}
        className="shadow-sm rounded mt-4 mt-lg-0 p-4"
      >
        <h5>Add Review</h5>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control name="message" as="textarea" rows={4} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="dark" type="submit" className="px-4">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Reviews;
