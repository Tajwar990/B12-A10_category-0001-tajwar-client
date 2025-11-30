import { useLoaderData } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const book = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
    };

    axios
      .put(
        `https://b12-a10-category-0001-tajwar-server.vercel.app/books/${book._id}`,
        formData
      )
      .then((res) => {
        toast.success("Book Updated Successfully!");
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update book!");
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
          Update Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="label font-semibold text-purple-700">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={book.title}
              required
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Enter book title"
            />
          </div>
          {/* Genre */}
          <div>
            <label className="label font-semibold text-purple-700">Genre</label>
            <select
              defaultValue={book.genre}
              name="genre"
              required
              className="select w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Historical Fiction">Historical Fiction</option>
              <option value="Educational">Educational</option>
              <option value="Programming">Programming</option>
              <option value="Adventure">Adventure</option>
              <option value="Crime">Crime</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Travel">Travel</option>
              <option value="Non-Fiction">Non-Fiction</option>
            </select>
          </div>
          {/* Summary */}
          <div>
            <label className="label font-semibold text-purple-700">
              Summary
            </label>
            <textarea
              name="summary"
              defaultValue={book.summary}
              required
              rows="4"
              className="textarea w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* CoverImage */}
          <div>
            <label className="label font-semibold text-purple-700">
              Cover Image URL
            </label>
            <input
              type="url"
              name="coverImage"
              defaultValue={book.coverImage}
              required
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full
            bg-linear-to-r from-purple-600 to-purple-800
            hover:from-purple-700 hover:to-purple-900 shadow-lg"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
