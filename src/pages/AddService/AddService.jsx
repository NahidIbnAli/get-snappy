import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddService.css";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const AddService = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  //   imagebbHostKey
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddService = (data) => {
    setBtnLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, formData)
      .then((response) => {
        if (response.data.success) {
          const service = {
            name: data.name,
            price: data.price,
            image: response.data.data.url,
            description: data.description,
          };

          axios
            .post("https://get-snappy-server.vercel.app/services", service)
            .then((response) => {
              if (response.data.acknowledged) {
                setBtnLoading(false);
                toast.success("Added new service successfully");
              }
            });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-60 mx-auto pt-4 pb-5 mb-2">
      <Helmet>
        <title>Add Service - Get Snappy</title>
      </Helmet>
      <Container className="py-5">
        <h2 className="text-center display-5 fw-semibold mb-4">
          Add New Service
        </h2>
        <Form
          onSubmit={handleSubmit(handleAddService)}
          className="bg-light p-5 rounded"
        >
          <Row className="g-4">
            <Col lg="6">
              <Form.Group controlId="formBasicName">
                <Form.Control
                  {...register("name")}
                  type="text"
                  className="py-2"
                  placeholder="Service Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group controlId="formBasicPrice">
                <Form.Control
                  {...register("price")}
                  type="text"
                  className="py-2"
                  placeholder="Service Price"
                  required
                />
              </Form.Group>
            </Col>
            <Col lg="12">
              <Form.Group controlId="formBasicImage">
                <Form.Control
                  {...register("image")}
                  type="file"
                  className="btnFile"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicDescription">
                <Form.Control
                  {...register("description")}
                  as="textarea"
                  rows={3}
                  placeholder="Service Description"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="dark" className="w-100 py-2 mt-4" type="submit">
            {btnLoading && (
              <Spinner className="me-1" variant="light" size="sm"></Spinner>
            )}
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddService;
