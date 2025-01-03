import React from "react";
import { Link } from "react-router-dom";

const AboutUsHero = () => {
  return (
    <div className="bg-right bg-[url('src/assets/AboutUsHeroImg.png')] w-full  h-screen  flex flex-col justify-center items-center mb-20 borde">
      <div className="flex w-[480px] px-10 py-5 lg:w-[800px] capitalize text-center  flex-col justify-center items-center gap-3 borde">
        <p className="text-xl">
          Best platform for agricultural farms produces.
        </p>
        <h1 className="text-4xl lg:text-7xl">
          buy or own an agricultural products
        </h1>
        <Link to={"/"}>
          <button className="bg-PrimaryColor hover:bg-[#f7ae40] py-2 px-6 rounded-md text-xl">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsHero;
