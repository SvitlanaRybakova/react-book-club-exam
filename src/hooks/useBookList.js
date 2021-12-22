import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";

const useBookList = () => {
  const { currentUser } = useAuthContext();
  
    const queryRef = query(
      collection(db, "bookList"),
      where("user", "==", currentUser.uid),
      orderBy("created")
    );
 

  const booksQuery = useFirestoreQueryData(
    ["bookList"],
    queryRef,
    {
      idField: "_id",
      subscribe: true,
    },
    {
      refetchOnMount: "always",
    }
  );
  return booksQuery;
};

export default useBookList;
