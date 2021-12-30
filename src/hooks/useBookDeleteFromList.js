import { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const useBookDeleteFromList = (book) => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [isMutating, setIsMutating] = useState(false);

  const markBookAsReaded = async () => {
     setIsMutating(true);
    try{
      const dbRef = doc(db, `bookList`, book._id);
      await updateDoc(dbRef, {
        readed: true,
      });
    }catch(e){
      setIsError(true);
      setError(e);
      setIsMutating(false);
    }
     
  }

  	const deleteBookFromList = async () => {
      setIsMutating(true);

      // run mutation that will delete image from storage and db
      try {
       
        // get ref to image in db
        const dbRef = doc(db, `bookList`, book._id);

        // delete image from db
        await deleteDoc(dbRef);
      } catch (e) {
        setIsError(true);
        setError(e);
        setIsMutating(false);
      }
    };

  return { error, isError, isMutating, deleteBookFromList, markBookAsReaded };
}

export default useBookDeleteFromList
