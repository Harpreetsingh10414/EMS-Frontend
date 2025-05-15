import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 md:gap-2 items-center justify-center h-screen bg-white">
      <div className="relative">
        <h1 className="text-red-600 text-6xl font-bold text-center absolute bottom-0  md:bottom-4 w-full">
          404
        </h1>
        <img
          className=" md:w-[500px] md:h-[500px]"
          src={"/404.gif"}
          alt="404 ERROR..."
        />
      </div>

      <p className="mt-2 text-gray-600">
        The page you are looking for doesn’t exist.
      </p>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => navigate(-1)}
          className=" text-sm text-white font-semibold bg-red-500 px-4 py-2 rounded cursor-pointer"
        >
          Go Back
        </button>
        <Link
          className=" text-sm text-white font-semibold bg-red-500 px-4 py-2 rounded cursor-pointer"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
