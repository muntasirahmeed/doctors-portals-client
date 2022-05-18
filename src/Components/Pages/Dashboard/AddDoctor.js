import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../../Shared/Spinner/Spinner";
const AddDoctor = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://shrouded-retreat-40682.herokuapp.com/service").then((res) =>
      res.json()
    )
  );
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [formLoading, setFormLoading] = useState(false);
  const imgbbAPIkey = "2b5ad21bbf83d99dd03a79f73a3176ba";
  const onSubmit = (data) => {
    setFormLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const doctorImg = result.data.image.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speaciality: data.speaciality,
            image: doctorImg,
          };

          fetch("https://shrouded-retreat-40682.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearar ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setFormLoading(false);
                reset();
                toast.success("Doctor added successfully");
              } else {
                toast.error("Failed to add doctor");
              }
            });
        }
      });
  };
  if (isLoading || formLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <span> </span>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-md  btn-accent text-white drawer-button lg:hidden "
        >
          Dashboard Items
        </label>
      </div>

      {/*//! form area  */}
      <div className="w-5/6 md:w-2/6 mx-auto mt-3 md:mt-5 bg-gray-200 px-5 pt-3 pb-5 rounded-lg">
        <h1 className="text-center text-2xl font-semibold capitalize text-secondary">
          Add a doctor
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required!",
                },
              })}
            />
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600 mt-1 pl-1">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Enter valid email!",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600 mt-1 pl-1">
                {errors.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600 mt-1 pl-1">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Speaciality</span>
            </label>
            <select
              className="select select-bordered w-full "
              {...register("speaciality")}
            >
              {services.map((service) => (
                <option className="" key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-7 ">
            <input
              type="file"
              className=" text-md file:text-accent file:mr-10  file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-base-100 hover:file:bg-gray-300 text-accent"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required!",
                },
              })}
            />
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-600 mt-1  pl-1">
                {errors.image?.message}
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Add "
            className="btn  btn-secondary w-full mt-8 text-white uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
