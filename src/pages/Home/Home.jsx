import { useLoaderData } from "react-router";
import BooksCard from "../../components/BooksCard";
import Banner from "../../components/Banner";
import TopGenres from "../TopGenre/TopGenres";
import BookOfTheWeek from "../BookOfTheWeek/BookOfTheWeek";
const Home = () => {
  const data = useLoaderData();
  return (
    <div className="w-full">
      <Banner></Banner>
      <div className="text-center text-xl font-bold mt-10 w-11/12 mx-auto">
        Latest Books
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10 w-11/12 mx-auto">
        {data.map((book) => (
          <BooksCard key={book._id} book={book}></BooksCard>
        ))}
      </div>
      <TopGenres></TopGenres>
      <BookOfTheWeek></BookOfTheWeek>
    </div>
  );
};

export default Home;
