import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import loginImage from "./../assets/loginImage.png";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("yourmail@mail.com");

  const [user, setUser] = useState({
    email: "",
    password: "",
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

    const { email, password } = user;

    let inputValue = email;
    setEmail(inputValue);

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      toast("📝Please enter correct email address", {
        duration: 6000,
      });
      return;
    }

    const res = await fetch("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log("Status code: ", res.status);

    if (res.status === 200) {
      toast.success("Logged In Successfully", {
        duration: 6000,
      });
      navigate("/");
      window.location.reload(); 
    } else if (res.status === 403) {
      toast.error("All Fields are Required", {
        duration: 6000,
      });
    } else if (res.status === 404) {
      toast.error("User is not registered, Please Signup first", {
        duration: 6000,
      });
    } else if (res.status === 401) {
      toast.error("Password is incorrect!", {
        duration: 6000,
      });
    } else if (res.status === 500) {
      toast.error("Log In Failure!", {
        duration: 6000,
      });
    } else {
      toast.error("Something went wrong!", {
        duration: 6000,
      });
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
                src={loginImage}
                alt="Signup Image"
                height={550}
                width={550}
              />
            </div>

            <div className="flex flex-col w-[50%]">
              <div>
                <p className="font-noticia text-6xl font-semibold text-start w-1/2">
                  Welcome to Flavor Crave
                </p>
                <p className="font-notomusic text-3xl font-normal text-grey-text w-[80%]">
                  Sign up now to unlock a world of culinary delights and
                  exclusive offers.
                </p>
              </div>
              <form method="POST" className="flex flex-col gap-4 mt-8 w-[60%]">
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
                  type="submit"
                  name="login"
                  id="login"
                  value="Log In"
                  className="flex self-start bg-orange-solid2 px-6 py-3 rounded-3xl text-white font-bold text-xl font-nunito mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={submitHandler}
                />

                <p className="font-notosans text-xl font-normal">
                  New User?
                  <Link to={"/signup"}>
                    <span className="text-orange-solid2 font-bold ml-2 no-underline">
                      Signup
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

export default Login;
