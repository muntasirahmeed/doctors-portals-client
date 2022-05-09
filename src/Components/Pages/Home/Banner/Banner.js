import React from "react";
import chair from "../../../../assets/images/chair.png";
import bg from '../../../../assets/images/bg.png'
const Banner = () => {
  return (
      <div class="hero min-h-screen container mx-auto bg-no-repeat bg-center " style={{backgroundImage:`url(${bg})`}}>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt='chair img' class="max-w-full md:max-w-lg rounded-lg shadow-2xl" />
        <div className="p">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6 pr-0 md:pr-6 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button class="btn btn-primary uppercase  bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
