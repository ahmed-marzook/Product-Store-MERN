import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
      <ToastContainer autoClose={2000} closeOnClick draggable />
    </>
  );
}

export default App;
