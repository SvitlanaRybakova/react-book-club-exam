import { useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import { suggestions } from "../../services/const";
import cross from '../../assets/images/cross.png'

const SuggestionsListComponent = ({
  onClick,
  filteredSuggestions,
  activeSuggestionIndex,
}) => {
  return filteredSuggestions.length ? (
    <ul className={styles.suggestions}>
      {filteredSuggestions.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = "suggestion-active";
        }
        return (
          <li className={styles.className} key={suggestion} onClick={onClick}>
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

const GenreOptions = ({ input, setInput }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // todo write the input value


  console.log("Input", input);
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

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };
  const onKeyDown = (e) => {
    console.log("press key down", e);
  };
  return (
    <Col sm={6}>
      <div className={styles.optionsWrapper}>
        <input
          type="text"
          placeholder="Genre"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
          className={styles.autoCompleteInput}
        />
        <img
          src={cross}
          alt="clear input"
          className={styles.cross}
          onClick={() => setInput("")}
        />
      </div>

      {showSuggestions && input && (
        <SuggestionsListComponent
          onClick={onClick}
          suggestion={suggestions}
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
        />
      )}
    </Col>
  );
};
export default GenreOptions;