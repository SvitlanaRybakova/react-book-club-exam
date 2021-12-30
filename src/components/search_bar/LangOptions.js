import React from "react";
import { Col } from "react-bootstrap";
import { useSearchContext } from "../../contexts/SearchContext";
import styles from "./SearchBar.module.css";

const LangOptions = () => {
  const { query, setQuery } = useSearchContext();

  const handleClick = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      lang: e.target.value,
      popular: false,
    }));
  };
  return (
    <Col sm={3} className={styles.radioBtn}>
      <div className={styles.radioOption}>
        <label className={styles.container}>
          en
          <input
            type="radio"
            name="language"
            checked={query.lang === "en" ? true : false}
            value="en"
            onChange={(e) => handleClick(e)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <label className={styles.container}>
          sv
          <input
            type="radio"
            name="language"
            value="sv"
            checked={query.lang === "sv" ? true : false}
            onChange={(e) => handleClick(e)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>
    </Col>
  );
};

export default LangOptions;
