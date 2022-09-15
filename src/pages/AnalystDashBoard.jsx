import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

function AnalystDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.analyst.title} /> : <Main />}</>;
}

export default AnalystDashBoard;

function Main() {
  return (
    <DashBoardLayout baseUrl={"/analyst"} navLinks={navLinks.analyst_nav_links}>
      analyst
    </DashBoardLayout>
  );
}
