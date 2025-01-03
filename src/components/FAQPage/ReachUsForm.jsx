import React from "react";

import ContactUsImg from "./../../assets/ContactUsImg.png";

const ReachUsForm = () => {
  return (
    <div className=" flex flex-col gap-4 tems-center py-10 border border-purple-500">
      <h1 className="text-black text-3xl text-center">Reach Out To Us </h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 border">
        <div className="lg:w-1/2">
          <img src={ContactUsImg} alt="" />
        </div>
        <div className="border- border-PrimaryColor lg:w-1/2">
          <form action="" className="flex flex-col gap-5 border">
            <input
              type="text"
              placeholder="Your Name"
              className="h-20 bg-transparent border-2 border-PrimaryColor text-black px-5 py-3"
            />
            <input
              type="email"
              placeholder="Your email here"
              className="h-20 bg-transparent border-2 border-PrimaryColor text-black px-5 py-3"
            />
            <textarea
              type="text"
              placeholder="Your Message here"
              className="h-40 bg-transparent border-2 border-PrimaryColor text-black px-5 py-3"
            />
            <button className="bg-PrimaryColor px-20 py-5 ">Sumbit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReachUsForm;
