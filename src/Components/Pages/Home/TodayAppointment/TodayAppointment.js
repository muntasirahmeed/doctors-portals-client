import React from "react";
import doctor from "../../../../assets/images/doctor-small.png";
import appoinment from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
const TodayAppointment = () => {
  return (
    <div className="mt-10 md:mt-52 mb-20 mx-4 md:mx-0">
      <div
        className="container mx-auto "
        style={{ backgroundImage: `url(${appoinment}) ` }}
      >
        <div className="flex flex-col lg:flex-row items-center  mx-4 md:mx-0  ">
          {/* <div className="w-full md:w-1/2 "> */}
          <div className=" flex-1 ">
            <img
              src={doctor}
              className=" mt-[-100px] hidden lg:block  "
              alt=""
            />
          </div>
          {/* <div className="w-full md:w-1/2 pr-0 md:pr-10"> */}
          <div className="flex-1 pr-0 md:pr-28 py-6">
            <h2 className="text-xl text-secondary mb-5 font-bold">
              Appointment
            </h2>
            <h1 className="text-4xl font-bold mt-5 md:mt-0 text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayAppointment;
