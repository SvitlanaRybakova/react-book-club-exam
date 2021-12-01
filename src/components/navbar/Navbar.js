import React from "react";
import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container>
      <h1>Book Club</h1>
      <div className="">
        <form>
          <input type="text" name="search" placeholder="Search.." />
        </form>
        <button>
          
        </button>
      </div>
    </Container>
  );
};

export default Navbar;
