import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import { roles } from "../utils/config";

function WelcomePage() {
  const { isAuth, user } = useSelector((s) => s.auth);
  console.log(user);
  return (
    <>
      {!isAuth ? (
        <LoginForm />
      ) : (
        <Navigate to={roles[user.role] ? roles[user.role].path : "/error"} />
      )}
    </>
  );
}

export default WelcomePage;
