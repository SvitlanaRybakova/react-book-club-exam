import React from "react";
import { Row } from "react-bootstrap";
import GenreOptions from "./GenreOptions";
import SearchInput from "./SearchInput";
import LangvOptions from "./LangOptions";
import PopularOption from "./PopularOption";

const SearchBar = () => {
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
