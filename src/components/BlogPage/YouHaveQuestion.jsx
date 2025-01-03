import React from "react";
import { Link } from "react-router-dom";

const YouHaveQuestion = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 capitalize bg-SecondryColor w-full h-52  borde">
      <h1 className="text-3xl">you have question?</h1>
      <p>kindly reach out to us for more enquires.</p>
      <Link to={""} className="bg-PrimaryColor px-20 py-5">
        Send A message
      </Link>
    </div>
  );
};

export default YouHaveQuestion;
