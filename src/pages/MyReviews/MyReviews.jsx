import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../contexts/UserContext";
import ReviewCard from "./ReviewCard";
import { Helmet } from "react-helmet-async";
import Loading from "../../component/Loading";
import swal from "sweetalert";
import UpdateReview from "../ServiceDetails/Reviews/UpdateReview";
import { useQuery } from "@tanstack/react-query";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [noReviews, setNoReviews] = useState(false);
  const [show, setShow] = useState(false);
  const [editedReview, setEditedReview] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (_id, serviceName, message) => {
    setEditedReview({ _id, serviceName, message });
    setShow(true);
  };

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://get-snappy-server.vercel.app/reviews?email=${user?.email}`
      );
      const data = await res.json();
      if (data) {
        setLoading(false);
        if (data.length === 0) {
          setNoReviews(true);
        }
      }
      return data;
    },
  });

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this review",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://get-snappy-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            swal("The review has been deleted!", {
              icon: "success",
            });
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <div className="py-5 min-vh-100">
      <Helmet>
        <title>My Reviews - Get Snappy</title>
      </Helmet>
      <Container>
        {loading && <Loading></Loading>}
        {noReviews && (
          <h3 className="display-5 fw-semibold text-center pt-5">
            No reviews are found
          </h3>
        )}
        <Row className="g-4">
          {reviews.map((review) => (
            <Col md="6" lg="4" key={review._id}>
              <ReviewCard
                review={review}
                handleDelete={handleDelete}
                handleShow={handleShow}
              ></ReviewCard>
            </Col>
          ))}
        </Row>
      </Container>
      <UpdateReview
        show={show}
        handleClose={handleClose}
        editedReview={editedReview}
        refetch={refetch}
      ></UpdateReview>
    </div>
  );
};

export default MyReviews;
