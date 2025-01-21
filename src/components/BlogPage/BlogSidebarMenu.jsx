import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const BlogSidebarMenu = () => {
  return (
    <div className="bg-CardBg py-24 px-10 h-screen w- sticky top-0 borde border-purple-600">
      <div className="text-black capitalize flex flex-col justify-center items-center gap-4 border-red-500 borde">
        <div className="text-center">
          <h1 className="text-MainHeading">welcome to centerfield blogs</h1>
          <p className="text-xl">
            familiarize yourself with the available blogs about farm,
            agriculture and livestock.
          </p>
        </div>

        <h1 className="text-3xl">recommend blog</h1>

        <ul className="flex flex-col gap-5 text-xl">
          <li className="hover:text-PrimaryColor flex items-center gap-2">
            {" "}
            <FaAngleDoubleRight /> food science for african
          </li>
          <li className="hover:text-PrimaryColor flex items-center gap-2 cursor-pointer">
            {" "}
            <FaAngleDoubleRight /> how to train your animals
          </li>
          <li className="hover:text-PrimaryColor flex items-center gap-2 cursor-pointer">
            {" "}
            <FaAngleDoubleRight /> animal nutritions
          </li>
          <li className="hover:text-PrimaryColor flex items-center gap-2 cursor-pointer">
            {" "}
            <FaAngleDoubleRight /> anti-biotics for sick animals
          </li>
          <li className="hover:text-PrimaryColor flex items-center gap-2 cursor-pointer">
            {" "}
            <FaAngleDoubleRight /> how sensitive is domestics animals
          </li>
          <li className="hover:text-PrimaryColor flex items-center gap-2 cursor-pointer">
            {" "}
            <FaAngleDoubleRight /> what you have to know before buying eggs from
            markets
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebarMenu;
