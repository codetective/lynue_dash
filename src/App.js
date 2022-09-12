import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import appTheme from "./utils/apptheme";
import Homepage from "./components/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthState } from "./redux/features/AuthSlice";
import BlogDashBoard from "./pages/BlogDashBoard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <ChakraProvider theme={appTheme}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/blog/*" element={<BlogDashBoard />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
