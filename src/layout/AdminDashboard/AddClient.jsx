import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddClient = () => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});
  const selected = watch("hasResidence");
  const fingerprint = watch("fingerprint");
  const entrypermit = watch("entrypermit");

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
      <div className="text-lg font-roboto text-center font-bold text-white  mb-4 bg-teal-600 w-full lg:w-1/4 px-3 py-1 mx-auto">
        Add New Client
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-10 mt-3 w-full "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full text-black dark:text-white">
          <h1 className="text-xl font-bold text-blue-800 col-span-2">
            Identification
          </h1>

          {/* surname  */}
          <div className="">
            <label className=" text-xl font-medium">
              Surname(s) <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/* Surname(s) at birth  */}
          <div className="">
            <label className=" text-xl font-medium">
              Surname(s) at birth <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/* First name  */}
          <div className="">
            <label className=" text-xl font-medium">
              First name <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/* Date of birth(yyyy/mm/dd)  */}
          <div className="">
            <label className=" text-xl font-medium">
              Date of birth(yyyy/mm/dd) <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/* Place of birth  */}
          <div className="">
            <label className=" text-xl font-medium">
              Place of birth <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/* Country of birth  */}
          <div className="">
            <label className=" text-xl font-medium">
              Country of birth <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/* Current nationality  */}
          <div className="">
            <label className=" text-xl font-medium">
              Current nationality <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*  Original nationality  */}
          <div className="">
            <label className=" text-xl font-medium">
              Original nationality <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*   Sex  */}
          <div className="">
            <label className=" text-xl font-medium">
              Sex <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*   Marital status  */}
          <div className="">
            <label className=" text-xl font-medium">
              Marital status <span className="text-red-600">*</span>
              {/* <span className="text-red-600">*</span> */}
            </label>
            <input
              type="text"
              {...register("name")}
              // value={data.email}

              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          <h1 className="text-xl font-bold text-blue-800 col-span-2">
            Journey Doc.
          </h1>

          {/*   Type of passport  */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Type of passport <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*   Passport number  */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Passport number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*   Date of Issue(yyyy/mm/dd)  */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Date of Issue(yyyy/mm/dd) <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              {...register("passportNumber")}
              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*   Valid until(yyyy/mm/dd)  */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Valid until(yyyy/mm/dd) <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              {...register("passportNumber")}
              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*    Issued by  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Issued by <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*    Requestor's email  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Requestor's email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*    Requestor's Address  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Requestor's Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*    Requestor's Phone Number  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Requestor's Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*  redident related */}
          <div className="mb-2 col-span-2">
            <label className="block text-base font-medium text-left  mb-2">
              If you reside in a country other than your country of origin, have
              you permission to return to that country?{" "}
              <span className="text-red-600">*</span>
            </label>

            <select
              {...register("hasResidence")}
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            >
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>

          {/*  Residence title nº  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Residence title nº <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              disabled={selected !== "yes"}
              className={`w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none ${
                selected !== "yes" && "cursor-not-allowed"
              }`}
            />
          </div>

          {/*  Validity end(yyyy/mm/dd)  */}
          <div className="">
            <label className=" text-xl font-medium ">
              Validity end(yyyy/mm/dd) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              disabled={selected !== "yes"}
              className={`w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none ${
                selected !== "yes" && "cursor-not-allowed"
              }`}
            />
          </div>

          {/*  forLife  */}
          <div className="">
            <label className=" text-xl font-medium  ">For life</label> <br />
            <input
              type="checkbox"
              disabled={selected !== "yes"}
              {...register("forLife")}
              className="w-6  h-6 border border-amber-500  rounded-md px-4 py-2  font-medium mt-2  focus:outline-none "
            />
          </div>

          <h1 className="text-xl font-bold text-blue-800 col-span-2">
            Journey
          </h1>

          {/*  Current ocupation  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Current ocupation <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*  Employer's name. Students: teaching establishment  */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Employer's name. Students: teaching establishment{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          {/*  address/phone */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              address/phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*  Purpose of travel */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Purpose of travel <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xl">(1) </span>
              <input
                type="text"
                {...register("passportNumber")}
                placeholder=""
                className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">(2) </span>
              <input
                type="text"
                {...register("passportNumber")}
                placeholder=""
                className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
          </div>
          {/*  Member State of Destination */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Member State of Destination{" "}
              <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xl">(1) </span>
              <input
                type="text"
                {...register("passportNumber")}
                placeholder=""
                className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">(2) </span>
              <input
                type="text"
                {...register("passportNumber")}
                placeholder=""
                className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
              />
            </div>
          </div>

          {/*  Border of first entrance or transit route */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Border of first entrance or transit route{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          <h1 className="text-xl font-bold text-blue-800 col-span-2">Visa</h1>

          <span> Number of entries requested</span>

          <div></div>
          {/* Number of entries requested  */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Number of entries requested
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/* Duration of stay (days  */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Duration of stay (days)
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              className="w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*   intended date */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Intended date of arrival of the first intended stay in the
              Schengen area (aaaa/mm/dd) <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              {...register("passportNumber")}
              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          {/*   intended date */}
          <div className="col-span-2">
            <label className=" text-xl font-medium  ">
              Intended date of departure from the Schengen area after the first
              intended stay <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              {...register("passportNumber")}
              placeholder=""
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>

          <span> Fingerprints </span>

          {/*   intended date */}
          <div className="col-span-2">
            <label className=" text-xl font-medium">
              Fingerprints collected previously for the purpose of applying for
              a Schengen visa <span className="text-red-600">*</span>
            </label>
            <select
              {...register("fingerprint")}
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            >
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>

          {/*   intended date */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Date (yyyy/mm/dd) <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              {...register("passportNumber")}
              placeholder=""
              disabled={fingerprint !== "yes"}
              className={`w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none ${
                fingerprint !== "yes" && "cursor-not-allowed"
              }`}
            />
          </div>
          {/*   Visa sticker number */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Visa sticker number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              disabled={fingerprint !== "yes"}
              className={`w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none ${
                fingerprint !== "yes" && "cursor-not-allowed"
              }`}
            />
          </div>

          <span>
            Entry permit for the final country of destination, where apllicable
          </span>
          <div></div>

          {/*   intended date */}
          <div className="col-span-2">
            <label className=" text-xl font-medium">
              In the case of transit, have you an entry permit for the final
              country of destination? <span className="text-red-600">*</span>
            </label>
            <select
              {...register("entrypermit")}
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            >
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>

          {/*   intended date */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Valid until(yyyy/mm/dd) <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              {...register("passportNumber")}
              placeholder=""
              disabled={entrypermit !== "yes"}
              className={`w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none ${
                entrypermit !== "yes" && "cursor-not-allowed"
              }`}
            />
          </div>
          {/*   Visa sticker number */}
          <div className="">
            <label className=" text-xl font-medium  ">
              Issuing entity <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("passportNumber")}
              placeholder=""
              disabled={entrypermit !== "yes"}
              className={`w-full  h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none ${
                entrypermit !== "yes" && "cursor-not-allowed"
              }`}
            />
          </div>

          {/* <div className="">
            <label className=" text-xl font-medium  ">Appointment Date</label>
            <input
              type="text"
              {...register("appointment.date")}
              // value={data.email}

              placeholder="Enter Appointment Date"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium  ">Appointment TIme</label>
            <input
              type="text"
              {...register("appointment.time")}
              placeholder="Enter Appointment TIme"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div>
          <div className="">
            <label className=" text-xl font-medium  ">Confirmation ID</label>
            <input
              type="text"
              {...register("appointment.confirmationId")}
              placeholder="Enter Confirmation ID"
              className="w-full h-14 border border-amber-500 placeholder-gray-700  dark:placeholder-gray-200  rounded-md px-4 py-2 shadow-lg  font-medium mt-2  focus:outline-none "
            />
          </div> */}
          <input
            type="submit"
            value="Create Client"
            className=" w-full mx-auto lg:col-span-2 bg-blue-700 mt-3 rounded-md px-4 py-2 shadow-sm text-white hover:bg-blue-500 transition-all duration-300 font-medium cursor-pointer"
          />
        </div>
      </form>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddClient;
