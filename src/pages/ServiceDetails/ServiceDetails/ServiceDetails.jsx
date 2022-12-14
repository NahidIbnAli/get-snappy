import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";
import Review from "../Reviews/Review";
import "./ServiceDetails.css";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, image, name, price, description } = useLoaderData();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", _id],
    queryFn: async () => {
      const res = await fetch(
        `https://get-snappy-server.vercel.app/reviews?id=${_id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const review = {
      serviceId: _id,
      serviceName: name,
      image,
      message,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL || "https://i.ibb.co/RzLyywb/user.png",
    };
    fetch("https://get-snappy-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.acknowledged) {
          refetch();
          toast.success("Review Submited Successfully");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Helmet>
        <title>Services Details - Get Snappy</title>
      </Helmet>
      <Container className="pt-4 pb-5">
        {/* service details section */}
        <Row className="gy-3 gx-lg-5">
          <Col lg="6">
            <PhotoProvider>
              <PhotoView src={image}>
                <Card.Img src={image} className="rounded-3" />
              </PhotoView>
            </PhotoProvider>
          </Col>
          <Col lg="6">
            <Card.Title className="fs-3 fw-bold mt-0 mb-2">{name}</Card.Title>
            <Card.Text className="fw-bold fs-5 mb-2">
              Price : ${price}
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </Col>
        </Row>
        {/* review section */}
        <Row>
          <h3 className="display-5 fw-semibold text-center py-5">Reviews</h3>

          <Col lg="6" className="d-flex flex-column gap-4">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Col>
          {/* review form */}
          <Col lg="6">
            {user?.uid ? (
              <Form
                onSubmit={handleSubmitReview}
                className="shadow-sm rounded mt-4 mt-lg-0 p-4"
              >
                <h5>Add Review</h5>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control name="message" as="textarea" rows={4} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button variant="dark" type="submit" className="px-4">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            ) : (
              <p className="text-center py-4 lead">
                Please{" "}
                <Link
                  to="/login"
                  className="fw-semibold text-decoration-none text-dark"
                >
                  login
                </Link>{" "}
                to add a review
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
