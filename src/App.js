import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarCustom from "./components/navbar/NavbarCustom";
import Home from "./pages/home/Home";
import NavbarContextProvider from "./contexts/NavbarContext";
import HomePage from "./pages/home/Home";
import BookPage from "./pages/book_page/BookPage";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <NavbarCustom />
        {/* <AppRouter /> */}
        <Routes>
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/" element={<HomePage />} />

          {/* <Route element={<PageNotFound />} /> */}
        </Routes>
      </NavbarContextProvider>
    </>
  );
}

export default App;
