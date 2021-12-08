import React, {useState} from 'react'
import { useQuery } from "react-query";
import BooksList from '../../components/books_list/BooksList';
import SearchBar from '../../components/search_bar/SearchBar'
import PageLayout from '../../components/layout/PageLayout'
import {getBooks} from '../../services/GoogleBooksAPI'

const Home = () => {
  const [query, setQuery] = useState("harry+potter")
  const { data, error, isError, isLoading } = useQuery(["home", query], () =>
    getBooks(query)
  );
  console.log(data);
  return (
    <PageLayout>
      <SearchBar />
      <BooksList data={data} />
    </PageLayout>
  );
}

export default Home
