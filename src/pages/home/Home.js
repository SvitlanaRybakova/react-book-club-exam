import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchContext } from "../../contexts/SearchContext";
import BooksList from "../../components/books_list/BooksList";
import SearchBar from "../../components/search_bar/SearchBar";
import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_msg/CustomErrorMessage";
import Loader from "../../components/loader/Loader";
import { getBooks } from "../../services/GoogleBooksAPI";

const Home = () => {
  const { query, searchTerm, setQuery } = useSearchContext();
  const { data, error, isError, isLoading } = useQuery(["home", query], () =>
    getBooks(query)
  );

  useEffect(() => {
    const preparedQuery = searchTerm
      .trim()
      .toLocaleLowerCase()
      .split(" ")
      .join("+");
    setQuery((prevState) => ({
      ...prevState,
      searchText: preparedQuery,
    }));
  }, [searchTerm]);

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
