import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddService.css";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const service = {
      name,
      image,
      price,
      description,
    };
    fetch(`https://get-snappy-server.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.acknowledged) {
          toast.success("Added New Service Successfully");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-60 mx-auto">
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <Container className="py-5">
        <h2 className="text-center display-5 fw-semibold mb-4">
          Add New Service
        </h2>
        <Form onSubmit={handleAddService} className="bg-light p-5 rounded">
          <Row className="g-4">
            <Col lg="6">
              <Form.Group controlId="formBasicName">
                <Form.Control
                  name="name"
                  className="py-2"
                  type="text"
                  placeholder="Service Name"
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group controlId="formBasicPrice">
                <Form.Control
                  name="price"
                  className="py-2"
                  type="text"
                  placeholder="Service Price"
                />
              </Form.Group>
            </Col>
            <Col lg="12">
              <Form.Group controlId="formBasicImage">
                <Form.Control
                  name="image"
                  className="py-2"
                  type="text"
                  placeholder="Service Image"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicDescription">
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={3}
                  placeholder="Service Description"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="dark" className="w-100 py-2 mt-4" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddService;
