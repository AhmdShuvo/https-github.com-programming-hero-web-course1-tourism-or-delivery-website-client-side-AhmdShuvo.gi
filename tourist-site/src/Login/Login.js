import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
   
    

    const {SignInUsingGoogle,setUser}=useFirebase()
    const location=useLocation()
    const history=useHistory()
    const url=location.state?.from.location.pathname||"/home"

    

    const handleGoogleSignin=()=>{

        
        SignInUsingGoogle().then(result=>{
            history.push(url)
           setUser(result.user)
        })
    }
    return (
        <div className="my-5">
             <div className="container my-5">
                   
                   <center> <button className="btn-info my-5 p-3 fs-3 text-light " onClick={handleGoogleSignin} > Google Sign in</button></center>
             </div>
        </div>
    );
};

export default Login;