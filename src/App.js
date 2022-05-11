import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarCustom from "./components/navbar/NavbarCustom";
import NavbarContextProvider from "./contexts/NavbarContext";
import SearchContextProvider from "./contexts/SearchContext";
import AuthContextProvider from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/home/Home";
import BookPage from "./pages/book_page/BookPage";
import BookList from "./pages/book_list/BookList";
import ResetPassword from "./pages/reset_password/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
console.warn = console.error= () => {};

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
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* Protected routes */}

              <Route
                path="/book-list"
                element={
                  <RequireAuth redirectTo="/">
                    <BookList />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </SearchContextProvider>
        </NavbarContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
