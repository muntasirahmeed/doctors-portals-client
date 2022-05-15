import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [booked, setBooked] = useState(null);

  const formatedDate = format(date, "PP");
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery(["availabe", formatedDate], () =>
    fetch(
      `https://shrouded-retreat-40682.herokuapp.com/available?date=${formatedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="pt-16 pb-10 text-center text-secondary text-xl">
        Available Appointments on {format(date, "PP")}
      </h2>
      <div className="grid py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            setBooked={setBooked}
          ></Booking>
        ))}
      </div>
      {booked && (
        <BookingModal
          date={date}
          setBooked={setBooked}
          booked={booked}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
