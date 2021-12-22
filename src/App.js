import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarCustom from "./components/navbar/NavbarCustom";
import NavbarContextProvider from "./contexts/NavbarContext";
import SearchContextProvider from './contexts/SearchContext'
import AuthContextProvider from "./contexts/AuthContext";
import HomePage from "./pages/home/Home";
import BookPage from "./pages/book_page/BookPage";
import BookList from './pages/book_list/BookList'

function App() {
  return (
    <>
    	<AuthContextProvider>
      <NavbarContextProvider>
        <SearchContextProvider>
          <NavbarCustom />
          <Routes>
            <Route path="/books/:id" element={<BookPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/book-list" element={<BookList />} />
            {/* <Route element={<PageNotFound />} /> */}
          </Routes>
        </SearchContextProvider>
      </NavbarContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
