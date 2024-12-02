import React from "react";

import LandingYT from "../../assets/Landing YT.png";

const IntroductionToCen = () => {
  return (
    <div className="flex py-5 lg:py-28 px-10 lg:px-40 gap-20 flex-col justify-center items-center borde border-green-600">
      <div className="capitalize text-center w-fit lg:w-[600px] borde">
        <h1 className="text-MainHeading text-black">
          introduction to centerfield farm
        </h1>
        <p className="text-SubHeading text-gray-700">
          Farm Together, enables accredited investors and institutions to invest
          directly in high-quality farmland assets vetted by rigorous,
          institutional due diligence and active asset management. Farmland has
          historically proven to be uncorrelated to economic cycles and broad
          market indices.
        </p>
      </div>
      <div className="">
        <img src={LandingYT} alt="" width={"100%"} />
      </div>
    </div>
  );
};

export default IntroductionToCen;
