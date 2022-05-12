import React from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({date,setDate}) => {
 
  return (
    <div
      className="hero h-full md:h-[95vh] container mx-auto bg-no-repeat bg-center sm:bg-none"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content px-4 md:px-0 flex-col lg:flex-row-reverse justify-between">
        <div>
          <img
            src={chair}
            alt="chair img"
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
          />
        </div>
        <div className="mr-0 md:mr-20">
          <div className="shadow rounded-lg ">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
