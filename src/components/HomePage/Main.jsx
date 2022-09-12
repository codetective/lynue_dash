import React from "react";
import navLinks from "../../utils/navLinks";
import DashBoardLayout from "../layout/DashBoardLayout";

function Main() {
  return (
    <DashBoardLayout
      baseUrl={"/"}
      navLinks={navLinks.admin_nav_links}
    ></DashBoardLayout>
  );
}

export default Main;
