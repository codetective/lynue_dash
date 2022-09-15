import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

function AdminDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.admin.title} /> : <Main />}</>;
}

export default AdminDashBoard;

function Main() {
  return (
    <DashBoardLayout baseUrl={"/admin"} navLinks={navLinks.admin_nav_links}>
      admin
    </DashBoardLayout>
  );
}
