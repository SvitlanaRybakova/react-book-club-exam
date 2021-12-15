import React, { useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import BookListItem from "./BookListItem";
import ModalReview from "./ModalReview";
const BookList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <PageLayout>
      <BookListItem handleShow={handleShow} />
      <ModalReview show={show} handleClose={handleClose} />
    </PageLayout>
  );
};

export default BookList;
