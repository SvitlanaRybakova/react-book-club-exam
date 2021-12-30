import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Img from "../../components/image/Image";
import noImg from "../../assets/images/noImg.png";
import useBookDeleteFromList from "../../hooks/useBookDeleteFromList";
import ModalReview from "./ModalReview";

const BookListItem = ({ book }) => {
  const [show, setShow] = useState(false);
  const {
    error,
    isError,
    deleteBookFromList,
    markBookAsReaded,
  } = useBookDeleteFromList(book);

  const handleShow = () => {
    if(!book.readed){
     
     
       markBookAsReaded();
    }
    //  setShow(true);
   
  };
  console.log(show);

  if (isError) {
    console.log("The book has not been deleted", error);
  }
  return (
    <>
      <Row className="align-items-center my-3">
        <Col sm={2}>
          <Link to={`/books/${book.apiID}`}>
            <Img
              imageSrc={book.image ? book.image : noImg}
              imageTitle={book.title}
            />
          </Link>
        </Col>
        <Col sm={5}>
          <Link to={`/books/${book.apiID}`}>
            {book.readed ? (
              <b>
                <del>{book.title}</del>
              </b>
            ) : (
              <b>{book.title}</b>
            )}
          </Link>
          <Link to={`/books/${book.apiID}`}>
            {book.readed ? (
              <p>
                <del>
                  <em>{book.author}</em>
                </del>
              </p>
            ) : (
              <p>
                <em>{book.author}</em>
              </p>
            )}
          </Link>
        </Col>
        <Col sm={2}></Col>

        <Col sm={2}>
          <div
            // role="button"
            disabled={book.readed}
          >
            {book.readed ? (
              <span className="text-secondary font-weight-light">
                <em>readed</em>
              </span>
            ) : (
              <AiOutlineFileDone
                style={{ cursor: "pointer" }}
                size={30}
                color={"green"}
                onClick={handleShow}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark book as readed"
              />
            )}
          </div>
        </Col>
        <Col sm={1} style={{ cursor: "pointer" }}>
          <div>
            <RiDeleteBin6Line
              size={30}
              color={"gray"}
              onClick={deleteBookFromList}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete book"
            />
          </div>
        </Col>
      </Row>
      <hr />
      {/* <ModalReview show={show} setShow={setShow} bookId={book.apiID} /> */}
    </>
  );
};

export default BookListItem;
