import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import "../css section/navbar.css";
import logoimage from '../assets/Image/Brand Information_transparent.png'

import { useAuth } from "./Auth";

function NavBar() {
  const auth=useAuth()
  return (
    <div class="container-fluid" className="nav-parant">
      <nav>

        {/* nav logo */}

        <img id="logo-image" src={logoimage} alt="web logo" width={"100px"} height={"100px"}
         style={{position:"relative",bottom:"25px",right:"5px",borderRadius:"100%"}}/>


         {/* nav-link-section */}

        <div className="nav-div">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/prodect"}>Product</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          {/* <NavLink to={"/sign-in"}>sign in</NavLink> */}
          {/* <NavLink to={"/profile"}>Profile</NavLink> */}
          {/* <NavLink to={"/log-in"}>Login</NavLink> */}
          {auth.user && (<NavLink to={"/profile"}>Profile</NavLink>)}
          {!auth.user && (<NavLink to={"/log-in"}>Login</NavLink>)}
          {!auth.user && (<NavLink to={"/sign-in"}>sign in</NavLink>)}

        </div>

      </nav>
    </div>
  );
}

export default NavBar;
