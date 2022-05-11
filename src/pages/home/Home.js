import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchContext } from "../../contexts/SearchContext";
import useGetData from "../../hooks/useGetData";
import BooksList from "../../components/books_grid/BooksGrid";
import SearchBar from "../../components/search_bar/SearchBar";
import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_msg/CustomErrorMessage";
import Loader from "../../components/loader/Loader";
import { getBooks } from "../../services/GoogleBooksAPI";

const Home = () => {
  const dataQuery = useGetData({
    getPopularBook: true,
    coll: "rating",
  });

  const { getSearchQuery } = useSearchContext();
  const searchText = getSearchQuery().searchText;
  const genre = getSearchQuery().genre;
  const lang = getSearchQuery().lang;
  const isPopular = getSearchQuery().popular;

  const { data, error, isError, isLoading } = useQuery(
    ["home", searchText, genre, lang],
    () => getBooks(getSearchQuery)
  );

  useEffect(() => {
    renderBooks();
  }, [isPopular]);


  const renderBooks = () => {
    if (getSearchQuery().popular === "true") {
      return <BooksList data={dataQuery.data} />;
    } else {
      if (data?.totalItems > 0) {
        return <BooksList data={data.items} />;
      } 
     if (data?.totalItems ===  0) {
       return (
         <h3 className="text-center my-5 font-italic text-secondary">
           Sorry, no result
         </h3>
       );
     }
    }
  };

  return (
    <PageLayout>
      <SearchBar />
      {isError && <CustomErrorMessage error={error} />}
      {isLoading && <Loader />}
      {renderBooks()}
    </PageLayout>
  );
};

export default Home;
