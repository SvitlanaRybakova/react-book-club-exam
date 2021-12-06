import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "../../components/image/Image";
import styles from "./BookPage.module.css";

const BookDescription = ({ bookInfo }) => {
  const [isFullDesc, setFullDesc] = useState(false);

  return (
    <>
      {bookInfo && (
        <div className={styles.bookInfoWrappwer}>
          <Row className="my-3">
            <Col md={8}>
              <h3 className={styles.title}>{bookInfo.title}</h3>
            </Col>
            {bookInfo.authors && (
              <Col>
                {bookInfo.authors.map((author, i) => (
                  <span className={styles.bookAuthor} key={i}>
                    {author}
                  </span>
                ))}
              </Col>
            )}
          </Row>
          <Row>
            <Col md={4} className={styles.imgWrapper}>
              <Image
                imageSrc={bookInfo.imageLinks?.thumbnail}
                imageTitle={bookInfo.title}
              />
            </Col>
            {bookInfo.description && (
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
                {bookInfo.description.length > 400 && (
                  <button
                    className={styles.descriptionButton}
                    onClick={()=> setFullDesc((prevState) => !prevState)}
                  >
                    {isFullDesc ? "hide info" : "read more"}
                  </button>
                )}
              </Col>
            )}
          </Row>
        </div>
      )}
    </>
  );
};

export default BookDescription;
