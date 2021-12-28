import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Img from "../../components/image/Image";
import noImg from "../../assets/images/noImg.png";
import useBookDeleteFromList from "../../hooks/useBookDeleteFromList";

const BookListItem = ({ setShow, book }) => {
  const handleShow = () => setShow(true);

  const { error, isError, mutate } = useBookDeleteFromList(book);

  if (isError) {
    console.log("The book has not been deleted", error);
  }
  return (
    <>
    <Row className="align-items-center my-3">
      <Col sm={2}>
        <Img
          imageSrc={book.image ? book.image : noImg}
          imageTitle={book.title}
        />
      </Col>
      <Col sm={5}>
        <p>
          <b>{book.title}</b>
        </p>
        <p>
          <em>{book.author}</em>
        </p>
      </Col>
      <Col sm={3}></Col>
      <Col sm={1} style={{ cursor: "pointer" }}>
        <div>
          <AiOutlineFileDone size={30} color={"green"} onClick={handleShow} />
        </div>
      </Col>
      <Col sm={1} style={{ cursor: "pointer" }}>
        <div>
          <RiDeleteBin6Line size={30} color={"gray"} onClick={mutate} />
        </div>
      </Col>
      
    </Row>
    <hr/>
    </>
  );
};

export default BookListItem;
