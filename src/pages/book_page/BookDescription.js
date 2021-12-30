import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "../../components/image/Image";
import styles from "./BookPage.module.css";
import {AMMOUNT_OF_SYMBOLS} from '../../services/const'
import Rating from './rating/Rating'
import AddToListBtn from "./add_to_list/AddToListBtn";
import LoginWarning from './login_warning/LoginWarning'
import { useAuthContext } from "../../contexts/AuthContext";


const BookDescription = ({ bookInfo, id }) => {
  const [isFullDesc, setFullDesc] = useState(false);
const { currentUser } = useAuthContext();

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
                      __html: bookInfo.description.slice(0, AMMOUNT_OF_SYMBOLS),
                    }}
                  />
                )}
                {bookInfo.description.length > AMMOUNT_OF_SYMBOLS && (
                  <button
                    className={styles.descriptionButton}
                    onClick={() => setFullDesc((prevState) => !prevState)}
                  >
                    {isFullDesc ? "hide info" : "read more"}
                  </button>
                )}
              </Col>
            )}
          </Row>
          <Row className="mt-5">
            <Col>
              <Rating bookId={id}/>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              {currentUser ? (
                <AddToListBtn bookInfo={bookInfo} id={id} />
              ) : (
                <LoginWarning
                  message={"Please log in to add the book to the list"}
                />
              )}
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default BookDescription;
