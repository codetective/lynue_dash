import React from "react";
import { useSelector } from "react-redux";
import { LoginForm } from "../components/Auth/LoginForm";
import RedirectPage from "../components/Auth/RedirectPage";

function HomePage() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  return <>{!isAuth ? <LoginForm /> : <RedirectPage />}</>;
}

export default HomePage;
