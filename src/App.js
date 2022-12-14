import { Box, ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import appTheme from "./utils/apptheme";
import BlogDashBoard from "./pages/BlogDashBoard";
import SuperAdminDashBoard from "./pages/SuperAdminDashBoard";
import WelcomePage from "./pages/WelcomePage";
import SupportDashBoard from "./pages/SupportDashBoard";
import AdminDashBoard from "./pages/AdminDashBoard";
import AnalystDashBoard from "./pages/AnalystDashBoard";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { roles } from "./utils/config";
import { useCallback, useEffect } from "react";
import { HANDLEJWT } from "./utils/helper";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./components/Auth/ForgotPassword";
import NotFound from "./pages/NotFound";
import ResetPassword from "./components/Auth/ResetPassword";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((s) => s.auth);

  const calH = useCallback(() => {
    HANDLEJWT(token, dispatch);
  }, [token, dispatch]);

  useEffect(() => {
    calH();
  }, [token, calH]);
  return (
    <ChakraProvider theme={appTheme}>
      <Box>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          ></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
          <Route
            path="/blog/*"
            element={
              <PrivateRoute onlyFor={roles.blog.title}>
                <BlogDashBoard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/superadmin/*"
            element={
              <PrivateRoute onlyFor={roles.superadmin.title}>
                <SuperAdminDashBoard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/analyst/*"
            element={
              <PrivateRoute onlyFor={roles.analyst.title}>
                <AnalystDashBoard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/admin/*"
            element={
              <PrivateRoute onlyFor={roles.admin.title}>
                <AdminDashBoard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/support/*"
            element={
              <PrivateRoute onlyFor={roles.support.title}>
                <SupportDashBoard />
              </PrivateRoute>
            }
          ></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
