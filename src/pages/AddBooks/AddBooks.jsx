import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthCOntext";
import { use } from "react";
import axios from "axios";

const AddBooks = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: e.target.rating.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email || "unknown",
      userName: user?.displayName || "Anonymous",
    };
    axios
      .post("http://localhost:3000/books", formData)
      .then((res) => {
        toast.success("Book Added Successfully!");
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add book!");
      });
  };
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 flex justify-center">
      <div
        className="card bg-base-100 border border-purple-300 
        w-full max-w-lg shadow-xl rounded-2xl p-6
        bg-linear-to-br from-purple-50 to-purple-100"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="label font-semibold text-purple-700">Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Enter book title"
            />
          </div>

          {/* Author */}
          <div>
            <label className="label font-semibold text-purple-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              required
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Author name"
            />
          </div>

          {/* Genre */}
          <div>
            <label className="label font-medium">Genre</label>
            <select
              defaultValue={""}
              name="genre"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select genre
              </option>
              <option value="Vehicles">Fantasy</option>
              <option value="Plants">Mystery</option>
              <option value="Foods">Science Fiction</option>
              <option value="Home & Living">Historical Fiction</option>
              <option value="Characters">Educational</option>
              <option value="Space">Programming</option>
              <option value="Animals">Adventure</option>
              <option value="Other">Crime</option>
              <option value="Other">Self-Help</option>
              <option value="Other">Travel</option>
              <option value="Other">Non-Fiction</option>
            </select>
          </div>
          {/* Rating */}
          <div>
            <label className="label font-semibold text-purple-700">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              max="5"
              min="1"
              name="rating"
              required
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="4.7"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="label font-semibold text-purple-700">
              Summary
            </label>
            <textarea
              name="summary"
              required
              rows="4"
              className="textarea w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Brief summary of the book..."
            ></textarea>
          </div>

          {/* Cover Image */}
          <div>
            <label className="label font-semibold text-purple-700">
              Cover Image URL
            </label>
            <input
              type="url"
              name="coverImage"
              required
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/book.jpg"
            />
          </div>

          {/* User Info (Auto-filled) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label font-semibold text-purple-700">
                User Name
              </label>
              <input
                type="text"
                readOnly
                value={user?.displayName || "Anonymous"}
                className="input w-full rounded-xl bg-purple-100 border-purple-300"
              />
            </div>

            <div>
              <label className="label font-semibold text-purple-700">
                User Email
              </label>
              <input
                type="email"
                readOnly
                value={user?.email || "unknown"}
                className="input w-full rounded-xl bg-purple-100 border-purple-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full
            bg-linear-to-r from-purple-600 to-purple-800
            hover:from-purple-700 hover:to-purple-900 shadow-lg"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
