import React from "react";
import { Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import CommentItem from './CommentItem';
import usePostedComments from "../../hooks/usePostedComments";
import CustomErrorMessage from "../error_msg/CustomErrorMessage";
import Loader from "../loader/Loader";
import styles from "./Comment.module.css";

const CommentsList = ({bookId}) => {
  const { data, isLoading, isError, error } = usePostedComments(bookId);
  
  return (
    <Row className={styles.commentWrapper}>
      {isLoading && <Loader />}
      {isError && <CustomErrorMessage error={error} />}
      {data && data.map(comment => <CommentItem comment={comment} key={uuidv4()}/>)}
    </Row>
  );
};

export default CommentsList;