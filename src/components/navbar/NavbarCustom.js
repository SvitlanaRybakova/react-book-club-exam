import React, {useContext} from "react";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Container } from "react-bootstrap";
import {NavbarContext} from '../../contexts/NavbarContext'
import styles from "./Navbar.module.css";

const NavbarCustom = () => {
  const { handleMenuClick } = useContext(NavbarContext);

  return (
    <div style={{ backgroundColor: "#FA8C16" }}>
      <Container fluid className={styles.navbarContainer}>
        <h1 className={styles.logo}>Book Club</h1>
        <div className={styles.searchWrapper}>
          <form>
            <input
              className={styles.searchInput}
              type="text"
              name="search"
              placeholder="Search.."
            />
          </form>
          <button className={styles.searchButton}>
            <BsSearch color={"#FA8C16"} />
          </button>
        </div>
        <button onClick={handleMenuClick} className={styles.menuBar}>
          <BiMenu color={"#ffffff"} size={35} />
        </button>
      </Container>
    </div>
  );
};

export default NavbarCustom;
