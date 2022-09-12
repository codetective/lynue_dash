import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import navLinks from "../utils/navLinks";

function BlogDashBoard() {
  return (
    <DashBoardLayout baseUrl="/blog" navLinks={navLinks.blog_nav_links}>
      <Routes>
        <Route path="/" element={<h1>BLOG</h1>}></Route>
        <Route path="/add" element={<h1>add</h1>}></Route>
      </Routes>
    </DashBoardLayout>
  );
}

export default BlogDashBoard;
