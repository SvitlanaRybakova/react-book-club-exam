import React from "react";
import { Modal, Button } from "react-bootstrap";
import CreateComment from '../../components/create_comment/CreateComment'
import styles from './BookList.module.css'

const ModalReview = ({show, handleClose}) => {
  return (
    <Modal.Dialog show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.modalTitle}>
          Have you read this book? <br /> Please, write the review
        </Modal.Title>
      </Modal.Header>

      {/* <Modal.Body> */}
      <CreateComment />
      {/* </Modal.Body> */}

      <Modal.Footer>
        <div role="button" className={styles.closeBtn} onClick={handleClose}>
          Close
        </div>
        <div role="button" className={styles.sendBtn} onClick={handleClose}>
          Send
        </div>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default ModalReview;
