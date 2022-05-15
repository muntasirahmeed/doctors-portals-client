import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import TableRow from "./TableRow";

const Users = () => {
  const { isLoading, error, data } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-xl md:text-2xl text-accent font-semibold  ">
          {" "}
          All Users {data.length}
        </h1>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-accent text-white drawer-button lg:hidden "
        >
          Dashboard Items
        </label>
      </div>
      {/* --------table--------- */}
      <div className="overflow-x-auto px-5 mb-10">
        <table className="table w-full">
        <thead>
            <tr className=" uppercase">
              <th className=" "></th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Service</th>
              <th className="text-lg">Date </th>
             
            </tr>
          </thead>
          {data.map((user,index)=><TableRow key={user._id} index={index} user={user} ></TableRow>)}
        </table>
      </div>
    </div>
  );
};

export default Users;
