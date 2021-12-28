import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useUploadComment = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isMutating, setIsMutating] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const { currentUser } = useAuthContext();
  const mutate = async ({ bookId, bookRating, comment }) => {
    // reset internal state
    setError(null);
    setIsError(null);
    setIsSuccess(null);
    setIsMutating(true);

    try {
      // create reference to db-collection 'comments'
      const collectionRef = collection(db, `comments`);

      await addDoc(collectionRef, {
        created: serverTimestamp(),
        user: currentUser.uid,
        userPhoto: currentUser.photoURL,
        userName: currentUser.displayName,
        bookId,
        bookRating,
        comment,
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

export default useUploadComment;
