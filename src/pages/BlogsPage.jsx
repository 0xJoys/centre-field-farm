import React from "react";
import BlogFilterMenu from "../components/BlogPage/BlogFilterMenu";
import BlogSidebarMenu from "../components/BlogPage/BlogSidebarMenu";
import BlogMainBody from "../components/BlogPage/BlogMainBody";
import YouHaveQuestion from "../components/BlogPage/YouHaveQuestion";

const BlogsPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="hidden lg:block w-2/5">
          <BlogSidebarMenu />
        </div>
        <div className="w-4/5 border flex lg:flex lg:flex-col items-center justify-center border-red-500">
          <BlogFilterMenu />

          <BlogMainBody className="" />
        </div>
      </div>
      <YouHaveQuestion />
    </div>
  );
};

export default BlogsPage;
