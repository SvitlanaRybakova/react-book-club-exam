import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Authorization from "../authorization/Authorization";
import Profile from '../profile/Profile'
import { NavbarContext } from "../../contexts/NavbarContext";
import styles from "./PageLayout.module.css";

const PageLayout = ({ children }) => {
  const { isMenuOpen } = useContext(NavbarContext);
  return (
    <div className={styles.authWrapper}>
      <Container fluid>
        <Row>
          <Col sm={12} md={8}>
           {children}
          </Col>
          <Col className={styles.authBlock}>
            <Authorization />
            <Profile />
          </Col>
          {isMenuOpen && (
            <div className={styles.authOverlay}>
              <Authorization title={"Book Club"} />
              <Profile title={"Book Club"} />

            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PageLayout;
