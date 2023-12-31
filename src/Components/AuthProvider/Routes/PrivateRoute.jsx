
import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
  

    if(loading){
        return <div>Loading...</div> ;
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;



