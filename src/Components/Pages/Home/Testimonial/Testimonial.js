import React from "react";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import SingleReview from "../singleReview/SingleReview";
import qoute from "../../../../assets/icons/quote.svg";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      img: people1,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      img: people2,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      img: people3,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="container mx-auto ">
      <div className="flex justify-between items-center space-x-2 mx-4 md:mx-0">
        <div className="">
          <h2 className="text-secondary text-xl font-bold mb-2">Testimonial</h2>
          <h1 className="text-accent text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img src={qoute} className="w-32" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
