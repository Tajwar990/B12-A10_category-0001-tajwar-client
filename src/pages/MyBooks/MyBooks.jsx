import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthCOntext";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://b12-a10-category-0001-tajwar-server.vercel.app/myBooks?email=${user.email}`
      )
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7e22ce",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://b12-a10-category-0001-tajwar-server.vercel.app/books/${id}`
          )
          .then(() => {
            setBooks(books.filter((book) => book._id !== id));
            Swal.fire("Deleted!", "Your book has been deleted.", "success");
          })
          .catch(() =>
            Swal.fire("Error!", "Failed to delete the book.", "error")
          );
      }
    });
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-purple-600 font-semibold text-xl">
        Loading your books...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">
        My Books
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You haven't added any books yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-purple-200 hover:shadow-2xl transition"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[300px]">
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{book.genre}</p>
                  <p className="text-gray-700 text-sm line-clamp-8">
                    {book.summary}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Link
                    to={`/update-book/${book._id}`}
                    className="w-1/2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition text-center"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="w-1/2 px-4 py-2 bg-red-500 text-white rounded-full text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
