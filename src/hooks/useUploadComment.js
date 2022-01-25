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
  const {
    firebaseBookId,
    firebaseUserId,
    firebaseUserRate,
    firebaseBookUsers,
    firebaseTotalVoutes,
    firebaseRatingSum,
  } = useGetCurrentBook(bookId);
 
  const { currentUser } = useAuthContext();

  

  const setRating = async (bookRating, bookId, image, title) => {
    // ***  book exists in db ***
    if (firebaseBookId) {
      let savedPrevRating;
      // checks if there is already a rating from this current user (iterates the copy of db array for changing it, cose can't update array of onjects directly in firebase)
      firebaseBookUsers.forEach((user) => {
        if (user.user_id === currentUser.uid) {
          // checks the users previous rating
          if (firebaseUserRate !== bookRating) {
            // saves the previous rating so that it can be taken away before adding a new one
            savedPrevRating = firebaseUserRate;
            // changes the userRate property
            user.userRate = bookRating;
          }
        }
      });

      // updates users array and others fields in firebase
      const bookDocRef = doc(db, "rating", firebaseBookId);

      updateDoc(bookDocRef, {
        users: [...firebaseBookUsers],
        ratingSum: firebaseRatingSum - savedPrevRating + bookRating,
        rating:
          (firebaseRatingSum - savedPrevRating + bookRating) /
          firebaseTotalVoutes,
      });

      // ***  book exists, but no review of current user ***
      if (firebaseUserId !== currentUser.uid) {
        const bookDocRef = doc(db, "rating", firebaseBookId);
        updateDoc(bookDocRef, {
          users: arrayUnion({ user_id: currentUser.uid, userRate: bookRating }),
          totalVoutes: firebaseTotalVoutes + 1,
          ratingSum: firebaseRatingSum + bookRating,
          rating:
            (firebaseRatingSum + bookRating) / (firebaseTotalVoutes + 1),
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
        console.log(e.message);
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
