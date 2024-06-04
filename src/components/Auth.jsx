import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login';

const Auth = () => {
    const [loggedIn, isLoggedIn] = useState(false);

    var val;

    const res = fetch("isloggedin")
    .then((res) => res.status == 200 ? isLoggedIn(true) : isLoggedIn(false));

    

    console.log(loggedIn);
    if(loggedIn){
        <Outlet />
    }
    else {
        return <Login />
    }

    // return(
    //     <div className='mt-20'>
    //         <div className={loggedIn == true ? "flex" : "hidden"}>Login</div>
    //         <div className={loggedIn == false ? "flex" : "hidden"}>Logout</div>
    //     </div>
    // )
  
}

export default Auth