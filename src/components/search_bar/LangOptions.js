import React from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styles from "./SearchBar.module.css";

const LangOptions = ({ radioValue, setRadioValue }) => {
  console.log(radioValue === 'en');
  return (
    <Col sm={3} className={styles.radioBtn}>
      {["en", "sv"].map((lang, index) => (
        <div className={styles.radioOption} key={uuidv4()}>
          <label className={styles.container} htmlFor={lang}>
            {lang}
            <input
              type="radio"
              name="language"
              id={index}
              value={lang}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      ))}
    </Col>
  );
};

export default LangOptions;
