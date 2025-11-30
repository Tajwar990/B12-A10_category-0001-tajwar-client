import { useLoaderData } from "react-router";

const BookDetails = () => {
  const data = useLoaderData();
  const book = data?.result || data;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-10">
      <div
        className="bg-white border border-purple-300 rounded-3xl shadow-xl 
        overflow-hidden bg-linear-to-br from-purple-50 to-white"
      >
        <div className="flex flex-col md:flex-row gap-10 p-6 md:p-10">
          {/* Book Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full max-h-[450px] object-cover rounded-2xl shadow-lg border border-purple-200"
            />
          </div>

          {/* Book Info */}
          <div className="flex flex-col space-y-5 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-800 leading-snug">
              {book.title}
            </h1>

            <p className="text-xl font-semibold tracking-wide text-purple-700">
              {book.author}
            </p>

            <div className="flex flex-wrap gap-3">
              <div
                className="badge badge-lg 
                    bg-purple-100 text-purple-700 border border-purple-300 
                    px-4 py-2 rounded-full text-sm font-medium"
              >
                {book.genre}
              </div>
              <div
                className="badge badge-lg 
                    bg-purple-100 text-purple-700 border border-purple-300 
                    px-4 py-2 rounded-full text-sm font-medium"
              >
                {book.rating}
              </div>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {book.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
