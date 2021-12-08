import React from 'react'
import {Col} from 'react-bootstrap'
import styles from "./SearchBar.module.css";

const LangOptions = ({ setRadioValue }) => {
  return (
    <Col sm={3} className={styles.radioBtn}>
      {["en", "sv"].map((lang, index) => (
        <div className={styles.radioOption}>
          <label className={styles.container} htmlFor={lang}>
            {lang}
            <input
              key={index}
              type="radio"
              name="language"
              id={lang}
              value={lang}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <span class={styles.checkmark}></span>
          </label>
        </div>
      ))}
    </Col>
  );
};

export default LangOptions
