import React, { useState } from "react";
import { Row, Col, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import GenreOptions from "./GenreOptions";
import SearchInput from "./SearchInput";
import LangvOptions from "./LangOptions";
import PopularOption from "./PopularOption";

import styles from "./SearchBar.module.css";

const SearchBar = ({}) => {
  
  return (
    <>
      <SearchInput  />

      <form>
        <Row className="align-items-baseline">
          <LangvOptions  />

          <GenreOptions  />

          <PopularOption  />
        </Row>
      </form>
    </>
  );
};

export default SearchBar;
