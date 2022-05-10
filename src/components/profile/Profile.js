import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./Profile.module.css";
import userLogo from "../../assets/images/user.png";
import Edit from "./Edit";
import List from "./List";

const Profile = () => {
  const [isEditOpen, setEditOpen] = useState(false);
  const { currentUser, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogoutClick = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/");
  };
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.container}>
        <Row className="justify-content-between">
          <Col className="d-flex align-items-center">
            <div className="userLogo">
              <img
                src={currentUser.photoURL ? currentUser.photoURL : userLogo}
                alt="user logo"
              />
            </div>
            <span className="username">{currentUser.displayName}</span>
          </Col>
          <Col className="d-flex align-items-center justify-content-end ">
            <div
              role="button"
              className={styles.icons}
              onClick={() => setEditOpen((prevState) => !prevState)}
            >
              <BiEdit />
            </div>
            <div
              role="button"
              className={styles.icons}
              onClick={handleLogoutClick}
            >
              <IoLogOutOutline />
            </div>
          </Col>
        </Row>
        {isEditOpen ? <Edit navigateToList={setEditOpen} /> : <List />}
      </div>
    </div>
  );
};

export default Profile;
