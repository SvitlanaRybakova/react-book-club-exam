import React from "react";
import { Col } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { useSearchContext } from "../../contexts/SearchContext";

const PopularOption = () => {
   const { query, setQuery } = useSearchContext();

  const handleChange = () => {
    setQuery((prevState) => ({
      ...prevState,
      popular: !prevState.popular,
    }));
  };
  
  return (
    <Col sm={3} className="py-3">
      <label className={styles.containerCheckbox}>
        <input
          type="checkbox"
          // checked={checked}
          onChange={handleChange}
        />
        Popular
        <span className={styles.checkmarkCheckbox}></span>
      </label>
    </Col>
  );
};

export default PopularOption;
