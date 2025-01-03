import React from "react";

const BlogFilterMenu = () => {
  return (
    <div className="bg-SecondryColor hidden lg:block h-fit w-full p-10">
      <ul className="grid grid-cols-3 gap-3 capitalize text-xl">
        <li>all blogs</li>
        <li>agriculture</li>
        <li>farm land</li>
        <li>invest in farms</li>
        <li>livestock </li>
        <li>farm management</li>
      </ul>
    </div>
  );
};

export default BlogFilterMenu;
