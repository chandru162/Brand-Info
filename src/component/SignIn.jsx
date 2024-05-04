import React, { useEffect, useState } from "react";
import "../css section/sign.css";
import Axios from "axios"
import { Navigate } from "react-router-dom";
export default function SignIn() {
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[list,setlist]=useState([])

const changename=(e)=>{
  setname(e.target.value)
}

const changeemail=(e)=>{
  setemail(e.target.value)
}

const changepassword=(e)=>{
  setpassword(e.target.value)
}

useEffect(()=>{
  Axios.get(`http://localhost:3005/user`)
  .then(res=>{setlist(res.data)})
  .catch(err=>{console.log(err)})
},[])
 

const handleaignin=()=>{
  Axios.post(`http://localhost:3005/user`,{name,email,password})
  .then(res=>{setlist(res)})
  .catch(err=>{console.log(err)})
  Navigate("/login")
}

    
  return (
    <div className="log-in-parent">
      <div className="log-in-div">
      <h1>Sign In</h1>
        <label className="label">UserName</label>
        <input
          type="text"
          id="login-iput-name"  
          placeholder="Enter Your Username"
          onChange={changename} value={name}
        />
        <label className="label">Email</label>
        <input
          type="text"
          id="login-iput-email"
          placeholder="Enter Your Email"
          onChange={changeemail} value={email}
        />
        <label className="label">Password</label>
        <input
          type="text"
          id="login-iput-password"
          placeholder="Enter Your password"
          onChange={changepassword} value={password}
        />
        <button class="button-77" role="button" onClick={handleaignin}>Signin now</button>
      </div>
    </div>
  );
}
