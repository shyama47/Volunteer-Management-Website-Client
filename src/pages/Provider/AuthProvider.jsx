import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import {auth} from '../../firebase/firebase.init'


const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);
   const [loading,setLoading] =useState(true);
//    console.log(user)

// create user
const createUser =(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

// Signin user
const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// google signIn
const provider =new GoogleAuthProvider();
const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
 
useEffect(()=>{
const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
setLoading(false)
})
return ()=>{
    unSubscribe();
}
},[])

// updateUser
const updateUser = (updateData)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,updateData)
}
//logout user
const logOut =()=>{
    setLoading(true)
    return signOut(auth);
}
    const AuthData ={
        createUser,
        signIn,
        googleSignIn,
        updateUser,
        setUser,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext value={AuthData}>
        {children}
        </AuthContext>
    );
};

export default AuthProvider;