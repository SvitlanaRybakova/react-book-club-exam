import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import styles from './AddToListBtn.module.css'

const AddToListBtn = () => {
  const [isBookAdded, setAddBook] = useState(false);
  return (
    <div role="button" onClick={() => setAddBook(!isBookAdded)}>
      {isBookAdded ? (
        <div className={styles.btnContentWrapper}>
          <TiDelete size={30} color={"red"} /> <span> Book has been added</span>
        </div>
      ) : (
        <div className={styles.btnContentWrapper}>
          <FcCheckmark size={20} /> <span>Add to my book list</span>
        </div>
      )}
    </div>
  );
};

export default AddToListBtn;
