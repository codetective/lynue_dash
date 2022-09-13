import React from "react";
import navLinks from "../utils/navLinks";
import DashBoardLayout from "../components/layout/DashBoardLayout";

function SuperAdminDashBoard() {
  return (
    <DashBoardLayout baseUrl={"/"} navLinks={navLinks.super_admin_nav_links}>
      superadmin page
    </DashBoardLayout>
  );
}

export default SuperAdminDashBoard;
