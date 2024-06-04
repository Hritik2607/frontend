import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import signupImage from "./../assets/signupImage.png";
import Navbar from "../components/Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("yourmail@mail.com");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;

  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = user;

    let inputValue = email;
    setEmail(inputValue);

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      toast("📝Please enter correct email address", {
        duration: 6000,
      });
      return;
    }

    const res = await fetch("signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });

    const data = await res.json();

    console.log("Status code: ", res.status);

    if (res.status === 409) {
      toast.success("User already registered", {
        duration: 6000,
      });

      navigate("/login");
    } 
    else if (res.status === 403) {
      toast.error("All Fields are Required", {
        duration: 6000,
      });
    } 
    else if (res.status === 400) {
      toast.error("Password and Confirm Password does not match", {
        duration: 6000,
      });
    } 
    else if (res.status === 200) {
      toast.success("User Registered Successfully ✅", {
        duration: 6000,
      });
      
      navigate("/login");
    } 
    else if (res.status === 500) {
      toast.error("User cannot be registered. Please try again", {
        duration: 6000,
      });
    } 
    else {
      toast.success("Something went wrong! Try again.", {
        duration: 6000,
      });

      navigate("/signup");
    }
  };

  return (
    <div>
      <Navbar />
      <>
      <section>
        <div className="w-screen h-screen flex justify-between items-center px-8">
          <div>
            <img
              src={signupImage}
              alt="Signup Image"
              height={550}
              width={550}
            />
          </div>

          <div className="flex flex-col w-[50%]">
            <div>
              <p className="font-noticia text-6xl font-semibold text-start w-1/2">Welcome to Flavor Crave</p>
              <p className="font-notomusic text-3xl font-normal text-grey-text w-[80%]">Sign up now to unlock a world of culinary delights and exclusive offers.</p>
            </div>
            <form method="POST" className="flex flex-col gap-4 mt-8 w-[60%]">
              <input
                className="px-3 py-1 rounded-lg outline outline-grey-border focus:outline-orange-solid h-12"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInput}
                placeholder="Enter Name"
              />

                <input
                  className="px-3 py-1 rounded-lg outline outline-grey-border focus:outline-orange-solid h-12"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter Email"
                />

             
                <input
                  className="px-3 py-1 rounded-lg outline outline-grey-border focus:outline-orange-solid h-12"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Enter Password"
                />
              
              
                <input
                  className="px-3 py-1 rounded-lg outline outline-grey-border focus:outline-orange-solid h-12"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="off"
                  value={user.confirmPassword}
                  onChange={handleInput}
                  placeholder="Confirm Password"
                />
             
             
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  value="Sign Up"
                  className="flex self-start bg-orange-solid2 px-6 py-3 rounded-3xl text-white font-bold text-xl font-nunito mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={submitHandler}
                />

              <p className="font-notosans text-xl font-normal">
                Already have an account?
                <Link to={"/login"}>
                  <span className="text-orange-solid2 font-bold ml-2 no-underline">
                    Login
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
    </div>
    
  );
};

export default Signup;
