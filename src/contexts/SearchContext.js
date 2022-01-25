import React, { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const searchTerm = searchParams.get("searchText") || "";

    const getSearchQuery = () => {
      return {
        searchText: searchParams.get("searchText") || "",
        lang: searchParams.get("lang") || "en",
        popular: searchParams.get("popular") || false,
        genre: searchParams.get("genre") || "",
      };
    };

  const setSearchText = (value) => {
    const searchParamsCopy = { ...searchParams };
    searchParamsCopy.searchText = value;
    setSearchParams(searchParamsCopy);
  };

  const setLangOption = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.lang = value;
    setSearchParams(searchQuery);
  };

  const setGenre = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.genre = value;
    setSearchParams(searchQuery);
  };

  const togglePopular = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.popular = value;
    setSearchParams(searchQuery);
  };

  const values = {
    setSearchParams,
    searchTerm,
    setSearchText,
    searchParams,
    setLangOption,
    setGenre,
    togglePopular,
    getSearchQuery,
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
