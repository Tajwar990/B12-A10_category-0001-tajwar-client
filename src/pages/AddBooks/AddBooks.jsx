import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthCOntext";
import { use } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const AddBooks = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: parseFloat(e.target.rating.value),
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
              data-tooltip-id="titleTip"
              data-tooltip-content="Enter the name of the book"
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Enter book title"
            />
            <Tooltip id="titleTip" place="right" />
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
              data-tooltip-id="authorTip"
              data-tooltip-content="Who wrote the book?"
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Author name"
            />
            <Tooltip id="authorTip" place="right" />
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
              data-tooltip-id="ratingTip"
              data-tooltip-content="Enter a rating between 1 and 5"
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="4.7"
            />
            <Tooltip id="ratingTip" place="right" />
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
              data-tooltip-id="summaryTip"
              data-tooltip-content="Write a short overview of the story"
              className="textarea w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Brief summary of the book..."
            ></textarea>
            <Tooltip id="summaryTip" place="right" />
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
              data-tooltip-id="imageTip"
              data-tooltip-content="Paste a direct image URL"
              className="input w-full rounded-xl border-purple-300 focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/book.jpg"
            />
            <Tooltip id="imageTip" place="right" />
          </div>

          {/* Submit */}
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
