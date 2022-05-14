import React from "react";

const MyReview = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <h1 className="text-2xl text-accent font-semibold py-5 ">
          {" "}
          My Reviews
        </h1>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-accent text-white drawer-button lg:hidden "
        >
          Dashboard Items
        </label>
      </div>
    </div>
  );
};

export default MyReview;
