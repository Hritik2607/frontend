import React from "react";
import Lottie from "lottie-react";


const OfferingCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-0 md:gap-1.5 p-4 w-[220px] md:w-[268px] bg-white shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)] rounded-xl cursor-pointer hover:scale-110 transition-all duration-500">
      <div className="h-[120px] w-[120px]">
        <Lottie animationData={props.animation} loop={true} />
      </div>
      <p className="font-sourcecodepro font-medium text-lg text-center text-grey-text">
        {props.title}
      </p>
      <p className="font-sourcecodepro font-normal text-sm w-[95%] leading-5 text-center">
        {props.desc}
      </p>
    </div>
  );
};

export default OfferingCard;
