import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const INIT_QUERY = {
  initSearchText: "",
  initLang: "en",
  initPopular: false,
  initGenre: "",
};
const SearchContextProvider = ({ children }) => {
  const { initSearchText, initLang, initPopular, initGenre } = INIT_QUERY;
  let [searchParams, setSearchParams] = useSearchParams({});
  const searchTerm = searchParams.get("searchText") || "";

  const getSearchQuery = () => {
    return {
      searchText: searchParams.get("searchText") || initSearchText,
      lang: searchParams.get("lang") || initLang,
      popular: searchParams.get("popular") || initPopular,
      genre: searchParams.get("genre") || initGenre,
    };
  };

  const setSearchText = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.searchText = value;
    searchQuery.popular = initPopular;
    searchQuery.genre = initGenre;
    setSearchParams(searchQuery);
  };

  const setLangOption = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.lang = value;
    setSearchParams(searchQuery);
  };

  const setGenre = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.searchText = initSearchText;
    searchQuery.lang = initLang;
    searchQuery.popular = initPopular;
    searchQuery.genre = value;
    setSearchParams(searchQuery);
  };

  const togglePopular = (value) => {
    const searchQuery = getSearchQuery();
    searchQuery.searchText = initSearchText;
    searchQuery.lang = initLang;
    searchQuery.popular = value;
    searchQuery.genre = initGenre;
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
