import React from "react";

import PigBaby from "../../assets/PigBaby.png";
import CowFaceF from "../../assets/CowFaceF.png";
import chicken from "../../assets/chickens.png";

const CheckOtherProductCard = ({ sectionTitle, CardDetails}) => {


  return (
    <div className="flex pt-20 lg:py-5 px-10 lg:px-40 gap-10 flex-col justify-center items-center borde border-green-600 mb-10">
      <div className="lg:w-1/">
        <h1 className="text-black text-center text-MainHeading">
          {sectionTitle}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-7 borde border-red-700">
        {CardDetails.map((item) => (
          <div className="flex items-end justify-center relative lg:w-1/3 border bg-black">
            <div className="absolute text-center mb-4">
              <h1 className="text-MainHeading"> {item.productTitle}</h1>
            </div>
            <img src={item.image} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOtherProductCard;
