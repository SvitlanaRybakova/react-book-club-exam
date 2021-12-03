import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getBook } from "../../services/GoogleBooksAPI";
import PageLayout from "../../components/layout/PageLayout";
import BookDescription from "./BookDescription";
import BookExtraDescription from './BookExtraDescription'
import styles from "./BookPage.module.css";

const BookPage = () => {
  const [bookInfo, setBookInfo] = useState();
  const [isFullDesc, setFullDesc] = useState(false);
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(["bookPage", id], () =>
    getBook(id)
  );

  useEffect(() => {
    setBookInfo(data?.data.volumeInfo);
  }, [data]);

  return (
    <>
    {bookInfo && (
      <>
      <PageLayout>
        <BookDescription
          bookInfo={bookInfo}
          isFullDesc={isFullDesc}
          setFullDesc={setFullDesc}
        />
      </PageLayout>
     <BookExtraDescription bookInfo={bookInfo}/>
     </>
    )
    }
      
    </>
  );
};

export default BookPage;
