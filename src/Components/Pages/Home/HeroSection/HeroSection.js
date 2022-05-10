import React from "react";
import treatment from "../../../../assets/images/treatment.png";
const HeroSection = () => {
  return (
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center  mx-4 md:mx-0 my-24">
        {/* <div className="w-full md:w-1/2 "> */}
        <div className=" w-full  md:w-1/2">
          <img
            src={treatment}
            class="w-full mx-auto md:max-w-sm  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        {/* <div className="w-full md:w-1/2 pr-0 md:pr-10"> */}
        <div className="w-full md:w-1/2 pr-0 md:pr-28">
          <h1 class="text-5xl font-bold mt-5 md:mt-0 text-accent">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn btn-primary uppercase  bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
