import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = (props) => {
                

        


        const {user}=useAuth()
      

    const {children,...rest}=props

    // console.log(user);
    
    return (

        <Route
        {...rest}
        render={({location})=>user.displayName?children:<Redirect to={{pathname:"/register",state:{from:{location}}
    
    }}></Redirect>}

     >
           
            
        </Route>
    );
};

export default PrivateRoute;