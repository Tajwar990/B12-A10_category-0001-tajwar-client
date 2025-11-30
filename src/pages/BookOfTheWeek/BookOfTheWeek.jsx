import React, { useEffect, useState } from "react";
import axios from "axios";

const BookOfTheWeek = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        if (res.data.length > 0) setBook(res.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!book) return null;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-purple-700 w-11/12 mx-auto">
        Book of the Week
      </h2>
      <section className="w-11/12 mx-auto my-12 bg-purple-50 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full md:w-1/3 h-96 md:h-96 lg:h-112 object-cover rounded-xl shadow-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-medium mb-2">{book.title}</h3>
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Rating:</strong> {book.rating}
          </p>
          <p className="text-gray-600">{book.summary}</p>
        </div>
      </section>
    </div>
  );
};

export default BookOfTheWeek;
