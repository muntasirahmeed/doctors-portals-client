import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L0iOtAL8nuA0IetlYxU63Bvia0gn5ZwGjcHEvpDwrsePOe7zINq2mtp7k4ZkFoSX1GHkxKnsuNu2fnLpJqI5GNP00FYxhFiAA"
  );
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(
    ["bookedAppointment", id],
    () =>
      fetch(`http://localhost:5000/booking/${id}`, {
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
    <div className="px-2">
      <h1 className="text-purple text-4xl text-center py-5 ">Payment Method</h1>
      <div className="flex flex-col md:flex-row justify-center h-[60vh] items-center  gap-5">
        <div class="card w-full md:w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-accent text-2xl">
              {" "}
              Hello {appointment.patientName}{" "}
            </h2>
            <h2 class="card-title text-accent">
              Pay For{" "}
              <span className="text-secondary">{appointment.treatment}</span>
            </h2>
            <p>
              Your Appointment Date :{" "}
              <span className="text-secondary">{appointment.date}</span>
              <br /> Time :{" "}
              <span className="text-secondary ">{appointment.slot}</span>
            </p>
            <p className="text-accent">
              You have to Pay :{" "}
              <span className="font-semibold">${appointment.price}</span>
            </p>
          </div>
        </div>
        <div class="card w-full md:w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
