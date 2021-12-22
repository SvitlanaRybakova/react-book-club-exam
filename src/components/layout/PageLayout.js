import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Authorization from "../authorization/Authorization";
import Profile from '../profile/Profile'
import { NavbarContext } from "../../contexts/NavbarContext";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./PageLayout.module.css";

const PageLayout = ({ children }) => {
  const { isMenuOpen } = useContext(NavbarContext);
  const { currentUser } = useAuthContext();
  return (
    <div className={styles.authWrapper}>
      <Container fluid>
        <Row>
          <Col sm={12} md={8}>
            {children}
          </Col>
          <Col className={styles.authBlock}>
            {currentUser ? (
              <Profile  />
            ) : (
              <Authorization />
            )}
          </Col>
          {isMenuOpen && (
            <div className={styles.authOverlay}>
              {currentUser ? (
                <Profile title={"Book Club"} />
              ) : (
                <Authorization title={"Book Club"} />
              )}
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PageLayout;
