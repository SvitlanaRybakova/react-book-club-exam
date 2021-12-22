import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import useUploadBookToList from "../../../hooks/useUploadBookToList";
import styles from "./AddToListBtn.module.css";

const AddToListBtn = ({ bookInfo }) => {
  const [isBookAdded, setAddBook] = useState(false);
  const { error, isError, isSuccess, mutate } = useUploadBookToList();

  const [book, setBook] = useState({
    title: bookInfo.title,
    author: bookInfo.authors[0],
    image: bookInfo.imageLinks.smallThumbnail,
  });

  const handleAddBookClick = () => {
    setAddBook(!isBookAdded);
    mutate(book);
  };

  if(isError){
    console.log("book hasn't been added", error);
  }
  if(isSuccess){
    console.log("book has been added");
  }
  return (
    <>
      <div role="button" onClick={handleAddBookClick}>
        {isBookAdded ? (
          <div className={styles.btnContentWrapper}>
            <TiDelete size={30} color={"red"} />{" "}
            <span> Book has been added</span>
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
