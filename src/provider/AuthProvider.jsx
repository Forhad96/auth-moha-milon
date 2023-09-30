import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider() 

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [isLoading,setLoading] = useState(true)



    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const singInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singInWithGoogle = ()=>{
       setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }
    const logOut =()=> {
        setLoading(true)
        return signOut(auth)

    }

    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('current value of the current user observer',currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])



   const authInfo = {user,createUser,singInUser,logOut,isLoading,singInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;