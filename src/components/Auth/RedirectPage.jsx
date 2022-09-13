import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Logo } from "../Logo";

function RedirectPage() {
  const [time, setTime] = useState(2);
  const { user } = useSelector((state) => state.auth);
  const getRoles = () => {
    switch (user.role) {
      case "blog":
        return "Blog Admin";

      case "admin":
        return "Admin";

      case "superadmin":
        return "Super Admin";

      default:
        break;
    }
  };

  const getDashLink = () => {
    switch (user.role) {
      case "blog":
        return "/blog";

      case "admin":
        return "/admin";

      case "superadmin":
        return "/superadmin";

      default:
        break;
    }
  };

  useEffect(() => {
    function Interv() {
      setTime((prev) => prev - 1);
      console.log("yy" + time);
    }
    const intervID = setInterval(() => {
      Interv();
    }, 1000);
    return () => {
      clearInterval(intervID);
    };
  }, [time]);

  return (
    <>
      <Stack justifyContent={"center"} align="center" h="100vh">
        <Box h="100px">
          <Logo />
        </Box>
        <Box bg="white" p="5">
          Logged in as <u>{getRoles()}</u>
        </Box>
        <i>redirecting in {time}</i>
      </Stack>
      {time <= 0 && <Navigate to={getDashLink()} />}
    </>
  );
}

export default RedirectPage;
