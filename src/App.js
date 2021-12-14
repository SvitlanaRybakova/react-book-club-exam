import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarCustom from "./components/navbar/NavbarCustom";
import NavbarContextProvider from "./contexts/NavbarContext";
import SearchContextProvider from './contexts/SearchContext'
import HomePage from "./pages/home/Home";
import BookPage from "./pages/book_page/BookPage";
import AppRouter from "./components/AppRouter";


function App() {
  return (
    <>
      <NavbarContextProvider>
        <SearchContextProvider>
          <NavbarCustom />
          {/* <AppRouter /> */}
          <Routes>
            <Route path="/books/:id" element={<BookPage />} />
            <Route path="/" element={<HomePage />} />

            {/* <Route element={<PageNotFound />} /> */}
          </Routes>
        </SearchContextProvider>
      </NavbarContextProvider>
    </>
  );
}

export default App;
