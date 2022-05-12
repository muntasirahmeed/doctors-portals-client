import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Spinner from "../../../Shared/Spinner/Spinner";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);
  if (gLoading || loading) {
    return <Spinner></Spinner>;
  }
  let errorMsg;
  if (error || gError) {
    if (error?.message.includes("auth/user-not-found"))
      errorMsg = <p className="text-sm text-red-500 pl-1">User not exist!</p>;
    else if (gError?.message.includes("closed")) {
      errorMsg = <p className="text-sm text-red-500 pl-1">Popup Closed</p>;
    } else {
      errorMsg = (
        <p className="text-sm text-red-500 pl-1">
          {error?.message} {gError?.message}
        </p>
      );
    }
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="h-[90vh] flex justify-center items-center mb-16">
      <div className=" ">
        <h2 className="text-3xl text-center text-accent font-bold mb-9">
          Login
        </h2>
        <div className="w-[320px] md:w-[385px] px-5 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full "
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Enter valid email!",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-600 mt-1 pl-1">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-600 mt-1 pl-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full "
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-600 mt-1  pl-1">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-600 mt-1  pl-1">
                  {errors.password.message}
                </span>
              )}

              {errors.password?.message ? (
                ""
              ) : (
                <label className="label">
                  <span className="mt-[-5px] text-xs">Forget Password ?</span>
                </label>
              )}
            </div>
            {errorMsg}
            <input
              type="submit"
              value="Login"
              className="btn  btn-accent w-full mt-3 text-white"
            />
            <p className="text-center text-sm mt-3">
              <span className="text-gray-600">New to Doctors Portal?</span>{" "}
              <span className="text-secondary">
                <Link to="/signup">Create new account</Link>
              </span>{" "}
            </p>
          </form>
          <div>
            <div className="divider">Or</div>
            <button
              className="btn btn-outline btn-accent w-full text-white"
              onClick={() => signInWithGoogle()}
            >
              Continue With google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
