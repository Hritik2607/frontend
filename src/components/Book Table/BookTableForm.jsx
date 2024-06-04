import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookTableForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("yourmail@mail.com");

  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    noOfGuests: "",
    tableNumber: "",
    message: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (event) => {

    const { name, email, date, time, noOfGuests, tableNumber, message } = user;

    let inputValue = email;
    setEmail(inputValue);

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      toast("📝Please enter correct email address", {
        duration: 6000,
      });
      navigate("/book-table");
    }

    const toastId = toast.loading("Please wait a moment...");

    event.preventDefault();

    const res = await fetch("book-table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        date,
        time,
        noOfGuests,
        tableNumber,
        message,
      }),
    });

    toast.dismiss(toastId);

    const response = await res.json();

    if (res.status === 200) {
      toast.success("Table Booked Successfully", {
        duration: 6000,
      });
      navigate("/booking-successful", { state: { response } });
    } else if (res.status === 401) {
      toast("Please Log In First!! 👤", {
        duration: 6000,
      });
      navigate("/login");
    } else if (res.status === 403) {
      toast("All Tables are Reserved😥", {
        duration: 6000,
      });
    } else if (res.status === 409) {
      toast("Selected Table is Reserved😥", {
        duration: 6000,
      });
    } else if (res.status === 400) {
      toast("📝Please fill all the * marked fields", {
        duration: 6000,
      });
      navigate("/book-table");
    } else {
      toast.error("Something went wrong. Please try again!", {
        duration: 6000,
      });
    }
  };

  return (
    <>
      <div className="bg-grey-cardbg rounded-2xl md:w-fit flex flex-col max-w-[300px] md:max-w-[520px] shadow-lg shadow-grey-text2">
        <h2 className="text-black3 font-noticia text-2xl md:text-5xl font-normal border-b-4 md:border-b-8 border-orange-solid2 py-3 md:py-8 text-center">
          Book Your Table
        </h2>
        <form method="POST" className="flex flex-col gap-3 md:gap-6 p-3 md:p-10">
          <div className="formDiv">
            <label htmlFor="name" className="formLabel">
              Name <span className="text-sm absolute">*</span>
            </label>
            <input
              className="formInput"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInput}
              placeholder="Your Name"
            />
          </div>

          <div className="formDiv">
            <label htmlFor="email" className="formLabel">
              Email <span className="text-sm absolute">*</span>
            </label>
            <input
              className="formInput"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              placeholder="Your Email"
            />
          </div>

          <div className="flex justify-between">
            <div className="formDiv w-[45%]">
              <label htmlFor="work" className="formLabel">
                Date <span className="text-sm absolute">*</span>
              </label>
              <input
                className="formInput cursor-pointer"
                min={new Date().toISOString().split("T")[0]}
                max="2024-12-31"
                type="date"
                name="date"
                id="date"
                autoComplete="off"
                pattern="\d{1,2}/\d{1,2}/\d{4}"
                value={user.date}
                onChange={handleInput}
              />
            </div>

            <div className="formDiv w-[45%]">
              <label htmlFor="time" className="formLabel">
                Time <span className="text-sm absolute">*</span>
              </label>
              <select
                className="formInput cursor-pointer"
                type="time"
                name="time"
                id="time"
                autoComplete="off"
                value={user.time}
                onChange={handleInput}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="formDiv w-[45%]">
              <label htmlFor="noOfGuests" className="formLabel">
                Guests <span className="text-sm absolute">*</span>
              </label>
              <select
                className="formInput cursor-pointer"
                type="number"
                name="noOfGuests"
                id="noOfGuests"
                value={user.noOfGuests}
                onChange={handleInput}
              >
                <option value="" disabled selected>
                  0
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className="formDiv w-[45%]">
              <label htmlFor="tableNumber" className="formLabel">
                Table No.
              </label>
              <select
                className="formInput cursor-pointer"
                type="number"
                name="tableNumber"
                id="tableNumber"
                value={user.tableNumber}
                onChange={handleInput}
              >
                <option value="" selected>
                  No Preference
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className="formDiv">
            <label htmlFor="message" className="formLabel">
              Special Request
            </label>
            <textarea
              rows="3"
              cols="40"
              className="formInput mt-1 resize-none"
              name="message"
              id="message"
              autoComplete="off"
              value={user.message}
              onChange={handleInput}
              placeholder="Message"
            />
          </div>

          <input
            type="submit"
            name="bookTable"
            id="bookTable"
            value="Book Table"
            onClick={submitHandler}
            className="bg-orange-solid2 py-1 md:py-3 px-4 md:px-8 uppercase text-center font-notosans text-lg md:text-2xl font-bold text-white mt-2 rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg shadow-grey-text2 transition-all duration-300"
          />
        </form>
      </div>
    </>
  );
};

export default BookTableForm;
