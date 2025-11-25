import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BooksCard from "../../components/BooksCard";

const AllBooks = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data);
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-2xl text-center font-bold mb-5 bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        {" "}
        The Book Haven
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {books.map((book) => (
          <BooksCard key={book._id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
