import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import appTheme from "./utils/apptheme";
import BlogDashBoard from "./pages/BlogDashBoard";
import SuperAdminDashBoard from "./pages/SuperAdminDashBoard";
import WelcomePage from "./pages/WelcomePage";
import SupportDashBoard from "./pages/SupportDashBoard";
import ModeratorDashBoard from "./pages/ModeratorDashBoard";
import AdminDashBoard from "./pages/AdminDashBoard";
import AnalystDashBoard from "./pages/AnalystDashBoard";

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/blog/*" element={<BlogDashBoard />}></Route>
        <Route path="/superadmin/*" element={<SuperAdminDashBoard />}></Route>
        <Route path="/analyst/*" element={<AnalystDashBoard />}></Route>
        <Route path="/admin/*" element={<AdminDashBoard />}></Route>
        <Route path="/support/*" element={<SupportDashBoard />}></Route>
        <Route path="/moderator/*" element={<ModeratorDashBoard />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
