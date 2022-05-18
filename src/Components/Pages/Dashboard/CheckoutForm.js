import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = (appointment) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, patientName, patient } = appointment.appointment;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          console.log(data);
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    // confrim card payment
    setSuccess("");
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransectionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is Successfull");
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className={` ${
            !clientSecret ? "bg-red-600" : "bg-green-600"
          } px-5 py-1 mt-5 text-white font-semibold rounded-sm`}
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-sm text-error pt-3">{cardError}</p>}
      {success && (
        <>
          <p className="text-sm text-success pt-3">{success}</p>
          <p className="text-sm text-success ">
            Transection Id :{" "}
            <span className="text-accent">{transectionId}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
