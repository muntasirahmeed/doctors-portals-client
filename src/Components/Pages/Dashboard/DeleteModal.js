import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ doctor, refetch, setDeletingDoc }) => {
  const { email, name } = doctor;

  const handleDelete = () => {
    const url = `https://shrouded-retreat-40682.herokuapp.com/doctor/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor ${name} deleted successfully`);
          refetch();
          setDeletingDoc(null);
        }
      });
  };
  return (
    <div className="bg-black">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-center text-4xl capitalize ">
            Are you sure ?
          </h3>
          <p className="py-4 text-center text-xl">
            You want to delete doctor <span className="text-error">{name}</span>{" "}
            !
          </p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={() => handleDelete()}>
              Delete
            </button>
            <label htmlFor="my-modal-6" className="btn btn-success">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
