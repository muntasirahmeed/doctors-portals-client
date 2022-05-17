import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile bg-blue-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link
              className="font-semibold  text-accent mb-2 focus:bg-gray-300 focus:text-accent"
              to="/dashboard"
            >
              My Appointments
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-accent mb-2 focus:bg-gray-300 focus:text-accent"
              to="/dashboard/myreview"
            >
              My Reviews
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link
                  className="font-semibold text-accent mb-2 focus:bg-gray-300 focus:text-accent"
                  to="/dashboard/users"
                >
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-accent mb-2 focus:bg-gray-300 focus:text-accent"
                  to="/dashboard/add-doctor"
                >
                  Add Doctor
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-accent mb-2 focus:bg-gray-300 focus:text-accent"
                  to="/dashboard/manage-doctors"
                >
                  Manage Doctors
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
