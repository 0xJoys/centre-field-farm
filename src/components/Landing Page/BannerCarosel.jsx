import React from "react";

import BannerChick from "../../assets/Banner Chick.png";

const BannerCarosel = () => {
  return (
    <div className="flex flex-col justify-center  x-10 w-full relative py-20 borde border-red-600">
      <img src={BannerChick} alt="" className="w-full" />
      <div className="absolute flex flex-col gap-4 ml-10 lg:ml-40 lg:w-1/3 ">
        <h1 className="lg:text-MainHeading capitalize">
          invest in livestock products!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          officiis sint temporibus! Distinctio non harum, voluptatibus fugiat
          quos autem reiciendis cumque aperiam minima dolorem nihil!
        </p>
        <button className="bg-PrimaryColor w-fit px-5 py-2">Learn More</button>
      </div>
    </div>
  );
};

export default BannerCarosel;
