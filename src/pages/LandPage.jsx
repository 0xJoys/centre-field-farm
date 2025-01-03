import React from "react";

import Thumbnail from "./../assets/AboutUsHeroImg.png";
import AB from "./../assets/AB.png";

const LandPage = () => {
  return (
    <div className="flex flex-col gap-5 px-10 lg:px-40 py-5">
      <div>
        <h1 className="text-black  capitalize text-3xl">
          best acres of lands for farming
        </h1>
        <div className="relative ">
          <img src={Thumbnail} alt="" />
        </div>
      </div>

      <div className="flex flex-col ">
        <h1 className="text-black  capitalize text-3xl">
        best location
        </h1>
        <div className="lg:flex-row w-full flex flex-col gap-5 items-center pt-5 ">
          <img src={AB} alt="" />
          <img src={AB} alt="" />
          <img src={AB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandPage;
