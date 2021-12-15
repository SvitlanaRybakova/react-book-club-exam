import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import styles from "./Profile.module.css";

const Edit = () => {
  return (
    <Row>
      <h2 className={styles.profileTitle}>EDIT</h2>
      <Form>
        <Form.Control
          type="text"
          placeholder="Username"
          className={styles.profileInput}
        />
        <Form.Control
          type="text"
          placeholder="URL link to avatar"
          className={styles.profileInput}
        />
      </Form>

      <Button className={styles.saveBtn}> SAVE </Button>
    </Row>
  );
};

export default Edit;
