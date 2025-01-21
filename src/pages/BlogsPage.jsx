import React from "react";
import BlogFilterMenu from "../components/BlogPage/BlogFilterMenu";
import BlogSidebarMenu from "../components/BlogPage/BlogSidebarMenu";
import BlogMainBody from "../components/BlogPage/BlogMainBody";
import YouHaveQuestion from "../components/BlogPage/YouHaveQuestion";

const BlogsPage = () => {
  return (
    <div className="borde">
      <div className="flex justify-center borde border-red-600">
        <div className="hidden lg:block w-2/5">
          <BlogSidebarMenu />
        </div>
        <div className="w-4/5 flex lg:flex lg:flex-col items-center justify-center borde border-yellow-500">
          <BlogFilterMenu />

          <BlogMainBody className="" />
        </div>
      </div>
      <YouHaveQuestion />
    </div>
  );
};

export default BlogsPage;
