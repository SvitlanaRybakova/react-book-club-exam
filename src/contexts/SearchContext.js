import React, { createContext, useState, useContext, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const searchTerm = searchParams.get("searchText") || "";

  const location = useLocation();

  // const [query, setQuery] = useState({
  //   searchText: "",
  //   lang: "en",
  //   genre: null,
  //   popular: false,
  // });

  // triggers state when URL changes by clicking browser back btn
  // (date copy from URL to state)
  // useEffect(() => {
  //   window.onpopstate = (e) => {
  //     const url = window.location.href;
  //     const queryString = url
  //       ? url.split("?")[1]
  //       : window.location.search.slice(1);
  //     const obj = Object.fromEntries(new URLSearchParams(queryString));
  //     console.log(obj);

  //     const objCopy = { ...query };
  //     if (obj.searchText.length > 0) {
  //       objCopy.searchText = obj.searchText;
  //     }
  //     console.log(objCopy);
  //     setQuery(objCopy);
  //   };
  // }, []);

  const setSearchText = (value) => {
    const searchParamsCopy = { ...searchParams };
    searchParamsCopy.searchText = value;
    setSearchParams(searchParamsCopy);
    console.log(
      "searchParams",
      searchParams.get("lang"),
      searchParams.get("searchText")
    );
  };

  const getSearchQuery = () => {
    return {
      searchText: searchParams.get("searchText") || "",
      lang: searchParams.get("lang") || "en",
      popular: searchParams.get("popular") || false,
      genre: searchParams.get("genre") || null,
    };
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
