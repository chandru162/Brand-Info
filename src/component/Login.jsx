import React, { useEffect, useState } from "react";
import "../css section/Login.css";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
import { NavLink } from "react-router-dom";

export default function Login() {
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[errmessage,seterrmessage]=useState('')
  const[userlist,setuserlist]=useState([])
  
  const auth=useAuth()
  const Navigate=useNavigate()

  useEffect(()=>{
    Axios.get(`http://localhost:3005/user`)
    .then(res=>{setuserlist(res.data)})
    .catch(err=>{console.log(err)})
  },[])

  const handlelogin=(e)=>{
    e.preventDefault()

    const user=userlist.find(x => x.email === email)
if(user){
  if(user.password === password){
    auth.login(user.name)
    Navigate("/profile")
  }
  else{
    seterrmessage("Incorrect Password")
  }
}
else{
  seterrmessage("User not found")
}

  }

  return (

    <div className="log-in-parent">
      <div className="log-in-div">
        <h1>Login</h1>
        <label className="label">Email</label>
        <input type="email" id="loin-input-email" placeholder="Enter Your Email" onChange={(e)=>{setemail(e.target.value)}}/>
        <br />
        <label className="label">Password</label>
        <input type="password" id="loin-input-password" placeholder="Enter Your Password" onChange={(e)=>{setpassword(e.target.value)}}/>
        <br />
        <button class="button-77" role="button" onClick={handlelogin}>Login now</button>
        {errmessage}
        <h5>creat a new account ? <NavLink to={"/sign-in"}>sign in</NavLink></h5>
      </div>
    </div>
  );
}
