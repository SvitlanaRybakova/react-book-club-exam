import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import Loader from "../loader/Loader"
import styles from "./Authorization.module.css";

const Authorization = () => {
  const { login, signup } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // hide error
  setTimeout(() => {
    setError(null);
  }, 5000);

  const handleClick = async (e, action) => {
    e.preventDefault();
    setError(null);

    if (emailRef.current.value.trim() && passwordRef.current.value) {
      // try to login the user with the specified credentials
      try {
        setLoading(true);
        if (action === "login")
          await login(emailRef.current.value, passwordRef.current.value);

        if (action === "signup")
          await signup(emailRef.current.value, passwordRef.current.value);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    } else {
      setError("Please, enter all fields");
    }
  };

  return (
    <div className={styles.authWrapper}>
      {loading && (
        <div className="overlay">
          <Loader
            loaderContainer={"loaderContainer"}
            loaderWrapper={"loaderWrapper"}
          />
        </div>
      )}
      <div className={styles.container}>
        <h2 className={styles.authTitle}> Authorization</h2>
        <Form>
          <Form.Control
            type="email"
            placeholder="Email"
            autoComplete="username"
            className={styles.authInput}
            ref={emailRef}
            required
          />
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={styles.authInput}
            ref={passwordRef}
            required
          />
          <div className={styles.error}>
            {error && <span className="text-danger">{error}</span>}
          </div>

          <div className={styles.forgotPassword}>
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
          <Button
            disabled={loading}
            onClick={(e) => handleClick(e, "login")}
            className={styles.loginBtn}
          >
            LOG IN
          </Button>
          <div
            onClick={(e) => handleClick(e, "signup")}
            role="button"
            className={styles.signupBtn}
          >
            SIGN UP
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Authorization;
