import React, {useState} from "react";
import { Button } from "react-bootstrap";
import RatingIcon from './Rating_icons/RatingIcon'
import styles from "./CreateComment.module.css";

const CreateComment = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
    
  };
  console.log("RATING", rating);
  return (
    <div className={styles.wrapper}>
      <div className="d-flex mb-4">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
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
        <input type="text" className={styles.commentInput} />
        <Button className={styles.postBtn}>Post comment</Button>
      </div>
    </div>
  );
};

export default CreateComment;
