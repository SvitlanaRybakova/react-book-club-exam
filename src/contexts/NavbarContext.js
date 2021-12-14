import React, { createContext, useState, useContext} from "react";

export const NavbarContext = createContext();

export const useNavbarContext = () => {
return useContext(NavbarContext)
}

const NavbarContextProvider = (props) => {
const [isMenuOpen, setOpenMenu] = useState(false);

const handleMenuClick = () => {
  setOpenMenu((prevState) => !prevState)
  
}
 const [query, setQuery] = useState({
   searchText: "",
   lang: "en",
   genre: null,
   popular: false,
 });

  const values = {
    isMenuOpen,
    handleMenuClick,
    query,
    setQuery,
  };

  

  return (
    <NavbarContext.Provider value={values}>
      {props.children}
    </NavbarContext.Provider>
  )
}

export default NavbarContextProvider
