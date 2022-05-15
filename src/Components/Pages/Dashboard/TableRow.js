import React from "react";

const TableRow = ({ user, index }) => {
  return (
    <tbody>
   
      <tr  className="hover">
        <th className="capitalize font-semibold text-gray-600 ">{index + 1}</th>
        <td className="capitalize font-semibold text-gray-600">
          {user?.email}
        </td>
     
        <td className="capitalize font-semibold text-gray-600">Quality Control Specialist</td>
        <td className="capitalize font-semibold text-gray-600">Blue</td>
      </tr>
    </tbody>
  );
};

export default TableRow;
