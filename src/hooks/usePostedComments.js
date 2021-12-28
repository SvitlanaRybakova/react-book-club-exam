import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, orderBy, limit, where } from "firebase/firestore";
import { db } from "../firebase";

const usePostedComments = (bookId) => {
  const queryRef = query(
    collection(db, "comments"),
    where("bookId", "==", bookId),
    orderBy("created", "desc"),
    limit(10)
  );
  

  const commentQuery = useFirestoreQueryData(
    ["comments"],
    queryRef,
    {
      idField: "_id",
      subscribe: true,
    },
    {
      refetchOnMount: "always",
    }
  );
  return commentQuery;
};

export default usePostedComments;
