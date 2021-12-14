import React, { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState({
    searchText: "",
    lang: "en",
    genre: null,
    popular: false,
  });

  const values = {
    query,
    setQuery,
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
