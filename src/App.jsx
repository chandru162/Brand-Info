import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {  Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Prodect from "./component/Prodect";
import Login from "./component/Login";
import Nopage from "./component/Nopage";
import SignIn from "./component/SignIn";
import RequirdAuth from './component/RequirdAuth'
import Profile from "./component/Profile";
import AuthProvider from "./component/Auth";

function App() {
  return (
    <>
     <AuthProvider>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Prodect" element={<RequirdAuth><Prodect/></RequirdAuth>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/log-in" element={<Login></Login>}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/profile" element={<RequirdAuth><Profile/></RequirdAuth>}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>

      </AuthProvider>
    </>
  );
}

export default App;
