import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {Alert} from 'react-bootstrap'
import PageLayout from "../../components/layout/PageLayout";
import BookListItem from "./BookListItem";
import ModalReview from "./ModalReview";
import useBookList from "../../hooks/useBookList";
import Loader from "../../components/loader/Loader";
import CustomError from "../../components/error_msg/CustomErrorMessage";

const BookList = () => {
  const [show, setShow] = useState(false);
  const { data, isError, isLoading, error } = useBookList();

  return (
    <PageLayout>
      {isLoading && <Loader />}
      {isError && <CustomError error={error} />}
      {data &&
        data.map((book) => (
          <BookListItem setShow={setShow} book={book} key={uuidv4()} />
        ))}
      {data?.length <= 0 && (
        <Alert variant="light"> You do not have books</Alert>
      )}
      <ModalReview show={show} setShow={setShow} />
    </PageLayout>
  );
};

export default BookList;
