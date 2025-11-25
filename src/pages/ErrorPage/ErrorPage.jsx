import React from "react";
import { Link } from "react-router";
import errorLogo from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="card bg-[#181d23]">
      <figure className="px-10 pt-10">
        <img src={errorLogo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#001931] font-semibold text-5xl">
          Oops, page not found!
        </h2>
        <p className="text-xl font-normal bg-violet-700 mt-2">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="block bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]  px-4 py-3 w-[145px] rounded-2 text-center mx-auto mt-4"
        >
          <span className="ml-2 text-white text-[16px] font-semibold">
            Go Back!
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
