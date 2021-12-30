import React from "react";
import { v4 as uuidv4 } from "uuid";
import BookCard from "./BookCard";
import styles from "./BooksList.module.css";
import useLazyLoader from "../../hooks/useLazyLoader";

const BooksList = ({ data }) => {
  const { limit, ammountOfClick, onLoadMore } = useLazyLoader(
    data.length
  );
  return (
    <>
    <div className={styles.booksListWrapper}>
      {data.slice(0, limit)
        .map((book) => (
          <BookCard
            key={uuidv4()}
            image={book.image?book.image: book.volumeInfo.imageLinks?.smallThumbnail}
            title={book.title? book.title: book.volumeInfo.title}
            id={book.bookId? book.bookId:book.id}
          />
        ))}
     
    </div>
     <div className="text-center">
        <button
          onClick={onLoadMore}
          className={ammountOfClick === 0 ? styles.delete : styles.loadMore_btn}
        >
          Load more
        </button>
      </div>
      </>
  );
};

export default BooksList;
