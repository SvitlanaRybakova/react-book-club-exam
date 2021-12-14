import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import cross from "../../assets/images/cross.png";
import { useSearchContext } from "../../contexts/SearchContext";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const searchTerm = searchParams.get("text") || "";

  const [input, setInput] = useState("");

  const { setQuery } = useSearchContext();

  const handleSearch = (event) => {
    const text = event.target.value;

    if (text) {
      setSearchParams({ text: event.target.value });
    } else {
      setSearchParams({});
    }

    //  setInput(event.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchForm} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search.."
          // value={input}
          value={searchTerm}
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <img
          src={cross}
          alt="clear input"
          className={styles.cross}
          onClick={() => setSearchParams({ text: "" })}
        />
      </form>
    </div>
  );
};

export default SearchInput;
