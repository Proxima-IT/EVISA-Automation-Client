import React from "react";
import { useForm } from "react-hook-form";

const EditClient = () => {
      const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({});
    
      const onSubmit = (data) => {
        console.log(data);
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
        <div className="grid grid-cols-2 gap-5 mx-auto w-full">
          <div className="">
            <label className=" text-xl font-medium text-black ">Name
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder="Update Client Name"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
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

              placeholder="Update Passport number"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
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

              placeholder="Update Client date of birth"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">Email</label>
            <input
              type="email"
              {...register("email")}
              // value={data.email}

              placeholder="Update Client Email"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">Phone</label>
            <input
              type="text"
              {...register("phone")}
              // value={data.email}

              placeholder="Update Client Phone Number"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*  Gender */}
          <div className="mb-2">
            <label className="block text-base font-medium text-left text-gray-50 mb-2">
              Status 
            </label>

            <select
              {...register("status")}
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            >
              <option value="">Select status</option>
              <option value="male">Active</option>
              <option value="female">Pending</option>
              <option value="other">Inactive</option>
            </select>
          </div>

          <div className="">
            <label className=" text-xl font-medium text-black ">
              Appointment Date
            </label>
            <input
              type="text"
              {...register("date")}
              // value={data.email}

              placeholder="Update Appointment Date"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Appointment TIme
            </label>
            <input
              type="text"
              {...register("time")}
        

              placeholder="Update Appointment Time"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium text-black ">
              Confirmation ID
            </label>
            <input
              type="text"
              {...register("confirmationId")}
           

              placeholder="Update Confirmation ID"
              className="w-full h-14 border border-amber-500 placeholder-black  rounded-md px-4 py-2 shadow-lg text-black font-medium mt-2  focus:outline-none "
            />
          </div>
        </div>
      </form>
    </div>
        </div>
    );
};

export default EditClient;