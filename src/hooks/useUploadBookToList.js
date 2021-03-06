import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useUploadBookToList = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isMutating, setIsMutating] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const { currentUser } = useAuthContext();

  const mutate = async (book) => {
    // reset internal state
    setError(null);
    setIsError(null);
    setIsSuccess(null);
    setIsMutating(true);

    try {
      // create reference to db-collection 'bookList'
      const collectionRef = collection(db, `bookList`);

      // create document in db 
      await addDoc(collectionRef, {
        created: serverTimestamp(),
        title: book.title,
        image: book.image,
        author: book.author,
        user: currentUser.uid,
        apiID: book.apiId,
        readed: book.readed
      });

      setIsSuccess(true);
      setIsMutating(false);
    } catch (e) {
      setError(e.message);
      setIsError(true);
      setIsMutating(false);
      setIsSuccess(false);
    }
  };
  return { error, isError, isMutating, isSuccess, mutate };
};

export default useUploadBookToList;
