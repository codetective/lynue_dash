import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Center, Spinner, useToast } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { roles } from "../../utils/config";

export default function PrivateRoute({ onlyFor, children }) {
  const toast = useToast();

  const { isAuth, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState("true");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (!isAuth && !loading) {
    return <Navigate to="/" />;
  }
  if (isAuth && !loading && user.role === onlyFor) {
    return children;
  }
  if (isAuth && !loading && user.role !== onlyFor) {
    toast({
      status: "info",
      title: `You're logged in as ${user.role}`,
      description: "Redirected...",
      position: "bottom-right",
    });
    return <Navigate to={roles[user.role].path} />;
  }

  return (
    <Center h="100vh" flexDir="column">
      <Logo />
      <Box>
        <Spinner />
      </Box>
    </Center>
  );
}
