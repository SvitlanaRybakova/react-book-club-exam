import React from "react";
import { useParams } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is the single book page with id {id}</h1>
    </div>
  );
};

export default BookPage;
