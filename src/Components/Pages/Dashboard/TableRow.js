import React from "react";
import { toast } from "react-toastify";

const TableRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to made admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfuly made an admin");
          refetch();
        }
      });
  };
  return (
    <>
      <tr className="hover">
        <th className="capitalize font-semibold text-gray-600 ">{index + 1}</th>
        <td className=" font-semibold text-gray-600">{email}</td>

        <td className="capitalize font-semibold ">
          {role !== "admin" && (
            <button class="btn btn-sm text-white" onClick={makeAdmin}>
              Make admin
            </button>
          )}
        </td>
        <td className="capitalize font-semibold text-gray-600">
          <button class="btn btn-sm btn-error">Remove User</button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
