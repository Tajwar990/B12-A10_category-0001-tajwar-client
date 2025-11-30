import React, { useEffect, useState } from "react";
import axios from "axios";

const TopGenres = () => {
  const [topGenres, setTopGenres] = useState([]);

  useEffect(() => {
    axios
      .get("https://b12-a10-category-0001-tajwar-server.vercel.app/books")
      .then((res) => {
        const books = res.data;
        const genreMap = {};
        books.forEach((book) => {
          if (
            !genreMap[book.genre] ||
            book.rating > genreMap[book.genre].rating
          ) {
            genreMap[book.genre] = book;
          }
        });
        const topBooksByGenre = Object.values(genreMap);
        setTopGenres(topBooksByGenre);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!topGenres.length) return null;

  return (
    <section className="w-11/12 mx-auto my-12">
      <h2 className="text-3xl font-semibold mb-6 text-purple-700">
        Top Genres
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topGenres.map((book, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-purple-50 p-4 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <img
              src={book.coverImage}
              alt={book.genre}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-medium">{book.genre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGenres;
