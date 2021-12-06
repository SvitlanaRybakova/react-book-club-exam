import React from 'react'
import BookCard from './BookCard'
import styles from './BooksList.module.css'

const BooksList = ({data}) => {
  
  return (
    <div className={styles.booksListWrapper}>
      {data?.items.map((book) => (
        <BookCard
          key={book.id}
          image={book.volumeInfo.imageLinks?.smallThumbnail}
          title={book.volumeInfo.title}
          id={book.id}
        />
      ))}
    </div>
  );
}

export default BooksList
