import React from 'react'
import { Row, Col } from "react-bootstrap";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Img from "../../components/image/Image";
import noImg from "../../assets/images/noImg.png";

const BookListItem = ({ handleShow }) => {
  return (
    <Row className="align-items-center">
      <Col sm={2}>
        <Img imageSrc={noImg} imageTitle={"book title"} />
      </Col>
      <Col sm={5}>
        <p>Book title</p>
      </Col>
      <Col sm={3}>
        <p>Book author</p>
      </Col>
      <Col sm={1} style={{ cursor: "pointer" }}>
        <div>
          <AiOutlineFileDone size={30} color={"green"} onClick={handleShow} />
        </div>
      </Col>
      <Col sm={1} style={{ cursor: "pointer" }}>
        <div>
          <RiDeleteBin6Line size={30} color={"red"} />
        </div>
      </Col>
    </Row>
  );
};

export default BookListItem
