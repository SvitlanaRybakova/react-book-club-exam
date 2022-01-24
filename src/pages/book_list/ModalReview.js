import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./BookList.module.css";

const ModalReview = ({ show, handleClose, bookId }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.modalTitle}>
          Have you read this book?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please, write the review about book on the follow link
        <br/>
          <Link to={`/books/${bookId}`}> [click here...] </Link>
      </Modal.Body>
      <Modal.Footer>
        <div
          role="button"
          className={styles.closeBtn}
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalReview;
