import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ index, doctor, refetch, setDeletingDoc }) => {
  const { email, image, name, speaciality } = doctor;

  return (
    <tr className="hover bg-black">
      <th className="capitalize font-semibold text-gray-600 ">{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td className="capitalize font-semibold ">{name}</td>
      <td className=" font-semibold text-gray-600">{speaciality}</td>

      <td className="capitalize font-semibold text-gray-600">
        <label
          onClick={() => setDeletingDoc(doctor)}
          htmlFor="my-modal-6"
          className="btn  btn-sm btn-error modal-button"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
