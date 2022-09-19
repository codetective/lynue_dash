import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";
import { Route, Routes } from "react-router-dom";
import Overview from "../components/SuperAdminDashBoard.jsx/Overview";
import Profile from "../components/ProfilePage/Profile";

function SuperAdminDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.superAdmin.title} /> : <Main />}</>;
}

export default SuperAdminDashBoard;

function Main() {
  return (
    <DashBoardLayout
      baseUrl={"/superadmin"}
      navLinks={navLinks.super_admin_nav_links}
    >
      <Routes>
        <Route exact path="/" element={<Overview />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </DashBoardLayout>
  );
}
