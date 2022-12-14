import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

function BlogDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.blog.title} /> : <Main />}</>;
}

export default BlogDashBoard;

function Main() {
  //if user role is blog
  return (
    <DashBoardLayout baseUrl={"/blog"} navLinks={navLinks.blog_admin_nav_links}>
      blog
    </DashBoardLayout>
  );
}
