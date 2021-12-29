import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {Alert} from 'react-bootstrap'
import PageLayout from "../../components/layout/PageLayout";
import BookListItem from "./BookListItem";

import useBookList from "../../hooks/useBookList";
import Loader from "../../components/loader/Loader";
import CustomError from "../../components/error_msg/CustomErrorMessage";

const BookList = () => {
  
  const { data, isError, isLoading, error } = useBookList();

  return (
    <PageLayout>
      {isLoading && <Loader />}
      {isError && <CustomError error={error} />}
      {data &&
        data.map((book) => (
          <BookListItem  book={book} key={uuidv4()} />
        ))}
      {data?.length <= 0 && (
        <Alert variant="light"> You do not have books</Alert>
      )}
     
    </PageLayout>
  );
};

export default BookList;
