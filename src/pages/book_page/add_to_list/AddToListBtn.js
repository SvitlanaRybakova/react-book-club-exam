import React, { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import useUploadBookToList from "../../../hooks/useUploadBookToList";
import useGetData from "../../../hooks/useGetData";
import styles from "./AddToListBtn.module.css";

const AddToListBtn = ({ bookInfo, id }) => {
  const [isBookAdded, setAddBook] = useState(false);
  const { error, isError, isSuccess, mutate } = useUploadBookToList();
  const dataQuery = useGetData({
    getBookList: true,
    coll: "bookList",
  });

  // ckeck if this book has been already added to list
  useEffect(() => {
    if (dataQuery.data) {
      dataQuery.data.map((book) => {
        if (book.apiID === id) {
          setAddBook(true);
        }
      });
    }
  }, [dataQuery.data]);

  const [book, setBook] = useState({
    title: bookInfo.title,
    author: bookInfo.authors ? bookInfo.authors[0] : "",
    image: bookInfo.imageLinks.smallThumbnail,
    apiId: id,
  });

  const handleAddBookClick = () => {
    //  checks if the book has been already added
    if (!isBookAdded) {
      mutate(book);
    }
  };

  if (isError) {
    console.log("book hasn't been added", error);
  }
  if (isSuccess) {
    console.log("book has been added");
  }
  return (
    <>
      <div role="button" onClick={handleAddBookClick} disabled={isBookAdded}>
        {isBookAdded ? (
          <div className={styles.btnContentWrapper}>
            <TiDelete size={30} color={"red"} />{" "}
            <span style={{ paddingTop: "4px" }}>Book has been added</span>
          </div>
        ) : (
          <div className={styles.btnContentWrapper}>
            <FcCheckmark size={20} /> <span>Add to my book list</span>
          </div>
        )}
      </div>
    </>
  );
};

export default AddToListBtn;
