import React, {useEffect} from "react";
import { Col } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { useSearchContext } from "../../contexts/SearchContext";

const PopularOption = () => {
  const { togglePopular, getSearchQuery } = useSearchContext();

  const handleChange = (e) => {
   const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    togglePopular(value);
  };

  useEffect(() => {
    renderCheckbox()
  }, [getSearchQuery().popular]);


  const renderCheckbox = () => {
    return(
          <Col sm={3} className="py-3">
            <label className={styles.containerCheckbox}>
              <input
                type="checkbox"
                name="popular"
                checked={getSearchQuery().popular==="true"}
                onChange={handleChange}
              />
              Popular
              <span className={styles.checkmarkCheckbox}></span>
            </label>
          </Col>
    )
  }
  return renderCheckbox()
};

export default PopularOption;
