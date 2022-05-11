import React from "react";
import useGetCurrentBook from "../../../hooks/useGetCurrentBook";
import styles from "./Rating.module.css";

// { voteAverage, voteCount }
const Rating = ({ bookId }) => {
  const {
    data,
  } = useGetCurrentBook(bookId);

  return (
    <>
      {data &&(
          <div className={styles.rating}>
            <div className={styles.ratingCounter}>{Math.floor(data.rating)}</div>
            <div className={styles.ratingDescription}>
              <h3 className={styles.ratingTitle}>Viewer rating</h3>
              <span className={styles.ratingText}>
                Average rating:
                <strong className={styles.ratingTextBold}>
                  {data.totalVoutes && data.ratingSum ? data.ratingSum / data.totalVoutes : 0}
                </strong>
              </span>
              <span className={styles.ratingText}>
                Total votes:
                <strong className={styles.ratingTextBold}>
                  {data.totalVoutes ? data.totalVoutes : 0}
                </strong>
              </span>
            </div>
          </div>
        )}
    </>
  );
};

export default Rating;
