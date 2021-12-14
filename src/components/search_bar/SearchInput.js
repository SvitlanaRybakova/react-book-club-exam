import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";
import cross from "../../assets/images/cross.png";
import {useNavbarContext} from '../../contexts/NavbarContext'

const SearchInput = ({ }) => {
  const [input, setInput] = useState("");

  const {setQuery} = useNavbarContext()
  const handleClick = () => {
    setQuery((prevState) => ({
      ...prevState,
      searchText: input,
    }));
  };
  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchForm}>
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
      <button className={styles.searchButton} onClick={handleClick}>
        <BsSearch color={"#FA8C16"} />
      </button>
    </div>
  );
};

export default SearchInput;
