import React, { useRef, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

import { useAuthContext } from "../../contexts/AuthContext";
import Loader from "../../components/loader/Loader";
import styles from "./Profile.module.css";

const Edit = ({ navigateToList }) => {
  const displayNameRef = useRef();
  const linkToAvatarRef = useRef();

  const { setDisplayName, setLinkUrl } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // hide error
  setTimeout(() => {
    setError(null);
  }, 5000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      displayNameRef.current.value.trim() ||
      linkToAvatarRef.current.value.trim()
    ) {
      try {
        setLoading(true);
        displayNameRef.current.value.trim() &&
          (await setDisplayName(displayNameRef.current.value));
        linkToAvatarRef.current.value.trim() &&
          (await setLinkUrl(linkToAvatarRef.current.value));

        navigateToList((prevState) => !prevState);
      } catch (e) {
        // setError("Error updating profile. Try logging out and in again.");
        setError(e.message);
        setLoading(false);
      }
    } else {
      setError("Please, enter at the one field at least");
    }
  };
  return (
    <Row className="position-relative">
      {loading && (
        <div className="overlay">
          <Loader
            loaderContainer={"loaderContainer"}
            loaderWrapper={"loaderWrapper"}
          />
        </div>
      )}
      <h2 className={styles.profileTitle}>EDIT</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Username"
          className={styles.profileInput}
          ref={displayNameRef}
        />
        <Form.Control
          type="text"
          placeholder="URL link to avatar"
          className={styles.profileInput}
          ref={linkToAvatarRef}
        />

        <div className={styles.message}>
          {error && <span className="text-danger">{error}</span>}
        </div>
        <Button className={styles.saveBtn} type="submit">
          SAVE
        </Button>
      </Form>
    </Row>
  );
};

export default Edit;
