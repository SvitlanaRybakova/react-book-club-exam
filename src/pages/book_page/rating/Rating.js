import React from "react";
import useGetCurrentBook from "../../../hooks/useGetCurrentBook";
import styles from "./Rating.module.css";

// { voteAverage, voteCount }
const Rating = ({ bookId }) => {
  const {
    firebaseRating,
    firebaseTotalVoutes,
    firebaseRatingSum,
  } = useGetCurrentBook(bookId);
  
  return (
    <div className={styles.rating}>
      <div className={styles.ratingCounter}>
        {Math.floor(firebaseRating)}
      </div>
      <div className={styles.ratingDescription}>
        <h3 className={styles.ratingTitle}>Viewer rating</h3>
        <span className={styles.ratingText}>
          Average rating:
          <strong className={styles.ratingTextBold}>
            {firebaseTotalVoutes && firebaseRatingSum
              ? firebaseRatingSum / firebaseTotalVoutes
              : 0}
          </strong>
        </span>
        <span className={styles.ratingText}>
          Total votes:
          <strong className={styles.ratingTextBold}>{firebaseTotalVoutes? firebaseTotalVoutes : 0}</strong>
        </span>
      </div>
    </div>
  );
};

export default Rating;
