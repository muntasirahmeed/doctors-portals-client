import React from "react";
import chair from "../../../../assets/images/chair.png";
import bg from '../../../../assets/images/bg.png'
const Banner = () => {
  return (
      <div className="hero h-[90vh] container mx-auto bg-no-repeat bg-center sm:bg-none" style={{backgroundImage:`url(${bg})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt='chair img' className="max-w-full md:max-w-lg rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 pr-0 md:pr-6 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary uppercase  bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
