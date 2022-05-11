import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";
import useGetCurrentBook from "./useGetCurrentBook";

const useUploadComment = (bookId) => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isMutating, setIsMutating] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const { currentUser } = useAuthContext();
  const { data } = useGetCurrentBook(bookId);

  let savedPrevRating = 0;
  const setRating = async (bookRating, bookId, image, title) => {
    // ***  book exists in db  ***
    if (data?.bookId) {
      // ref to firebase collection
      const bookDocRef = doc(db, "rating", data.id);

      // try to find current user in book users collection
      const foundUser = data.users.filter(
        (user) => user.user_id === currentUser.uid
      )[0];

      // *** user did the review ***
      if (foundUser) {
        // checks the users previous rating
        if (foundUser.userRate !== bookRating) {
          // saves the previous rating so that it can be taken away before adding a new one
          savedPrevRating = foundUser.userRate;
          // changes the userRate property
          foundUser.userRate = bookRating;
        }

        // updates users array and others fields in firebase
        updateDoc(bookDocRef, {
          users: [...data.users],
          ratingSum: data.ratingSum - savedPrevRating + bookRating,
          rating:
            (data.ratingSum - savedPrevRating + bookRating) / data.totalVoutes,
        });
      }

      // ***  no review of current user ***
      if (!foundUser) {
        updateDoc(bookDocRef, {
          users: arrayUnion({ user_id: currentUser.uid, userRate: bookRating }),
          totalVoutes: data.totalVoutes + 1,
          ratingSum: data.ratingSum + bookRating,
          rating: (data.ratingSum + bookRating) / (data.totalVoutes + 1),
        });
      }

      // *** book doesn't exist ***
    } else {
      try {
        // create reference to db-collection 'rating'
        const bookCollectionRef = collection(db, `rating`);
        await addDoc(bookCollectionRef, {
          image,
          rating: bookRating,
          ratingSum: bookRating,
          title,
          bookId,
          totalVoutes: 1,
          users: [
            {
              user_id: currentUser.uid,
              userRate: bookRating,
            },
          ],
        });
      } catch (e) {
        console.warn(e.message);
      }
    }
  };

  const mutate = async ({ bookId, bookRating, comment, image, title }) => {
    // reset internal state
    setError(null);
    setIsError(null);
    setIsSuccess(null);
    setIsMutating(true);

    setRating(bookRating, bookId, image, title);

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
