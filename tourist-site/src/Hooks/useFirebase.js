import { initializeApp } from "firebase/app";
import firebaseConfig from "../Components/Details/Firebase/FirebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";


const app =initializeApp(firebaseConfig);

const auth=getAuth();

const googleProvider=new GoogleAuthProvider()
  


const useFirebase=()=>{

  const [user,setUser]=useState({})
  

    const SignInUsingGoogle=()=>{
  
         return  signInWithPopup(auth,googleProvider)
       }

       const UserSignOUt=()=>{
       return signOut(auth)


    }
    

    useEffect( ()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
         setUser(user)
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    } ,[])
      
       return {user,SignInUsingGoogle,UserSignOUt,setUser}
}
export default useFirebase;