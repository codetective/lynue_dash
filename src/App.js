import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import appTheme from "./utils/apptheme";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthState } from "./redux/features/AuthSlice";
import BlogDashBoard from "./pages/BlogDashBoard";
import HomePage from "./pages/Home";
import SuperAdminDashBoard from "./pages/SuperAdminDashBoard";
import { PrivateRoute } from "./components/Auth/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <ChakraProvider theme={appTheme}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/blog/*"
          element={
            <PrivateRoute>
              <BlogDashBoard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/superadmin/*"
          element={
            <PrivateRoute>
              <SuperAdminDashBoard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
