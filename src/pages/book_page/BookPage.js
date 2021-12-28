import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBook } from "../../services/GoogleBooksAPI";
import PageLayout from "../../components/layout/PageLayout";
import BookDescription from "./BookDescription";
import BookExtraDescription from "./BookExtraDescription";
import CreateComment from "../../components/create_comment/CreateComment";
import Comment from "../../components/posted_comment/Comment";
import CustomErrorMessage from "../../components/error_msg/CustomErrorMessage";
import Loader from "../../components/loader/Loader";
import { useAuthContext } from "../../contexts/AuthContext";
import LoginWarning from './login_warning/LoginWarning'

const BookPage = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(["bookPage", id], () =>
    getBook(id)
  );
  const { currentUser } = useAuthContext();

  return (
    <>
      <>
        <PageLayout>
          {isError && <CustomErrorMessage error={error} />}
          {isLoading && <Loader />}
          {data?.data.volumeInfo && (
            <>
              <BookDescription
                bookInfo={data?.data.volumeInfo}
                id={data?.data.id}
              />
              <BookExtraDescription bookInfo={data?.data.volumeInfo} />

              {currentUser ? (
                <CreateComment />
              ) : (
                <LoginWarning
                  message={"Please log in to write a comment"}
                />
              )}
              <Comment />
            </>
          )}
        </PageLayout>
      </>
    </>
  );
};

export default BookPage;
