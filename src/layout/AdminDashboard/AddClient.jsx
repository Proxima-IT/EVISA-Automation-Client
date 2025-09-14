import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddClient = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post(`${import.meta.env.VITE_API_URL}/clients`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Client data added successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to create data", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <div className="w-full border border-teal-800 rounded-lg p-6 font-montserrat mb-4">
      <div className="text-lg font-roboto text-center font-bold text-white mb-4 bg-teal-800 w-full lg:w-1/4 px-3 py-1 mx-auto rounded-md">
        Add New Client
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-10 mt-3 w-full "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full">
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Name
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder="Enter Client Name"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Passport number
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              // value={data.email}

              placeholder="Enter Passport number"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Date of birth
            </label>
            <input
              type="date"
              {...register("dob")}
              // value={data.email}

              placeholder="Enter Client date of birth"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">Email</label>
            <input
              type="email"
              {...register("email")}
              // value={data.email}

              placeholder="Enter Client Email"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">Phone</label>
            <input
              type="text"
              {...register("phone")}
              // value={data.email}

              placeholder="Enter Client Phone Number"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*  Gender */}
          <div className="mb-2">
            <label className="block text-base font-medium text-left text-black mb-2">
              Status
            </label>

            <select
              {...register("status")}
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="">
            <label className=" text-xl font-medium text-black ">
              Appointment Date
            </label>
            <input
              type="text"
              {...register("appointment.date")}
              // value={data.email}

              placeholder="Enter Appointment Date"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Appointment TIme
            </label>
            <input
              type="text"
              {...register("appointment.time")}
              placeholder="Enter Appointment TIme"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Confirmation ID
            </label>
            <input
              type="text"
              {...register("appointment.confirmationId")}
              placeholder="Enter Confirmation ID"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <input
            type="submit"
            value="Create Client"
            className="lg:w-1/2 w-full mx-auto lg:col-span-2 bg-yellow-700 mt-3 rounded-md px-4 py-2 shadow-sm text-white hover:bg-yellow-400 transition-all duration-300 font-medium cursor-pointer"
          />
        </div>
      </form>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddClient;
