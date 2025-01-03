import React from "react";

const BlogSidebarMenu = () => {
  return (
    <div className="bg-CardBg py-40 px-12 h-full border border-purple-600">
      <div className="text-black capitalize flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <h1 className="text-MainHeading">welcome to centerfield blogs.</h1>
          <p className="text-xl">
            familiarize yourself with the available blogs about farm,
            agriculture and livestock.
          </p>
        </div>

        <h1 className="text-2xl">recommend blog</h1>

        <ul className="flex flex-col gap-5 text-xl">
          <li> food science for african</li>
          <li> how to train your animals</li>
          <li> animal nutritions</li>
          <li> anti-biotics for sick animals</li>
          <li> how sensitive is domestics animals</li>
          <li> what you have to know before buying eggs from markets</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebarMenu;
