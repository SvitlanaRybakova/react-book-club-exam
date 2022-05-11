import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { suggestions } from "../../services/const";
import cross from "../../assets/images/cross.png";
import { useSearchContext } from "../../contexts/SearchContext";

const SuggestionsListComponent = ({
  onClick,
  filteredSuggestions,
  activeSuggestionIndex,
}) => {
  return filteredSuggestions.length ? (
    <ul className={styles.suggestions}>
      {filteredSuggestions.map((suggestion) => {
        return (
          <li key={suggestion} onClick={onClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={styles.nosuggestions}>
      <em>No suggestions, you're on your own!</em>
    </div>
  );
};

const GenreOptions = () => {
  const { setGenre, getSearchQuery } = useSearchContext();
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const isPopular = getSearchQuery().popular;
  const isSearchText = getSearchQuery().searchText;

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handelClick = (e) => {
    e.preventDefault();
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setGenre(e.target.innerText);
  };

  const clearField = () => {
    setInput("");
    setGenre("");
  };

  const renderInput = () => {
    return (
      <Col sm={6}>
        <div className={styles.optionsWrapper}>
          <input
            type="text"
            placeholder="Genre"
            onChange={onChange}
            value={getSearchQuery().genre ? getSearchQuery().genre : input}
            className={styles.autoCompleteInput}
          />
          <img
            role="button"
            src={cross}
            alt="clear input"
            className={styles.cross}
            onClick={clearField}
          />
        </div>

        {showSuggestions && input && (
          <SuggestionsListComponent
            onClick={handelClick}
            suggestion={suggestions}
            filteredSuggestions={filteredSuggestions}
            activeSuggestionIndex={activeSuggestionIndex}
          />
        )}
      </Col>
    );
  };

  useEffect(() => {
    renderInput();
    setInput("");
  }, [isPopular, isSearchText]);

  return renderInput();
};
export default GenreOptions;
