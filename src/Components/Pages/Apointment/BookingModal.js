import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const BookingModal = ({ booked, setBooked, date }) => {
  const { _id, name, slots } = booked;
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const treatment = name;
    const slot = event.target.timeslot.value;
    const patient = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const data = { _id, treatment, slot, patient, email, phone };
    setBooked(null);
  };
  return (
    <div>
      <input type="checkbox" id="booked" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box md:w-4/12 w-10/12 mx-auto relative">
          <label
            htmlFor="booked"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">{booked.name}</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <input
                disabled
                type="text"
                value={format(date, "PP")}
                className="input input-bordered w-full "
              />
              <select
                name="timeslot"
                className="select select-bordered w-full "
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                disabled
                type="text"
                name="name"
                value={user?.displayName || ''}
                className="input input-bordered w-full "
              />
              <input
                disabled
                name="email"
                type="email"
                value={user?.email || ''}
                className="input input-bordered w-full "
              />
              <input
                type="number"
                name="phone"
                placeholder="PHONE NUMBER"
                className="input input-bordered w-full "
              />

              <input type="submit" className="btn btn-accent " value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
