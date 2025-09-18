import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const EditClient = () => {
  const [client, setClient] = useState({});

  const { id } = useParams();
  console.log(id);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/clients/${id}`).then((res) => {
      console.log(res.data.data);
      setClient(res.data.data);
    });
  }, []);

  console.log(client);

  const onSubmit = (data) => {
    console.log(data);

    axios
      .patch(`${import.meta.env.VITE_API_URL}/clients/${id}`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Client data updated successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update data", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <div>
      <div className="w-full border border-teal-800 rounded-lg p-6">
        <div className="text-lg font-roboto text-center font-bold text-white mb-4 bg-teal-800 w-full lg:w-1/4 px-3 py-1 mx-auto rounded-md">
          Edit Client Data
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col   md:flex-row gap-10 mt-3 w-full "
        >
          <div className="grid grid-cols-2 gap-5 mx-auto w-full   dark:text-white">
            <div className="">
              <label className=" text-xl font-medium  ">
                Name
                {/* <span className="text-red-600">*</span> */}
              </label>
              <input
                type="text"
                {...register("name")}
                // value={data.email}
                defaultValue={client.name}
                placeholder="Update Client Name"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="">
              <label className=" text-xl font-medium  ">
                Passport number
              </label>
              <input
                type="text"
                {...register("passportNumber")}
                // value={data.email}
                defaultValue={client.passportNumber}
                placeholder="Update Passport number"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="">
              <label className=" text-xl font-medium  ">
                Date of birth
              </label>
              <input
                type="date"
                {...register("dob")}
                // value={data.email}
                defaultValue={client.dob}
                placeholder="Update Client date of birth"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="">
              <label className=" text-xl font-medium  ">Email</label>
              <input
                type="email"
                {...register("email")}
                // value={data.email}
                defaultValue={client.email}
                placeholder="Update Client Email"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="">
              <label className=" text-xl font-medium  ">Phone</label>
              <input
                type="text"
                {...register("phone")}
                // value={data.email}
                defaultValue={client.phone}
                placeholder="Update Client Phone Number"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>

            {/*  Gender */}
            <div className="mb-2">
              <label className="block text-base font-medium text-left text-gray-50 mb-2">
                Status
              </label>

              <select
                {...register("status")}
                defaultValue={client.status}
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="">
              <label className=" text-xl font-medium  ">
                Appointment Date
              </label>
              <input
                type="text"
                {...register("appointment.date")}
                // value={data.email}
                defaultValue={client.appointment?.date}
                placeholder="Update Appointment Date"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="">
              <label className=" text-xl font-medium  ">
                Appointment TIme
              </label>
              <input
                type="text"
                {...register("appointment.time")}
                defaultValue={client.appointment?.time}
                placeholder="Update Appointment Time"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="">
              <label className=" text-xl font-medium  ">
                Confirmation ID
              </label>
              <input
                type="text"
                {...register("appointment.confirmationId")}
                defaultValue={client.appointment?.confirmationId}
                placeholder="Update Confirmation ID"
                className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200 rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>

            <input
              type="submit"
              value="Update"
              className="lg:w-1/2 w-full mx-auto lg:col-span-2 bg-yellow-700 mt-3 rounded-md px-4 py-2 shadow-sm text-white hover:bg-yellow-400 transition-all duration-300 font-medium cursor-pointer"
            />
          </div>
        </form>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EditClient;
