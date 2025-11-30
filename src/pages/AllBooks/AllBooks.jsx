import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BooksCard from "../../components/BooksCard";

const AllBooks = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data);

  const handleSort = async (order) => {
    const res = await fetch(
      `https://b12-a10-category-0001-tajwar-server.vercel.app/books?sort=${order}`
    );
    const sortedData = await res.json();
    setBooks(sortedData);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-2xl mt-5 text-center font-bold mb-2 bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        The Book Haven
      </div>
      <div className="flex justify-end items-center mb-4">
        <label className="mr-2 font-medium text-purple-700">
          Sort by Rating:
        </label>
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="px-3 py-2 rounded-xl bg-gradient-to-r from-purple-300 via-purple-100 to-purple-50 text-purple-700 font-semibold border border-purple-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        >
          <option value="">Default</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {books.map((book) => (
          <BooksCard key={book._id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
