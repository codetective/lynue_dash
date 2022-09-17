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

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Box>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
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
              <PrivateRoute onlyFor={roles.superAdmin.title}>
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
          <Route path={"*"} element={<h1>PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
