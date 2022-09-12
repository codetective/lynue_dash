import React from "react";
import { useSelector } from "react-redux";
import { LoginForm } from "../Auth/LoginForm";
import DashBoard from "./Main";

function HomePage() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  return <>{!isAuth ? <LoginForm /> : <DashBoard />}</>;
}

export default HomePage;
