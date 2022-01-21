import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchContext } from "../../contexts/SearchContext";
import useGetData from '../../hooks/useGetData'
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

  const { query, searchTerm, setQuery, searchParams } = useSearchContext();
  const { data, error, isError, isLoading } = useQuery(
    ["home", query],
    () => getBooks(query)
  );
  

  
    // useEffect(() => {
    //   const preparedQuery = searchTerm
    //     .trim()
    //     .toLocaleLowerCase()
    //     .split(" ")
    //     .join("+");
    //   setQuery((prevState) => ({
    //     ...prevState,
    //     searchText: preparedQuery,
    //   }));
    // }, [searchTerm]);
console.log('data', data)
console.log("query.popular", query.popular);
    return (
      <PageLayout>
        <SearchBar />
        {isError && <CustomErrorMessage error={error} />}
        {isLoading && <Loader />}
        {query.popular && <BooksList data={dataQuery.data} />}
        {(data?.totalItems > 0 && !query.popular) && (
          <BooksList data={data.items} />
        )}
        {data?.totalItems === 0 && (
          <h3 className="text-center my-5 font-italic text-secondary">
            Sorry, no result
          </h3>
        )}
      </PageLayout>
    );
};

export default Home;
