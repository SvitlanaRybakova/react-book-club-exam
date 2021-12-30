import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const useGetCurrentBook = (bookId) => {
  const [firebaseBookId, setFirebaseBookId] = useState(null);
  const [firebaseUserId, setFirebaseUserId] = useState(null);
  const [firebaseUserRate, setFirebaseUserRate] = useState(null);
  const [firebaseBookUsers, setFirebaseBookUsers] = useState([]);
  const [firebaseTotalVoutes, setFirebaseTotalVoutes] = useState(null);
  const [firebaseRatingSum, setFirebaseRatingSum] = useState(null);

  useEffect(() => {
    const ref = collection(db, "rating");

    const q = query(ref, where("bookId", "==", bookId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      //  got an array because of the collection - method (firebase API). Requires iteration to get the values of interest
      if (data) {
        data.map((book) => setFirebaseBookId(book.id));
        data.map((book) => {
          setFirebaseBookUsers([...book.users]);
          setFirebaseTotalVoutes(book.totalVoutes);
          setFirebaseRatingSum(book.ratingSum);
          book.users.map((user) => {
            setFirebaseUserId(user.user_id);
            setFirebaseUserRate(user.userRate);
          });
        });
      }
    });

    return unsubscribe;
  }, [bookId]);

  return {
    firebaseBookId,
    firebaseUserId,
    firebaseUserRate,
    firebaseBookUsers,
    firebaseTotalVoutes,
    firebaseRatingSum,
  };
};

export default useGetCurrentBook;