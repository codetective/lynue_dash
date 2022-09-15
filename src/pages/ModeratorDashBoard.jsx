import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

function ModeratorDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.moderator.title} /> : <Main />}</>;
}

export default ModeratorDashBoard;

function Main() {
  return (
    <DashBoardLayout
      baseUrl={"/moderator"}
      navLinks={navLinks.moderator_nav_links}
    >
      moderator
    </DashBoardLayout>
  );
}
