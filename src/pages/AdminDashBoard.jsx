import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useSelector } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

import { Route, Routes } from "react-router-dom";
import Overview from "../components/SuperAdminDashBoard.jsx/Overview";
import Profile from "../components/ProfilePage/Profile";
import Complaints from "../components/ComplaintsPage/Complaints";
import SingleComplaintView from "../components/ComplaintsPage/SingleComplaintView";
import Transactions from "../components/TransactionsPage/Transactions";
import Settings from "../components/SettingsPage/Settings";
import Users from "../components/UsersPage/Users";
import Notifications from "../components/NotificationsPage/Notifications";

import Listings from "../components/ListingsPage/Listings";
import NotFound from "./NotFound";

function AdminDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.admin.title} /> : <Main />}</>;
}

export default AdminDashBoard;

function Main() {
  const baseUrl = "/admin";
  return (
    <DashBoardLayout baseUrl={baseUrl} navLinks={navLinks.admin_nav_links}>
      <Routes>
        <Route exact path="/" element={<Overview />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/listings"
          element={<Listings baseUrl={baseUrl} />}
        ></Route>
        <Route
          path="/listings/rent"
          element={<Listings type="rent" baseUrl={baseUrl} />}
        ></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route
          path="/notifications"
          element={<Notifications baseUrl={baseUrl} />}
        ></Route>

        <Route
          path="/transactions"
          element={<Transactions baseUrl={baseUrl} />}
        ></Route>
        <Route
          path="/complaints"
          element={<Complaints baseUrl={baseUrl} />}
        ></Route>
        <Route
          path="/settings"
          element={<Settings baseUrl={baseUrl} />}
        ></Route>
        <Route
          path="/complaints/:ticketID"
          element={<SingleComplaintView baseUrl={baseUrl} />}
        ></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </DashBoardLayout>
  );
}
