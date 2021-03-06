import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "react-bootstrap";
import PageLayout from "../../components/layout/PageLayout";
import BookListItem from "./BookListItem";
import useGetData from "../../hooks/useGetData";
import Loader from "../../components/loader/Loader";
import CustomError from "../../components/error_msg/CustomErrorMessage";


const BookList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, isLoading, isError, error } = useGetData({
    getBookList: true,
    coll: "bookList",
  });

  return (
    <PageLayout>
      {isLoading && <Loader />}
      {isError && <CustomError error={error} />}
      {data &&
        data.map((book) => (
          <BookListItem
            book={book}
            key={uuidv4()}
            handleShow={handleShow}
            show={show}
            handleClose={handleClose}
          />
        ))}
      {data?.length <= 0 && (
        <Alert variant="light"> You do not have books</Alert>
      )}
    </PageLayout>
  );
};

export default BookList;
