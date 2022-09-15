import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { Logo } from "../Logo";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { isAuth } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState("true");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (!isAuth && !loading) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" />;
  }
  if (isAuth && !loading) {
    // not logged in so redirect to login page with the return url
    return children;
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
