import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import SignIn from "./components/screens/SignIn";
import Profile from "./components/screens/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /></>}>
            <Route index element={<><Home  /></>} />
            <Route path="home" element={<Home  />} />
            <Route path="login" element={<><Login   /></>} />
            <Route path="signin" element={<><SignIn /></>} />
            <Route path="profile" element={<><Profile /></>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
