import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCow } from "react-icons/fa6";
import { GiCow, GiPlantRoots } from "react-icons/gi";

const OurProducts = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 lg:px-40 borde h-screen">
      <h1 className="text-MainHeading text-black text-center lg:mb-20">
        Our Products
      </h1>
      <div className=" lg:flex flex-row justify-between items-center gap-10">
        <div className="bg-CardBg text-black shadow-xl p-10 mb-5 lg:mb-0">
          <div className="fle items-center gap-2">
            <div className="flex w-fit p-2 rounded-full items-center justify-center bg-PrimaryColor text-white">
              <GiCow size={30} />
            </div>
            <h1 className="text-MainHeading capitalize text-nowrap">
              livestock breeding
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab
            harum quam in hic doloribus itaque laborum ad voluptatibus
            doloremque incidunt facilis nostrum repudiandae mollitia vitae,
            consequuntur earum non voluptates.
          </p>
        </div>

        <div className="bg-CardBg text-black shadow-xl p-10">
          <div className="fle items-center gap-2">
            <div className="flex w-fit p-2 rounded-full items-center justify-center bg-PrimaryColor text-white">
              <GiPlantRoots size={30} />
            </div>

            <h1 className="text-MainHeading capitalize text-nowrap">
              farm plants
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab
            harum quam in hic doloribus itaque laborum ad voluptatibus
            doloremque incidunt facilis nostrum repudiandae mollitia vitae,
            consequuntur earum non voluptates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
