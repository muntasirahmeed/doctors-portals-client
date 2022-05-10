import React from "react";

const SingleReview = ({ review }) => {
  const { name, location, description, img } = review;
  return (
    <div className="px-10 mb-10">
      <p className="text-normal text-gray-600 font-semibold">{description}</p>
      <div className="flex items-center space-x-5 mt-8">
        <div class="avatar">
          <div class="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="avatar" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-accent">{name}</h1>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
