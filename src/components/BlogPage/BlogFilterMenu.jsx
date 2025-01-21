import React from "react";

const BlogFilterMenu = () => {
  return (
    <div className="bg-SecondryColor hidden lg:block h-fit w-full p-10">
      <ul className="grid grid-cols-3 gap-3 capitalize text-xl">
        <li className="hover:text-PrimaryColor cursor-pointer">all blogs</li>
        <li className="hover:text-PrimaryColor cursor-pointer">agriculture</li>
        <li className="hover:text-PrimaryColor cursor-pointer">farm land</li>
        <li className="hover:text-PrimaryColor cursor-pointer">invest in farms</li>
        <li className="hover:text-PrimaryColor cursor-pointer">livestock </li>
        <li className="hover:text-PrimaryColor cursor-pointer">farm management</li>
      </ul>
    </div>
  );
};

export default BlogFilterMenu;
