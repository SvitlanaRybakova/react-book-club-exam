import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

const NavbarCustom = () => {
  return (
    <div style={{ backgroundColor: "#FA8C16" }}>
      <Container className={styles.navbarContainer}>
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

        <button className={styles.menuBar}>
          <BiMenu  color={"#ffffff"}  size={35}/>
        </button>
      </Container>
    </div>
  );
};

export default NavbarCustom;
