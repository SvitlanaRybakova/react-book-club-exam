import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image from '../image/Image'
import styles from "./BooksList.module.css";


const BookCard = ({id, image, title }) => {
  const navigation = useNavigate();

  return (
    <Card className={styles.cardWrapper}>
      <Card.Title className={styles.cardTitle}>{title}</Card.Title>
      <span className={styles.tooltiptext}>{title}</span>
      <Card.Body className="pt-0">
        <div className={styles.cardImage}>
          <Image imageSrc={image} imageTitle={title} />
        </div>

        <Button
          className={styles.cardBtn}
          onClick={() => navigation(`/books/${id}`)}
        >
          Join conversation
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
