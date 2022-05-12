import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center mb-16">
      <div className=" ">
        <h2 className="text-3xl text-center text-accent font-bold mb-9">
          Login
        </h2>
        <form className="w-[320px] md:w-[385px] px-5 ">
          <div class="form-control ">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
      
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control ">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
            
              class="input input-bordered w-full "
            />
            <label class="label">
              <span class="mt-[-5px] text-xs">Forget Password ?</span>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            class="btn  btn-accent w-full mt-3 text-white"
          />
          <p className="text-center text-sm mt-3">
            <span className="text-gray-600">New to Doctors Portal?</span>{" "}
            <span className="text-secondary">
              <Link to="/signup">Create new account</Link>
            </span>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
