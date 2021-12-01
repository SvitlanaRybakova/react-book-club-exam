import "./App.css";
import NavbarCustom from "./components/navbar/NavbarCustom";
import Home from "./pages/home/Home";
import NavbarContextProvider from "./contexts/NavbarContext";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <NavbarCustom />
        <Home />
      </NavbarContextProvider>
    </>
  );
}

export default App;
