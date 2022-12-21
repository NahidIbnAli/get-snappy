import axios from "axios";
import React from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UpdateReview = ({ show, handleClose, editedReview, refetch }) => {
  const { register, handleSubmit } = useForm();
  const { _id, serviceName, message } = editedReview;
  const [saveBtnLoading, setSaveBtnLoading] = useState(false);

  const handleUpdateReview = (data) => {
    setSaveBtnLoading(true);
    const updateReview = { review: data.message };
    axios
      .put(`https://get-snappy-server.vercel.app/reviews/${_id}`, updateReview)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setSaveBtnLoading(false);
          toast.success("Updated successfully");
          refetch();
          handleClose();
        }
      })
      .catch((error) => {
        setSaveBtnLoading(false);
        console.error(error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>{serviceName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(handleUpdateReview)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              {...register("message")}
              as="textarea"
              rows={3}
              defaultValue={message}
            />
          </Form.Group>
          <Form.Group
            className="mt-4 mb-3 justify-content-end d-flex"
            controlId="exampleForm.ControlTextarea2"
          >
            <Button className="px-3" type="submit" variant="dark">
              {saveBtnLoading && (
                <Spinner className="me-1" variant="light" size="sm"></Spinner>
              )}
              Save
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateReview;
