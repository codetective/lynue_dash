import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import { useDispatch, useSelector } from "react-redux";
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
import { useEffect } from "react";
import { getNotifs } from "../redux/functions/notificationFunctions";
import Listings from "../components/ListingsPage/Listings";
import NotFound from "./NotFound";

function SuperAdminDashBoard() {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <LoginForm as={roles.superAdmin.title} /> : <Main />}</>;
}

export default SuperAdminDashBoard;

function Main() {
  const baseUrl = "/superadmin";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifs());
  }, [dispatch]);
  return (
    <DashBoardLayout
      baseUrl={baseUrl}
      navLinks={navLinks.super_admin_nav_links}
    >
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
        <Route
          path="/admins"
          element={<Users baseUrl={baseUrl} adminOnly />}
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
