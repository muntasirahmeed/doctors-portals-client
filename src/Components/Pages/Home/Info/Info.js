import React from "react";

const Info = ({ img, bgColor, title, description, imgWidth, imgHeight }) => {
  return (
    <div className="">
      <div className={`card lg:card-side  shadow-xl ${bgColor} px-4 py-2`}>
        <figure>
          <img
            src={img}
            className={`${imgWidth}${imgHeight} mt-4 md:mt-0`}
            alt="Album"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title ">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
