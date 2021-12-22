import React, {useContext} from "react";
import { BiMenu } from "react-icons/bi";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

import {NavbarContext} from '../../contexts/NavbarContext'
import styles from "./Navbar.module.css";

const NavbarCustom = () => {
  const { handleMenuClick } = useContext(NavbarContext);

  return (
    <div style={{ backgroundColor: "#FA8C16" }}>
      <Container fluid className={styles.navbarContainer}>
        <Link to="/"><h1 className={styles.logo}>Book Club</h1></Link>
        

        <div role="button" onClick={handleMenuClick} className={styles.menuBar}>
          <BiMenu color={"#ffffff"} size={35} />
        </div>
      </Container>
    </div>
  );
};

export default NavbarCustom;
