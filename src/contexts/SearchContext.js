import React, { createContext, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const searchTerm = searchParams.get("text") || "";

  const [query, setQuery] = useState({
    searchText: "",
    lang: "en",
    genre: null,
    popular: false,
  });

  const handleSearch = (event) => {
    // set search text to url
    const text = event.target.value;

    if (text) {
      setSearchParams({ text: text });
    } else {
      setSearchParams({});
    }
    

      // update query for sending to API
      const preparedQuery = searchTerm
        .trim()
        .toLocaleLowerCase()
        .split(" ")
        .join("+");
    setQuery((prevState) => ({
      ...prevState,
      searchText: preparedQuery,
    }));
  };


  const values = {
    query,
    setQuery,
    handleSearch,
    setSearchParams,
    searchTerm,
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
