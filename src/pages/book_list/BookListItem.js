import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Img from "../../components/image/Image";
import noImg from "../../assets/images/noImg.png";

const BookListItem = ({ setShow, book }) => {
  const handleShow = () => setShow(true);
  return (
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
          <RiDeleteBin6Line size={30} color={"gray"} />
        </div>
      </Col>
    </Row>
  );
};

export default BookListItem;
