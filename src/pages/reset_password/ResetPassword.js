import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import Loader from "../../components/loader/Loader";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const emailRef = useRef();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuthContext();
  // hide error
  setTimeout(() => {
    setError(null);
    setSuccess(false);
  }, 5000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
    try {
      await resetPassword(emailRef.current.value);
     setSuccess(true);
     setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
    emailRef.current.value = "";
  };

  return (
    <>
      <div className={styles.wrapper}>
        {loading && (
          <div className="overlay">
            <Loader
              loaderContainer={"loaderContainer"}
              loaderWrapper={"loaderWrapper"}
            />
          </div>
        )}

        <div className={styles.container}>
          <h2 className={styles.title}> </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
                className={styles.input}
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
              <Alert variant="success">
                {"The restore link has been sending. Check your email"}
              </Alert>
            )}
            <Button
              disabled={loading}
              type="submit"
              className={styles.resetBtn}
            >
              Reset password
            </Button>
          </Form>

          <div className="text-center my-3">
            <Link className={styles.link} to="/">
              Login
            </Link>
          </div>
          <div className="text-center my-3">
            Need an account?
            <Link className={styles.link} to="/">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
