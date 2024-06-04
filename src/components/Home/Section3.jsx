import React from "react";
import Heading from "./Heading";
import findUsUnderline from "../../assets/Find Us Underline.png";
import FindUsText from "./FindUsText";
import findUsCartoon from "../../assets/Find Us Cartoon2.png";
import customerReviewUnderline from "../../assets/Customer Review Underline.png";
import customerReviewCartoon from "../../assets/Customer Review Cartoon.png";
import ReviewCard from "./ReviewCard";
import rating3 from "../../assets/4.3 Rating.png";
import rating5 from "../../assets/4.5 Rating.png";
import rating8 from "../../assets/4.8 Rating.png";
import rating5S from "../../assets/5 Rating.png";
import customer1 from "../../assets/Customer1.png";
import customer2 from "../../assets/Customer2.png";
import customer3 from "../../assets/Customer3.png";
import customer4 from "../../assets/Customer4.png";
import customer5 from "../../assets/Customer5.png";
import Lottie from "lottie-react";
import contactUsAnimation from "../../assets/lottie/locationAnimation.json";
import starAnimation from "./../../assets/lottie/starAnimation.json";
import boxStarAnimation from "./../../assets/lottie/boxStarAnimation.json";
import reviewAnimation from "./../../assets/lottie/reviewAnimation.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Section3 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#FFEBC309] to-[#FF573312]">
      {/* Find Us */}
      <div className="flex flex-col mt-20">
        <div className="relative">
          <div>
            <Heading text={"Find Us"} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-4 md:top-10 -z-10">
            <img
              src={findUsUnderline}
              alt="Underline"
              className="w-[120px] md:w-[220px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-center md:justify-around relative mt-6">
          <div className="w-[80%] md:w-[35%]">
            <Lottie animationData={contactUsAnimation} loop={true} />
          </div>
          <div className=" md:w-[500px] md:h-[500px] md:bg-orange-blob rounded-full py-10">
            <FindUsText
              heading={"Location"}
              text={"5/12, Patuli, Kolkata | 700094"}
            />
            <FindUsText
              heading={"Hours"}
              boldtext={"Mon-Thu -"}
              text={"10:00 AM to 10:30 PM"}
            />
            <FindUsText boldtext={"Fri-Sun -"} text={"10:00 AM to 11:30 PM"} />
            <FindUsText
              heading={"Contact"}
              boldtext={"Phone -"}
              text={"7059310926"}
            />
            <FindUsText
              boldtext={"Email -"}
              text={"contactus@flavorcrave.com"}
            />
          </div>
        </div>
      </div>

      {/* Customer Review */}
      <div className="mt-16 md:mt-24 mb-32">
        <div className="relative">
          <div>
            <Heading text={"Customer Review"} />
          </div>
          <img
            src={customerReviewUnderline}
            alt="Underline"
            className="absolute left-1/2 -translate-x-1/2 top-4 md:top-8 w-[180px] md:w-[250px] -z-10"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:relative mt-[3rem] md:mt-[23rem] md:mb-48">
          {/* <div className='absolute -top-12 bg-orange-blob w-[600px] h-[600px] rotate-45 rounded-3xl'></div> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="750"
            height="750"
            viewBox="0 0 837 837"
            fill="none"
            className="absolute"
          >
            <path
              d="M29.7107 489.33C-9.34175 450.277 -9.34175 386.961 29.7107 347.908L347.909 29.7104C386.961 -9.342 450.278 -9.34201 489.33 29.7104L807.528 347.908C846.581 386.961 846.581 450.277 807.528 489.33L489.33 807.528C450.278 846.58 386.961 846.58 347.909 807.528L29.7107 489.33Z"
              fill="#FF5733"
              fill-opacity="0.14"
            />
          </svg> */}
          <div className="h-[290px] md:h-[380px] w-[290px] md:w-[380px]">
            <Lottie animationData={reviewAnimation} loop={true} />
          </div>

          <div className="hidden md:block absolute left-[40rem] -top-[15rem]">
            <ReviewCard
              img={customer4}
              name={"Naina Agrawal"}
              message={
                "The service we received was so amazing and we will definitely be back again."
              }
              rate={rating8}
            />
          </div>
          <div className="hidden md:block absolute right-[28rem] top-[16rem]">
            <ReviewCard
              img={customer3}
              name={"Kuldeep Singh"}
              message={
                "The ambiance is very welcoming and charming. Staff are knowledgeable and make great recommendations."
              }
              rate={rating3}
            />
          </div>
          <div className="hidden md:block absolute left-[22rem] -top-16">
            <ReviewCard
              img={customer2}
              name={"Rupesh Kumar"}
              message={
                "Hospitable hosts, delicious dishes, beautiful presentation and wonderful dessert."
              }
              rate={rating5}
            />
          </div>
          <div className="hidden md:block absolute left-[24rem] top-[15rem]">
            <ReviewCard
              img={customer1}
              name={"Johh Doe"}
              message={
                "I recommend to everyone! I would like to come back here again and again."
              }
              rate={rating5}
            />
          </div>
          <div className="hidden md:block absolute right-[22rem] -top-[4rem]">
            <ReviewCard
              img={customer5}
              name={"Anjali Shukla"}
              message={
                "When we think about celebrations, Flavor Crave is always our first option and it never disappoints."
              }
              rate={rating5S}
            />
          </div>

          <div className="flex md:hidden flex-wrap justify-center gap-16">
            <ReviewCard
              img={customer4}
              name={"Naina Agrawal"}
              message={
                "The service we received was so amazing and we will definitely be back again."
              }
              rate={rating8}
            />
            <ReviewCard
              img={customer3}
              name={"Kuldeep Singh"}
              message={
                "The ambiance is very welcoming and charming. Staff are knowledgeable and make great recommendations."
              }
              rate={rating3}
            />
            <ReviewCard
              img={customer2}
              name={"Rupesh Kumar"}
              message={
                "Hospitable hosts, delicious dishes, beautiful presentation and wonderful dessert."
              }
              rate={rating5}
            />
            <ReviewCard
              img={customer1}
              name={"Johh Doe"}
              message={
                "I recommend to everyone! I would like to come back here again and again."
              }
              rate={rating5}
            />
            <ReviewCard
              img={customer5}
              name={"Anjali Shukla"}
              message={
                "When we think about celebrations, Flavor Crave is always our first option and it never disappoints."
              }
              rate={rating5S}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
