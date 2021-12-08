import React from 'react'
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";

const SearchInput = () => {
  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search.."
        />
      </form>
      <button className={styles.searchButton}>
        <BsSearch color={"#FA8C16"} />
      </button>
    </div>
  );
}

export default SearchInput
