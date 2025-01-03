import React from "react";

import img1 from "../../assets/blogs img1.png";
import img2 from "../../assets/blogs img2.png";
import img3 from "../../assets/blogs img3.png";
import img4 from "../../assets/blogs img4.png";

const BlogMainBody = () => {
  const CardDetails = [
    {
      productTitle: "agriculture manufacture science",
      image: img1,
    },
    {
      productTitle: "agriculture manufacture science",
      image: img2,
    },
    {
      productTitle: "agriculture manufacture science",
      image: img3,
    },
    {
      productTitle: "agriculture manufacture science",
      image: img4,
    },
  ];
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 borde my-10 border-green-400">
      {CardDetails.map((items) => (
        <div className="w-[350px] border border-pink-600">
          <div className="absolute w-[350px] capitalize mt-64 borde px-5">
            <div className=" flex flex-col gap-3 border-PrimaryColor borde">
              <h1 className="text-2xl">{items.productTitle}</h1>

              <div className="flex items-end gap-3">
                <div className="border-PrimaryColor bg-black border-4 w-11 h-11 rounded-full "></div>
                <div>
                  <h1 className="text-lg">Adebayo Samuel</h1>
                  <h1 className="text-xs">farm produce specialist</h1>
                </div>
                <h1 className="pl-11">6 min</h1>
              </div>
            </div>
          </div>
          <img src={items.image} alt="" className="" />
        </div>
      ))}
    </div>
  );
};

export default BlogMainBody;
