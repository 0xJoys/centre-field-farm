import React from "react";

import AB from "../../assets/AB.png";
import EPB from "../../assets/EPB.png";
import MJ from "../../assets/MJ.png";

const WhatArePeople = () => {
  return (
    <div className="flex pt-20 lg:py-5 px-10 lg:px-40 gap-10 flex-col justify-center items-center borde border-green-600">
      <div className="lg:w-1/">
        <h1 className="text-black text-center text-MainHeading">
          What Are People Saying About Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-7 borde border-red-700">
        <div className="flex items-end justify-center relative lg:w-1/3 border bg-blac">
          <div className="absolute text-center mb-4">
            <h1 className="text-MainHeading">Adeola Blessing</h1>
            <p className="text-xl">Special Contractor</p>
          </div>
          <img src={AB} alt="" className="w-full h-full" />
        </div>
        <div className="flex items-end justify-center relative lg:w-1/3 border bg-blac">
          <div className="absolute text-center mb-4">
            <h1 className="text-MainHeading">Emmanuel PB</h1>
            <p className="text-xl">Rote Founder</p>
          </div>
          <img src={EPB} alt="" className="w-full h-full" />
        </div>
        <div className="flex items-end justify-center relative lg:w-1/3 border bg-blac">
          <div className="absolute text-center mb-4">
            <h1 className="text-MainHeading">Mark Johnson</h1>
            <p className="text-xl">FNN Advicer</p>
          </div>
          <img src={MJ} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WhatArePeople;
