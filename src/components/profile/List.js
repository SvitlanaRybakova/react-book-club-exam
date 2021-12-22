import React from "react";
import { ListGroup, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import useBookList from "../../hooks/useBookList.js";
import Loader from '../loader/Loader'
import CustomError from '../error_msg/CustomErrorMessage'

const List = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useBookList();

  return (
    <>
      <h2 className={styles.profileTitle}>My List</h2>
      {isLoading && <Loader />}
      {isError && <CustomError error={error} />}
      {data && (
        <ListGroup as="ol" numbered>
          {data.slice(0, 3).map((book) => (
            <ListGroup.Item
              key={uuidv4()}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className={`ms-2 me-auto ${styles.bookDescription}`}>
                <div className="fw-bold">{book.title}</div>
                {book.author}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {data?.length <= 0 && (
        <Alert variant="light"> You do not have books</Alert>
      )}
      <Button className={styles.saveBtn} onClick={() => navigate("/book-list")}>
        Go to all list
      </Button>
    </>
  );
};

export default List;
