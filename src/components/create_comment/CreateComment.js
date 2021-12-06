import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CreateComment.module.css";

const CreateComment = () => {
  return (
    <div className={styles.commentWrapper}>
      <input type="text" className={styles.commentInput} />
      <Button className={styles.postBtn}>Post comment</Button>
    </div>
  );
};

export default CreateComment;
