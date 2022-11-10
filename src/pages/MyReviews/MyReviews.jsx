import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../contexts/UserContext";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to remove this review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const filterdReviews = reviews.filter((review) => review._id !== id);
          setReviews(filterdReviews);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="py-5">
      <Container>
        <Row className="g-4">
          {reviews.map((review) => (
            <Col md="6" lg="4" key={review._id}>
              <ReviewCard
                review={review}
                handleDelete={handleDelete}
              ></ReviewCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyReviews;
