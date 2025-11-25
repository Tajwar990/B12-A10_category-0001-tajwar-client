import { Link } from "react-router";
import StarRating from "./StarRating";

const BooksCard = ({ book }) => {
  const { _id, title, author, genre, rating, coverImage } = book;

  return (
    <div
      className="
        card border-2 border-purple-500 bg-[#181d23] overflow-hidden shadow-lg
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/40
        animate-fadeIn
      "
    >
      <figure className="w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>

        <p className="text-white text-md mt-1">
          Author: <span className="font-medium">{author}</span>
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="text-white text-[18px] leading-none">
            Genre: <span className="font-medium">{genre}</span>
          </p>

          {rating && (
            <div className="flex items-center">
              <StarRating rating={parseFloat(rating)} />
            </div>
          )}
        </div>

        <div className="mt-4">
          <Link
            to={`/book-details/${_id}`}
            state={{ book }}
            className="
              btn bg-purple-600 hover:bg-purple-700 text-white w-full
              transition-all duration-300
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
