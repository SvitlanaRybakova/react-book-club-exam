import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Authorization from "../authorization/Authorization";

import styles from "./PageLayout.module.css";

const PageLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            this is should be movie cards {children}
          </Col>
          <Col md={4}><Authorization /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageLayout;
