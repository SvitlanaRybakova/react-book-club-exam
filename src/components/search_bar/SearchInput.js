import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import cross from "../../assets/images/cross.png";
import { useSearchContext } from "../../contexts/SearchContext";


const SearchInput = () => {
  

  

  const {
    searchTerm,
    handleSearch,
    setSearchParams,
  } = useSearchContext();

  

  
  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search.."
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
