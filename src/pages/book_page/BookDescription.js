import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./BookPage.module.css";

const BookDescription = ({ bookInfo, isFullDesc, setFullDesc }) => {
  return (
    <>
   { bookInfo && (
      <div className={styles.bookInfoWrappwer}>
        <Row className="my-3">
          <Col md={8}>
            <h3 className={styles.title}>{bookInfo.title}</h3>
          </Col>
          <Col>
            {bookInfo.authors.map((author, i) => (
              <span className={styles.bookAuthor} key={i}>
                {author}
              </span>
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={4} className={styles.imgWrapper}>
            <img src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title} />
          </Col>
          <Col className={styles.description}>
            {isFullDesc ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: bookInfo.description,
                }}
              />
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: bookInfo.description.slice(0, 400),
                }}
              />
            )}

            <button
              className={styles.descriptionButton}
              onClick={() => setFullDesc((prevState) => !prevState)}
            >
              {isFullDesc ? "hide info" : "read more"}
            </button>
          </Col>
        </Row>
      </div>
    )}
    </>
  );
};

export default BookDescription;
