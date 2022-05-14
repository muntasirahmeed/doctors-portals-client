import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
