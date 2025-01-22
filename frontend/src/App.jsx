import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { UserData } from "./context/User.jsx";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/personal/Navbar";

import "./App.css";

function App() {
  const { loading, user, isAuth } = UserData();

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
                element={user.role ? <Admin /> : <Login />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/login"
                element={<Login />}
              />
            </Routes>
          </main>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
