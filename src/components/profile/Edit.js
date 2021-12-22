import React, { useRef, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import styles from "./Profile.module.css";
import { useAuthContext } from "../../contexts/AuthContext";
import Loader from '../loader/Loader'

const Edit = () => {
  const displayNameRef = useRef();
  const linkToAvatarRef = useRef();

  const { currentUser, setDisplayName, setLinkUrl } = useAuthContext();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  console.log(currentUser);

  // hide error
  setTimeout(() => {
    setError(null);
    setMessage(null);
  }, 5000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      setLoading(true);
      if (displayNameRef.current.value.trim()) {
        await setDisplayName(
          displayNameRef.current.value);
      }
      if (linkToAvatarRef.current.value.trim()) {
        await setLinkUrl(linkToAvatarRef.current.value);
      }
      setMessage("Profile successfully updated");
      setLoading(false);
    } catch (e) {
      setError("Error updating profile. Try logging out and in again.");
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <Row>
      <h2 className={styles.profileTitle}>EDIT</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder={currentUser.displayName ? currentUser.displayName :  "Username"}
          className={styles.profileInput}
          ref={displayNameRef}
        />
        <Form.Control
          type="text"
          placeholder={currentUser.photoURL ? currentUser.photoURL : "URL link to avatar"}
          className={styles.profileInput}
          ref={linkToAvatarRef}
        />

        <div className={styles.message}>
          {error && <span className="text-danger">{error}</span>}
          {message && <span className="text-success">{message}</span>}
          {loading && <Loader />}
        </div>
        <Button className={styles.saveBtn} type="submit">
          {" "}
          SAVE{" "}
        </Button>
      </Form>
    </Row>
  );
};

export default Edit;
