import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";
import cross from "../../assets/images/cross.png";
import { useSearchContext } from "../../contexts/SearchContext";

const SearchInput = () => {
  const [input, setInput] = useState("");

  const { setQuery } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setQuery((prevState) => ({
      ...prevState,
      searchText: input,
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
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <img
          src={cross}
          alt="clear input"
          className={styles.cross}
          onClick={() => setInput("")}
        />
      </form>
      <button
        type="submit"
        className={styles.searchButton}
      >
        <BsSearch color={"#FA8C16"} />
      </button>
    </div>
  );
};

export default SearchInput;
