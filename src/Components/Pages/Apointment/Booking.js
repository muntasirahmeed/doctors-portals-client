import React from "react";

const Booking = ({ booking, setBooked }) => {
  const { name, slots,price } = booking;
  return (
    <div className="card ">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span className="text-accent">{slots[0]}</span>
          ) : (
            <span className="text-rose-500 capitalize">
              {"All Slots Booked"}
            </span>
          )}{" "}
        </p>
        <p className="text-sm uppercase text-neutral">
          {slots.length} {slots.length ? "Spaces" : "Space"} Availabe{" "}
        </p>
        <p>Price: ${ price}</p>
        <div className="">
          <label
            htmlFor="booked"
            className={`btn btn-primary uppercase   text-white font-bold ${
              slots.length === 0
                ? "bg-accent"
                : "bg-gradient-to-r from-secondary to-primary"
            }`}
            onClick={() => setBooked(booking)}
            disabled={slots.length === 0}
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
