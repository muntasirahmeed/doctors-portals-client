import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navber = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth)
  }
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contactus">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        {user ? (
          <button className="font-semibold" onClick={logOut}>SignOut</button>
        ) : (
          <Link to="/login">Login</Link>
        )}{" "}
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar px-0">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="btn px-0 btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-md font-semibold ">
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
