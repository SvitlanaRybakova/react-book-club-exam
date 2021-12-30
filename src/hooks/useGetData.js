import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";

const useGetData = (params) => {
  const { currentUser } = useAuthContext();

  let queryRef;
  if (params.getBookList) {
    queryRef = query(
      collection(db, params.coll),
      where("user", "==", currentUser.uid),
      orderBy("created")
    );
  }

  if (params.getPostedComments) {
    queryRef = query(
      collection(db, params.coll),
      where("bookId", "==", params.bookId),
      orderBy("created", "desc"),
      limit(10)
    );
  }

  if (params.getPopularBook) {
    queryRef = query(
      collection(db, params.coll),
      orderBy("rating", "desc"),
      limit(10)
    );
  }

  const dataQuery = useFirestoreQueryData(
    [`${params.coll}`],
    queryRef,
    {
      idField: "_id",
      subscribe: true,
    },
    {
      refetchOnMount: "always",
    }
  );
  return dataQuery;
};

export default useGetData;
