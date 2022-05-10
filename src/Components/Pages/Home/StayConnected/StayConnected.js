import React from "react";
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
const StayConnected = () => {
  return (
    <div className="mx-4 md:mx-0 p">
      <div
        className="container mx-auto py-10 "
        style={{ backgroundImage: `url(${appointment}) ` }}
      >
        <div className="text-center">
          <h1 className="text-xl font-bold text-secondary">Contact Us</h1>
          <h1 className="text-4xl text-white">Stay connected with us</h1>
        </div>
        <form>
          <div className="w-full  md:w-1/2 mx-auto flex flex-col items-center mt-10 px-4 md:px-0 ">
            <input
              type="email"
              placeholder=" Email Address"
              class="input h-10 w-full max-w-sm mb-4"
            />
            <input
              type="text"
              placeholder="Subject"
              class="input h-10 w-full max-w-sm mb-4"
            />
            <textarea
              class="textarea w-full max-w-sm mb-8"
              placeholder="Your message"
            ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StayConnected;
