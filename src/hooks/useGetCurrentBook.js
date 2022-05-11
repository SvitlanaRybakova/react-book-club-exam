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
  const [firebaseRating, setFirebaseRating] = useState(null);
  const [data, setData] = useState(null);

  const getCurrentBook = async () => {
    const ref = collection(db, "rating");

    const q = query(ref, where("bookId", "==", bookId));
  const unsubscribe = onSnapshot(q, (snapshot) => {
       const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      data && setData(data[0]);
      
      //  got an array because of the collection - method (firebase API). Requires iteration to get the values of interest
      if (data) {
        data.forEach((book) => setFirebaseBookId(book.id));
        data.forEach((book) => {
          // setFirebaseBookUsers([...book.users]);
          setFirebaseTotalVoutes(book.totalVoutes);
          setFirebaseRatingSum(book.ratingSum);
          setFirebaseRating(book.rating);
          book.users.forEach((user) => {
            setFirebaseUserId(user.user_id);
            setFirebaseUserRate(user.userRate);
          });
        });
      }
    });
    return unsubscribe;
  };

  useEffect(() => {
    getCurrentBook();
  }, [bookId]);

  return {
    firebaseBookId,
    firebaseUserId,
    firebaseUserRate,
    firebaseBookUsers,
    firebaseTotalVoutes,
    firebaseRatingSum,
    firebaseRating,
    data,
    getCurrentBook,
  };
};

export default useGetCurrentBook;
