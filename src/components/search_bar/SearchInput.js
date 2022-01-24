import React from "react";
import styles from "./SearchBar.module.css";
import cross from "../../assets/images/cross.png";
import { useSearchContext } from "../../contexts/SearchContext";

const SearchInput = () => {
  const {
    searchTerm,
    setSearchParams,
    setSearchText,
  } = useSearchContext();

  const handleClick = (e) => {
     setSearchText(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => handleClick(e)}
        />
        <img
          src={cross}
          alt="clear input"
          className={styles.cross}
          onClick={(e) => {
            setSearchParams({ text: "" });
            handleClick(e);
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
