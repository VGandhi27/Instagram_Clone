import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /></>}>
            <Route index element={<><Home  /></>} />
            <Route path="home" element={<Home  />} />
            <Route path="signin" element={<><SignIn   /></>} />
            <Route path="signup" element={<><SignUp /></>} />
            <Route path="profile" element={<><Profile /></>} />
            <Route path="createpost" element={<><CreatePost /></>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
