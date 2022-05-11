import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const useGetCurrentBook = (bookId) => {
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
    });
    return unsubscribe;
  };

  useEffect(() => {
    getCurrentBook();
  }, [bookId]);

  return {
    data,
  };
};

export default useGetCurrentBook;
