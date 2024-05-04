import React from 'react'
import '../css section/Profile.css'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Profile(props) {
  const Auth=useAuth()
  const Navigate=useNavigate()

  const handlelogout=()=>{
    Auth.logout()
    Navigate("/")
  }
  return (
    <div>
      <div className='profile-div'>
      <h1>Profile</h1>
      <div className='img-div'><img src='#'/> </div>
      <h3>Welcome "{Auth.user}"</h3>
      <button className='button-77' onClick={handlelogout}>Logout</button>
      
      </div>
    </div>
  )
}
