import React from "react";

const ProductCardWithButton = ({ heading, desc, image, styles }) => {
  return (
    <div className={`${styles} h-fit`}>
      <div className="lg:w-1/ ">
        <img src={image} alt="" className="borde border-purple-800 " />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left borde border-red-600">
        <h1 className="text-black text-MainHeading capitalize">{heading}</h1>
        <p
          className="text-lg text-gray-700 borde"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
        <button className="bg-PrimaryColor p-4 mt-4">Learn More</button>
      </div>
    </div>
  );
};

export default ProductCardWithButton;
