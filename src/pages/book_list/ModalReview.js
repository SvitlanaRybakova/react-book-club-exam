import React from "react";
import { Modal} from "react-bootstrap";
import CreateComment from '../../components/create_comment/CreateComment'
import styles from './BookList.module.css'

const ModalReview = ({show, setShow}) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.modalTitle}>
          Have you read this book? <br /> Please, write the review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateComment />
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
