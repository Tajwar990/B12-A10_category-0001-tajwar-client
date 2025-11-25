import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500 text-xl" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-xl" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500 text-xl" />);
    }
  }

  return <div className="flex gap-2">{stars}</div>;
};

export default StarRating;
