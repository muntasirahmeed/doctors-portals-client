import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import DeleteModal from "./DeleteModal";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const [deletingDoc, setDeletingDoc] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-xl md:text-2xl text-accent font-semibold  ">
          {" "}
          Manage Doctors
        </h1>
        <span className="hidden lg:block">
          Total Doctors: {doctors.length}{" "}
        </span>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-md  btn-accent text-white drawer-button lg:hidden "
        >
          Dashboard Items
        </label>
      </div>
      <div>
        <div className="overflow-x-auto px-5 mb-10 ">
          <table className="table w-full ">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>speaciality</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="">
              {doctors.map((doctor, index) => (
                <DoctorsRow
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                  setDeletingDoc={setDeletingDoc}
                ></DoctorsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoc && (
        <DeleteModal
          refetch={refetch}
          doctor={deletingDoc}
          setDeletingDoc={setDeletingDoc}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageDoctors;
