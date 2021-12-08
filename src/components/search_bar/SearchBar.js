import React, { useState } from "react";
import { Row, Col, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import GenreOptions from "./GenreOptions";
import SearchInput from "./SearchInput";
import LangvOptions from "./LangOptions";
import PopularOption from "./PopularOption";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  // for search bar input title+author
  const [value, setValue] = useState("");
  // radio btn = language
  const [radioValue, setRadioValue] = useState("en");
// genre options
  const [input, setInput] = useState("");
// popular option
  const [checked, setChecked] = useState(false);
  console.log("language", radioValue);
  return (
    <>
      <SearchInput />

      <form>
        <Row className="align-items-baseline">
          <LangvOptions setRadioValue={setRadioValue} />

          <GenreOptions input={input} setInput={setInput} />

          <PopularOption checked={checked} setChecked={setChecked} />
        </Row>
      </form>
    </>
  );
};

export default SearchBar;
