import React, { useContext, useState } from 'react'

const AuthContext =React.createContext()
export default function AuthProvider(props) {
    const[user,setuser]=useState(null)

    const login=(user)=>{
        setuser(user)
    }

    const logout=()=>{
        setuser()
    }

  return (
    <AuthContext.Provider value={{user,login,logout}}>
        {props.children}
    </AuthContext.Provider>

  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}