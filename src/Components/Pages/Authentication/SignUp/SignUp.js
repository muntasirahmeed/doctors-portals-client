import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="h-[95vh] w-full flex justify-center items-center mb-16 ">
      <div className=" ">
        <h2 className="text-3xl text-center text-accent font-bold mb-9">
          Sign Up
        </h2>
        <div className="w-[320px] md:w-[385px]  px-5 ">
          <form>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="btn  btn-accent w-full mt-8 text-white"
            />
            <p className="text-center text-sm mt-3">
              <span className="text-gray-600">Already have an account?</span>{" "}
              <span className="text-secondary">
                <Link to="/login">Login</Link>
              </span>{" "}
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
