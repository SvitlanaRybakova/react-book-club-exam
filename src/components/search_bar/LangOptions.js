import React from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useNavbarContext } from "../../contexts/NavbarContext";
import styles from "./SearchBar.module.css";

const LangOptions = () => {
  const {query, setQuery} = useNavbarContext()
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
            onChange={(e) =>
              setQuery((prevState) => ({
                ...prevState,
                lang: e.target.value,
              }))
            }
          />
          <span className={styles.checkmark}></span>
        </label>
        <label className={styles.container}>
          sv
          <input
            type="radio"
            name="language"
            // id={index}
            value="sv"
            checked={query.lang === 'sv'? true: false}
            onChange={(e) =>
              setQuery((prevState) => ({
                ...prevState,
                lang: e.target.value,
              }))
            }
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>
    </Col>
  );
};

export default LangOptions;
