import React, { useRef, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./Profile.module.css";

const Edit = () => {
  const displayNameRef = useRef();
  const linkToAvatarRef = useRef();

  const { currentUser, setDisplayName, setLinkUrl } = useAuthContext();

  const [error, setError] = useState(null);
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

    if (
      displayNameRef.current.value.trim() ||
      linkToAvatarRef.current.value.trim()
    ) {
      try {
       
        await setDisplayName(displayNameRef.current.value);
        await setLinkUrl(linkToAvatarRef.current.value);

        setMessage("Profile successfully updated");
       
      } catch (e) {
        // setError("Error updating profile. Try logging out and in again.");
        setError(e.message);
   
      }
    }else{ setError("Please, enter at the one field at least");}

  };
  return (
    <Row>
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
          {message && <span className="text-success">{message}</span>}
        </div>
        <Button className={styles.saveBtn} type="submit">
          SAVE
        </Button>
      </Form>
    </Row>
  );
};

export default Edit;
