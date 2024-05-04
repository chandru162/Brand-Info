import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export default function RequirdAuth(props) {
    const Auth =useAuth()

    if(Auth.user){
        return(<>{props.children}</>)
    }
    else{
        return <Navigate to={"/log-in"}/>

}

}
