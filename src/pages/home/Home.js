import React, { useState } from "react";
import { useQuery } from "react-query";

import BooksList from "../../components/books_list/BooksList";
import SearchBar from "../../components/search_bar/SearchBar";
import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_msg/CustomErrorMessage";
import Loader from '../../components/loader/Loader'
import { getBooks } from "../../services/GoogleBooksAPI";
import { useSearchContext } from "../../contexts/SearchContext";

const Home = () => {
  const { query } = useSearchContext();

  const { data, error, isError, isLoading } = useQuery(["home", query], () =>
    getBooks(query)
  );
  console.log(data);
  // console.log("query", query);
  return (
    <PageLayout>
      <SearchBar />
      {isError && <CustomErrorMessage error={error} />}
      {isLoading && <Loader />}
      {data?.totalItems > 0 && <BooksList data={data} />}
      {data?.totalItems === 0 && (
        <h3 className="text-center my-5 font-italic text-secondary">
          Sorry, no result
        </h3>
      )}
    </PageLayout>
  );
};

export default Home;
