import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

function SupportDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.support.title} /> : <Main />}</>;
}

export default SupportDashBoard;

function Main() {
  return (
    <DashBoardLayout baseUrl={"/support"} navLinks={navLinks.support_nav_links}>
      support
    </DashBoardLayout>
  );
}
