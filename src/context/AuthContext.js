import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";


const UserContext=createContext();

export const AuthContextProvider=({children})=>{
  const [user,setUser]=useState();



const createUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}


const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

const logout=()=>{
  return signOut(auth)
}

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(createUser)=>{
    setUser(createUser)
  })
  return ()=>{
    unsubscribe();
  }
},[])

return (
  <UserContext.Provider value={{createUser,user,logout,signIn}}>
    {children}
  </UserContext.Provider>
)
}

export const UserAuth=()=>{
  return useContext(UserContext)
}