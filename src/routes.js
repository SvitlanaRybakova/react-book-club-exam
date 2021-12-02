import { HOME, BOOK_PAGE, ADMIN } from "./services/const";
import HomePage from './pages/home/Home'
import BookPage from './pages/book_page/BookPage'

export const publicRoutes = [
  { path: HOME, Component: HomePage },
  {
    path: BOOK_PAGE,
    Component: BookPage,
  },
];