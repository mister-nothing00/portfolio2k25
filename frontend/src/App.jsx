import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserData } from "./context/User.jsx";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/personal/Navbar";

import "./App.css";
import { Spinner } from "@chakra-ui/react";

function App() {
  const { loading, user } = UserData();

  return (
    <>
      {loading ? (
        <Spinner display={"block"} mx={"auto"} my={"50%"} />
      ) : (
        <BrowserRouter>
          <header className="header">
            <Navbar />
          </header>
          <main className="container-main">
           
            <Routes>
              <Route
                path="/admin"
                element={user.role === "admin" ? <Admin /> : <Login />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </BrowserRouter>
      )}
    </>
  );
}

export default memo(App);
