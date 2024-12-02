import React from "react";

const HeroStats = () => {
  return (
    <div className="w-full bg-black px-4 py-5 lg:px-40 lg:py-10 flex flex-col lg:flex-row gap-10 items-center lg:justify-around text-white text-center capitalize borde">
      <div className="flex flex-col justify-center items-center borde">
        <h1 className="text-3xl lg:text-5xl">3500+</h1>
        <p>Farmers Employed</p>
      </div>
      <div className="">
        <h1 className="text-3xl lg:text-5xl">20K+</h1>
        <p>Anunal productivity</p>
      </div>
      <div className="">
        <h1 className="text-3xl lg:text-5xl">5K+</h1>
        <p>animal breeding per year</p>
      </div>
    </div>
  );
};

export default HeroStats;
