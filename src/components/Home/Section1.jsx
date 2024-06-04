import React from "react";
import bigFood from "../../assets/Big Food.png";
import smallFood from "../../assets/Small Food.png";
import deliveryImg from "../../assets/Delivery.png";
import dinningImg from "../../assets/Dinning.png";
import takeawayImg from "../../assets/Takeaway.png";
import Heading from "./Heading";
import OfferingCard from "./OfferingCard";
import Cuisine from "./Cuisine";
import northIndian from "../../assets/North Indian.png";
import italian from "../../assets/Italian.png";
import chinese from "../../assets/Chinese.png";
import continental from "../../assets/Continental.png";
import southIndian from "../../assets/South Indian.png";
import punjabi from "../../assets/Punjabi.png";
import arrow from "../../assets/Line.png";
import TypeWriter from "./TypeWriter";
import { Link, Route } from "react-router-dom";
import Lottie from "lottie-react";
import onlineOrderAnimation from "./../../assets/lottie/onlineOrderAnimation.json";
import dinnningAnimation from "./../../assets/lottie/dinningAnimation.json";
import takeawayAnimation from "./../../assets/lottie/takeawayAnimation.json";
import landingAnimation from "./../../assets/lottie/landingAnimation.json";

const Section1 = () => {
  return (
    <div className="flex flex-col overflow-x-auto bg-gradient-to-b from-[#FFEBC342] to-[#FF573308]">
      {/* Landing Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between px-10 pt-10">
        <div className="flex flex-col md:w-[50%]">
          <p className="font-quando font-normal leading-tight text-4xl md:text-8xl mt-5 md:mt-[6.5rem]">
            What are you craving for ?
          </p>

          <p className="font-sniglet font-normal mt-0 md:mt-8 text-[2.5rem] md:text-8xl bg-gradient-to-r from-pink-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent leading-normal">
            <TypeWriter />
          </p>
        </div>
        {/* <div className="hidden md:relative w-[50%]">
          <img src={bigFood} className="absolute right-0" />
          <img src={smallFood} className="absolute right-[42%] top-[48%]" />
        </div> */}
        <div className="w-[80%] md:w-[40%]">
          <Lottie animationData={landingAnimation} loop={true} />
        </div>
      </div>

      {/* Our Offerings */}
      <div className="relative bg-orange-banner flex flex-col items-center pt-[4rem] h-[250px] mt-10 md:mt-[160px] rounded-3xl">
        <Heading text={"Our Offerings"} />

        <div className="absolute top-[180px] flex flex-wrap justify-center gap-[3.5rem] md:gap-[6.5rem]">
          <Link to="/order-online">
            <OfferingCard
              animation={onlineOrderAnimation}
              title={"Order Online"}
              desc={"Let your food walk for you."}
            />
          </Link>

          <Link to="/book-table">
            <OfferingCard
              animation={dinnningAnimation}
              title={"Book Your Table"}
              desc={"Come for the food, stay for the memories."}
            />
          </Link>

          <Link to="/order-online">
            <OfferingCard
              animation={takeawayAnimation}
              title={"Takeaway"}
              desc={"Your hunger can't wait, grab a plate!"}
            />
          </Link>
        </div>
      </div>

      {/* Explore Cuisine */}
      <div className="flex flex-col items-center pt-[55rem] md:pt-[20rem] ">
        <div className="w-[85%] md:w-[50%]">
          <Heading text={"Explore your favourite cuisine"} />
        </div>

        <div className="flex flex-wrap gap-10 md:gap-16 justify-between items-center pt-12 w-[85%] md:w-[50%]">
          <Cuisine img={northIndian} name={"North Indian"} />
          <Cuisine img={italian} name={"Italian"} />
          <Cuisine img={chinese} name={"Chinese"} />

          <Cuisine img={continental} name={"Continental"} />
          <Cuisine img={southIndian} name={"South Indian"} />
          <Cuisine img={punjabi} name={"Punjabi"} />
        </div>

        <Link to="/order-online">
          <button className="flex items-center px-4 md:px-8 py-3 md:py-5 bg-orange-solid2 rounded-[30px] my-20 hover:scale-105 transition-all duration-500 hover:shadow-[3px_3px_20px_3px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center">
              <p className="leading-6">See Full Menu</p>
              <img src={arrow} height={24} width={24} className="mt-0.5" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
