import React from "react";
import styles from "./Rating.module.css";

// { voteAverage, voteCount }
const Rating = () => {
  return (
    <div className={styles.rating}>
      <div className={styles.ratingCounter}>
        {/* {Math.floor((voteAverage * 100) / 10)}% */}
        7
      </div>
      <div className={styles.ratingDescription}>
        <h3 className={styles.ratingTitle}>Viewer rating</h3>
        <span className={styles.ratingText}>
          Average rating:{" "}
          {/* <strong className={styles.ratingTextBold}>{voteAverage}/10</strong> */}
          <strong className={styles.ratingTextBold}>7/10</strong>
        </span>
        <span className={styles.ratingText}>
          {/* Total votes: <strong clas={styles.ratingTextBold}>{voteCount}</strong> */}
          Total votes: <strong clas={styles.ratingTextBold}>10</strong>
        </span>
      </div>
    </div>
  );
};

export default Rating;
