import React from "react";
import {Form, Control, Button} from 'react-bootstrap'
import styles from './Authorization.module.css'
const Authorization = () => {
  return (
    <div className={styles.authWrapper}>
      <h2 className={styles.authTitle}> Authorization</h2>
      <Form>
        <Form.Control
          type="email"
          placeholder="Email"
          className={styles.authInput}
        />
        <Form.Control
          type="password"
          placeholder="Password"
          className={styles.authInput}
        />
      </Form>

      <p className={styles.forgotPassword}>Forgot your password ?</p>
      <Button className={styles.loginBtn}> LOG IN </Button>
      <Button className={styles.signupBtn}> SIGN UP</Button>
    </div>
  );
};

export default Authorization;
