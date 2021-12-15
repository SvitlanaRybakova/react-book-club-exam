import React, {useState} from "react";
import {  Row, Col } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./Profile.module.css";
import userLogo from "../../assets/images/user.png";
import Edit from './Edit'
import List from './List'

const Profile = ({ title }) => {
  const [isEditOpen, setEditOpen] = useState(false)
  return (
    <div className={styles.profileWrapper}>
      {title && <h1 className="logoTitle">{title}</h1>}
      <Row className="justify-content-between">
        <Col className="d-flex align-items-center">
          <div className="userLogo">
            <img src={userLogo} alt="user logo" />
          </div>
          <span className="username">Svitlana</span>
        </Col>
        <Col className="d-flex align-items-center justify-content-end ">
          <div
            role="button"
            className={styles.icons}
            onClick={() => setEditOpen((prevState) => !prevState)}
          >
            <BiEdit />
          </div>
          <div role="button" className={styles.icons}>
            <IoLogOutOutline />
          </div>
        </Col>
      </Row>
      {isEditOpen ? <Edit /> : <List />}
    </div>
  );
};

export default Profile;
