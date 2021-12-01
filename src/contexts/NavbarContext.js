import React, { createContext, useState} from "react";

export const NavbarContext = createContext();

const NavbarContextProvider = (props) => {
const [isMenuOpen, setOpenMenu] = useState(false);

const handleMenuClick = () => {
  setOpenMenu((prevState) => !prevState)
  
}
  const values = {
    isMenuOpen,
    handleMenuClick,
  };

  return (
    <NavbarContext.Provider value={values}>
      {props.children}
    </NavbarContext.Provider>
  )
}

export default NavbarContextProvider
