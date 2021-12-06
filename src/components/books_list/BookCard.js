import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BOOK_PAGE } from "../../services/const";
import Image from '../image/Image'
import styles from "./BooksList.module.css";
import noImage from "../../assets/images/noImg.png";

const BookCard = ({id, image, title }) => {
  const navigation = useNavigate();

  return (
    <Card className={styles.cardWrapper}>
      <Card.Title className={styles.cardTitle}>{title}</Card.Title>
      <Card.Body>
        {/* <Card.Img className={styles.cardImage} src={image ? image : noImage} /> */}
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
