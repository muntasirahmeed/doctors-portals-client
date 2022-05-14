import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div className="">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-xl md:text-2xl text-accent font-semibold  ">
          {" "}
          My Appointments
        </h1>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-accent text-white drawer-button lg:hidden "
        >
          Dashboard Items
        </label>
      </div>
      <div className="overflow-x-auto px-5 mb-10">
        <table className="table w-full">
          <thead>
            <tr className=" uppercase">
              <th className="text-lg hidden md:block ">NO</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Service</th>
              <th className="text-lg">Date </th>
              <th className="text-lg">Time </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={index} className="hover">
                <th className="capitalize font-semibold text-gray-600 hidden md:block">
                  {index + 1}
                </th>
                <td className="capitalize font-semibold text-gray-600">
                  {a.patientName}
                </td>
                <td className="capitalize font-semibold text-gray-600">
                  {a.treatment}
                </td>
                <td className="capitalize font-semibold text-gray-600">
                  {a.date}
                </td>
                <td className="capitalize font-semibold text-gray-600">
                  {a.slot}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
