import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./Authorization.module.css";

const Authorization = () => {
  const { login, signup, resetPassword } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // hide error
  setTimeout(() => {
    setError(null);
  }, 5000);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    setError(null);

    // try to login the user with the specified credentials
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    // try to sign up the user with the specified credentials
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <h2 className={styles.authTitle}> Authorization</h2>
      <Form>
        <Form.Control
          type="email"
          placeholder="Email"
          className={styles.authInput}
          ref={emailRef}
          required
        />
        <Form.Control
          type="password"
          placeholder="Password"
          className={styles.authInput}
          ref={passwordRef}
          required
        />
        <div className={styles.error}>{error && <span>{error}</span>}</div>

        <div className={styles.forgotPassword}>
          <Link to="/reset-password">Forgot Password?</Link>
        </div>
        <Button
          disabled={loading}
          onClick={handleLoginClick}
          className={styles.loginBtn}
        >
          LOG IN
        </Button>
        <div onClick={handleSignUp} role="button" className={styles.signupBtn}>
          {" "}
          SIGN UP
        </div>
      </Form>
    </div>
  );
};

export default Authorization;
