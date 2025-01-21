import React from "react";

const BlogFilterMenu = () => {
  return (
    <div className="bg-SecondryColor hidden lg:block h-fit w-full p-10">
      <ul className="grid grid-cols-3 gap-3 capitalize text-xl">
        <li className="hover:text-PrimaryColor">all blogs</li>
        <li className="hover:text-PrimaryColor">agriculture</li>
        <li className="hover:text-PrimaryColor">farm land</li>
        <li className="hover:text-PrimaryColor">invest in farms</li>
        <li className="hover:text-PrimaryColor">livestock </li>
        <li className="hover:text-PrimaryColor">farm management</li>
      </ul>
    </div>
  );
};

export default BlogFilterMenu;
