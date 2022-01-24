import React from "react";
import { Col } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { useSearchContext } from "../../contexts/SearchContext";

const PopularOption = () => {
   const { togglePopular, getSearchQuery } = useSearchContext();

  const handleChange = () => {
    togglePopular()
  };

  return (
    <Col sm={3} className="py-3">
      <label className={styles.containerCheckbox}>
        <input
          type="checkbox"
          // checked={getSearchQuery().popular}
          onChange={handleChange}
        />
        Popular
        <span className={styles.checkmarkCheckbox}></span>
      </label>
    </Col>
  );
};

export default PopularOption;
