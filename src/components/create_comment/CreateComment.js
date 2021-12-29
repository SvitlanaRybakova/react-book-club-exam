import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import useUploadComment from "../../hooks/useUploadComment";
import RatingIcon from "./Rating_icons/RatingIcon";
import CustomErrorMessage from "../error_msg/CustomErrorMessage";
import styles from "./CreateComment.module.css";
import Loader from "react-spinners/BarLoader";

const CreateComment = ({ bookId, handleClose }) => {
  const { mutate, error, isError, isMutating } = useUploadComment();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const commentRef = useRef();

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  const handlePostClick = () => {
    mutate({
      bookId: bookId,
      bookRating: rating,
      comment: commentRef.current.value,
    });
    commentRef.current.value = "";
    if(handleClose){
      handleClose()
    }
    
  };
  return (
    <div className={styles.wrapper}>
      <div className="d-flex mb-4">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              key={uuidv4()}
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </div>
      <div className={styles.commentWrapper}>
        <input type="text" className={styles.commentInput} ref={commentRef} />
        <Button
          className={styles.postBtn}
          onClick={handlePostClick}
          disabled={isMutating}
        > Post comment
        </Button>
      </div>
      {isError && <CustomErrorMessage error={"error"} />}
      {isMutating &&<Loader />}
    </div>
  );
};

export default CreateComment;
