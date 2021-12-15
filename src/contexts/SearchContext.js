import React, { createContext, useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const searchTerm = searchParams.get("searchText") || "";

  const [query, setQuery] = useState({
    searchText: "",
    lang: "en",
    genre: null,
    popular: false,
  });

  // changes the browser URL every time when the query has been changed
  useEffect(() => {
    handleUrl();
  }, [query]);

  const handleUrl = () => {
    const params = {};
    if (query.searchText.length) {
      params.searchText = query.searchText;
    }
    if (query.lang.length) {
      params.lang = query.lang;
    }
    if (query.genre) {
      params.genre = query.genre;
    }

    if (query.popular) {
      params.popular = query.popular;
    }
    setSearchParams(params);
  };

  const values = {
    query,
    setQuery,
    setSearchParams,
    searchTerm,
    handleUrl,
    searchParams,
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
