import React, { useRef, useState } from "react";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuthContext();
  const navigate = useNavigate();
  // hide error
  setTimeout(() => {
    setError(null);
  }, 5000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      navigate("/");
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
    emailRef.current.value = "";
  };

  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className={styles.wrapper}>
            <Card.Body>
              <Card.Title className={styles.title}>Reset Password</Card.Title>
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
            </Card.Body>
          </Card>

          <div className="text-center my-3">
            Need an account?
            <Link className={styles.link} to="/">
              Sign Up
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ResetPassword;
