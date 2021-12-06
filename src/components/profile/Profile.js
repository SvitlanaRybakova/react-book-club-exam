import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./Profile.module.css";
import userLogo from "../../assets/images/user.png";

const Profile = ({ title }) => {
  return (
    <div className={styles.profileWrapper}>
      {title && <h1 className="logoTitle">{title}</h1>}
      <Row className="justify-content-between">
        <Col className="d-flex align-items-center">
          <div className={styles.userLogo}>
            <img src={userLogo} alt="user logo" />
          </div>
          <span className={styles.username}>Svitlana</span>
        </Col>
        <Col className="d-flex align-items-center justify-content-end ">
          <div className="mx-2">
            <BiEdit size={25} />
          </div>
          <div>
            <IoLogOutOutline size={25} />
          </div>
        </Col>
      </Row>
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
    </div>
  );
};

export default Profile;
