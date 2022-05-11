import React, { useState } from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { data } from "autoprefixer";
import { format } from "date-fns";
const Apointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      className="hero h-full md:h-[90vh] container mx-auto bg-no-repeat bg-center sm:bg-none"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content px-4 md:px-0 flex-col lg:flex-row-reverse justify-between">
        <div>
          <img
            src={chair}
            alt="chair img"
            className="w-full md:max-w-md rounded-lg shadow-2xl"
          />
        </div>
        <div className="mr-0 md:mr-20">
          <div className="shadow rounded-lg ">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
          <p className=" text-gray-600 text-center md:text-left">
            You have Selected: {format(date, "PP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apointment;
