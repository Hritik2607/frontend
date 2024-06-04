import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [loggedIn, isLoggedIn] = useState(false);

  const res = fetch("isloggedin").then((res) =>
    res.status == 200 ? isLoggedIn(true) : isLoggedIn(false)
  );

  console.log("isloggedin: ", res.status)

  const logoutHandler = async() => {
    const res = await fetch("logout");

    console.log("Logout: ", res.status);

    if (res.status === 200) {
      toast.success("Logged Out Successfully", {
        duration: 6000,
      });
      navigate("/");
    } 
  }

  return (
    <div className="flex h-16 justify-between items-center shadow-md backdrop-blur-sm bg-white/30 fixed top-0 w-full z-50 mb-16 px-4 md:px-11">
      <div className="flex w-11/12 max-w-maxContent justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" loading="lazy" className="w-[120px] md:w-[300px]"/>
        </Link>
      </div>

      <div className={`${loggedIn ? "hidden" : "flex"} gap-2 md:gap-4 min-w-fit`}>
        <Link to="/login">
          <button className="flex items-center px-2 md:px-6 py-1 md:py-2 bg-orange-solid2 rounded-[30px] hover:scale-105 transition-all duration-500 hover:shadow-[3px_3px_20px_3px_rgba(0,0,0,0.25)]">
            <p className="text-sm md:text-lg font-nokora md:font-bold text-white">Log In</p>
          </button>
        </Link>

        <Link to="/signup">
          <button className="flex items-center px-2 md:px-6 py-1 md:py-2 bg-orange-solid2 rounded-[30px] hover:scale-105 transition-all duration-500 hover:shadow-[3px_3px_20px_3px_rgba(0,0,0,0.25)]">
            <p className="text-sm md:text-lg font-nokora md:font-bold text-white">Sign Up</p>
          </button>
        </Link>
      </div>

      <div className={`${loggedIn ? "flex" : "hidden"} min-w-fit`}>
            <button onClick={logoutHandler} className="flex items-center px-6 py-2 bg-orange-solid2 rounded-[30px] hover:scale-105 transition-all duration-500 hover:shadow-[3px_3px_20px_3px_rgba(0,0,0,0.25)]">
              <p className="text-lg font-nokora font-bold text-white">Log Out</p>
            </button>
      </div>
    </div>
  );
};

export default Navbar;
