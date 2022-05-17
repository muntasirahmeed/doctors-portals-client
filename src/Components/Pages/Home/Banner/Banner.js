import React from "react";
import chair from "../../../../assets/images/chair.png";
import bg from "../../../../assets/images/bg.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div
      className="hero h-full md:h-[95vh] container mx-auto bg-no-repeat bg-center sm:bg-none "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content px-4 md:px-0 flex-col lg:flex-row-reverse">
        <div>
          <img
            src={chair}
            alt="chair img"
            className="w-full md:max-w-3xl rounded-lg shadow-2xl"
          />
        </div>
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 pr-0 md:pr-6 text-justify text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
