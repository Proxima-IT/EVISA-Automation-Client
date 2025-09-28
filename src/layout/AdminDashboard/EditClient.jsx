import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useParams } from "react-router";

const EditClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    "Identification",
    "Journey Doc.",
    "Journey",
    "Visa",
    "References",
    "Attachments",
  ];

  const { id } = useParams();
  console.log(id);

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/visa/${id}`).then((res) => {
      console.log(res.data.data);
      setClient(res.data.data);
      reset(res.data.data);
      // setLoading(false)
    });
  }, []);

  console.log(client);

  const selected = watch("permissionToReturn");
  const fingerprint = watch("fingerprintsCollected");
  const entrypermit = watch("transitEntryPermit");

  const onSubmit = (data) => {
    console.log(data);

    axios
      .patch(`${import.meta.env.VITE_API_URL}/visa/${id}`, data)
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

  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };

  // Add this under your imports
  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div>
      <div className="w-full border border-teal-800 rounded-lg p-6">
        <div className="text-lg font-roboto text-center font-bold text-teal-700 dark:text-white mb-4 border-2 border-teal-800 dark:border-teal-300 w-full lg:w-1/4 px-3 py-1 mx-auto rounded-md">
          Edit Client Data
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TabGroup
            className=""
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            <TabList className="flex justify-center flex-wrap gap-4 items-center my-6">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      "rounded-lg px-5 py-2 text-sm font-bold shadow-md cursor-pointer transition-all duration-200",
                      selected
                        ? "bg-teal-600 text-white shadow-lg"
                        : "bg-white text-teal-700 hover:bg-teal-50 hover:text-teal-900"
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full text-black dark:text-white">
                  {/* consularPost  */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium">
                      ConsularPost <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("consularPost")}
                      defaultValue={client?.consularPost}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/* surname  */}
                  <div className="">
                    <label className=" text-xl font-medium">
                      Surname(s) <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("surname")}
                      defaultValue={client?.surname}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/* Surname(s) at birth  */}
                  <div className="">
                    <label className=" text-xl font-medium">
                      Surname(s) at birth{" "}
                      <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("surnameAtBirth")}
                      defaultValue={client?.surnameAtBirth}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("firstName")}
                      defaultValue={client?.firstName}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/* Date of birth(yyyy/mm/dd)  */}
                  <div className="">
                    <label className=" text-xl font-medium">
                      Date of birth(yyyy/mm/dd){" "}
                      <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="date"
                      {...register("dateOfBirth")}
                      defaultValue={client?.dateOfBirth}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("placeOfBirth")}
                      defaultValue={client?.placeOfBirth}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("countryOfBirth")}
                      defaultValue={client?.countryOfBirth}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/* Current nationality  */}
                  <div className="">
                    <label className=" text-xl font-medium">
                      Current nationality{" "}
                      <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("currentNationality")}
                      defaultValue={client?.currentNationality}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border                  
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*  Original nationality  */}
                  <div className="">
                    <label className=" text-xl font-medium">
                      Original nationality{" "}
                      <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("originalNationality")}
                      defaultValue={client?.originalNationality}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("sex")}
                      defaultValue={client?.sex}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("maritalStatus")}
                      defaultValue={client?.maritalStatus}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border                         
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full text-black dark:text-white">
                  {/*   Type of passport  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Type of passport <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("typeOfPassport")}
                      defaultValue={client?.typeOfPassport}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border           
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*   Passport number  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Passport number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("passportNumber")}
                      defaultValue={client?.passportNumber}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    shadow-sm transition-all duration-200 ease-in-out 
                                    placeholder-gray-400 dark:placeholder-gray-500 
                                    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/*   Date of Issue(yyyy/mm/dd)  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Date of Issue(yyyy/mm/dd){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("dateOfIssue")}
                      defaultValue={client?.dateOfIssue}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*   Valid until(yyyy/mm/dd)  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Valid until(yyyy/mm/dd){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("validUntil")}
                      defaultValue={client?.validUntil}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*  Issued by  */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Issued by <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("issuedBy")}
                      defaultValue={client?.issuedBy}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border                         
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                             shadow-sm transition-all duration-200 ease-in-out 
                             placeholder-gray-400 dark:placeholder-gray-500 
                             text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*    Requestor's email  */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Requestor's email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("requestorEmail")}
                      defaultValue={client?.requestorEmail}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*    Requestor's Address  */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Requestor's Address{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("requestorAddress")}
                      defaultValue={client?.requestorAddress}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border             
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/*    Requestor's Phone Number  */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Requestor's Phone Number{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("requestorPhone")}
                      defaultValue={client?.requestorPhone}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*  redident related */}
                  <div className="mb-2 col-span-2">
                    <label className="block text-base font-medium text-left  mb-2">
                      If you reside in a country other than your country of
                      origin, have you permission to return to that country?{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <select
                      {...register("permissionToReturn")}
                      defaultValue={client?.permissionToReturn}

                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border    
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("residenceTitleNo")}
                      defaultValue={client?.residenceTitleNo}
                      placeholder=""
                      disabled={selected !== "yes"}
                      className={`w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                  ${
                                    selected !== "yes"
                                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800"
                                      : "border-gray-300"
                                  } 
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900`}
                    />
                  </div>

                  {/*  Validity end(yyyy/mm/dd)  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium ">
                      Validity end(yyyy/mm/dd){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("validityEnd")}
                      defaultValue={client?.validityEnd}
                      placeholder=""
                      disabled={selected !== "yes"}
                      className={`w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                  ${
                                    selected !== "yes"
                                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800"
                                      : "border-gray-300"
                                  } 
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900`}
                    />
                  </div>

                  {/*  forLife  */}
                  <div className="">
                    <label className=" text-xl font-medium  ">For life</label>{" "}
                    <br />
                    <input
                      type="checkbox"
                      disabled={selected !== "yes"}
                      {...register("forLife")}
                      className="w-6  h-6 border border-amber-500  rounded-md px-4 py-2  font-medium mt-2  focus:outline-none "
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full text-black dark:text-white">
                  {/*  Current ocupation  */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Current ocupation <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("currentOccupation")}
                      defaultValue={client?.currentOccupation}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("employerOrSchool")}
                      defaultValue={client?.employerOrSchool}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/*  address/phone */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      address/phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("employerAddressPhone")}
                      defaultValue={client?.employerAddressPhone}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border             
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                        {...register("purposeOfTravel?.field1")}
                        defaultValue={client?.purposeOfTravel?.field1}
                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    shadow-sm transition-all duration-200 ease-in-out 
                                    placeholder-gray-400 dark:placeholder-gray-500 
                                    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">(2) </span>
                      <input
                        type="text"
                        {...register("purposeOfTravel.field2")}
                        defaultValue={client?.purposeOfTravel?.field2}
                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    shadow-sm transition-all duration-200 ease-in-out 
                                    placeholder-gray-400 dark:placeholder-gray-500 
                                    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                        {...register("memberStateOfDestination.field1")}
                        defaultValue={client?.memberStateOfDestination?.field1}
                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border    
                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                 shadow-sm transition-all duration-200 ease-in-out 
                                 placeholder-gray-400 dark:placeholder-gray-500 
                                 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">(2) </span>
                      <input
                        type="text"
                        {...register("memberStateOfDestination.field2")}
                        defaultValue={client?.memberStateOfDestination?.field2}
                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    shadow-sm transition-all duration-200 ease-in-out 
                                    placeholder-gray-400 dark:placeholder-gray-500 
                                    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
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
                      {...register("borderOfFirstEntry")}
                      defaultValue={client?.borderOfFirstEntry}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                        
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full text-black dark:text-white">
                  <span className=""> Number of entries requested</span>

                  <div></div>
                  {/* Number of entries requested  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Number of entries requested
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("numberOfEntries")}
                      defaultValue={client?.numberOfEntries}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border                 
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                               shadow-sm transition-all duration-200 ease-in-out 
                               placeholder-gray-400 dark:placeholder-gray-500 
                               text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/* Duration of stay (days  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Duration of stay (days)
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("durationOfStay")}
                      defaultValue={client?.durationOfStay}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border                          
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                               shadow-sm transition-all duration-200 ease-in-out 
                               placeholder-gray-400 dark:placeholder-gray-500 
                               text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*   intended date */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Intended date of arrival of the first intended stay in the
                      Schengen area (aaaa/mm/dd){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("intendedArrival")}
                      defaultValue={client?.intendedArrival}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border                  
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                               shadow-sm transition-all duration-200 ease-in-out 
                               placeholder-gray-400 dark:placeholder-gray-500 
                               text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  {/*   intended date */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium  ">
                      Intended date of departure from the Schengen area after
                      the first intended stay{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("intendedDeparture")}
                      defaultValue={client?.intendedDeparture}
                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  <span> Fingerprints </span>

                  {/*   intended date */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium">
                      Fingerprints collected previously for the purpose of
                      applying for a Schengen visa{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      {...register("fingerprintsCollected")}
                      defaultValue={client?.fingerprintsCollected}
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="yes">YES</option>
                      <option value="no">NO</option>
                    </select>
                  </div>

                  {/*   intended date */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Date (yyyy/mm/dd) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("fingerprintsDate")}
                      defaultValue={client?.fingerprintsDate}
                      placeholder=""
                      disabled={fingerprint !== "yes"}
                      className={`w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                  ${
                                    fingerprint !== "yes"
                                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800"
                                      : "border-gray-300"
                                  } 
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900`}
                    />
                  </div>
                  {/*   Visa sticker number */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Visa sticker number{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("visaStickerNumber")}
                      defaultValue={client?.visaStickerNumber}
                      placeholder=""
                      disabled={fingerprint !== "yes"}
                      className={`w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                  ${
                                    fingerprint !== "yes"
                                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800"
                                      : "border-gray-300"
                                  } 
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900`}
                    />
                  </div>

                  <span className="col-span-2 md:col-span-1">
                    Entry permit for the final country of destination, where
                    apllicable
                  </span>
                  <div></div>

                  {/*   intended date */}
                  <div className="col-span-2">
                    <label className=" text-xl font-medium">
                      In the case of transit, have you an entry permit for the
                      final country of destination?{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      {...register("transitEntryPermit")}
                      defaultValue={client?.transitEntryPermit}
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border    
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    shadow-sm transition-all duration-200 ease-in-out 
                                    placeholder-gray-400 dark:placeholder-gray-500 
                                    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="yes">YES</option>
                      <option value="no">NO</option>
                    </select>
                  </div>

                  {/*   intended date */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium  ">
                      Valid until(yyyy/mm/dd){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("transitPermitValidUntil")}
                      defaultValue={client?.transitPermitValidUntil}
                      placeholder=""
                      disabled={entrypermit !== "yes"}
                      className={`w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                    ${
                                      entrypermit !== "yes"
                                        ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800"
                                        : "border-gray-300"
                                    } 
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    shadow-sm transition-all duration-200 ease-in-out 
                                    placeholder-gray-400 dark:placeholder-gray-500 
                                    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900`}
                    />
                  </div>

                  {/* Issuing Entity */}
                  <div className="w-full">
                    <label
                      htmlFor="issuingEntity"
                      className="block text-lg font-semibold text-gray-800 dark:text-gray-200"
                    >
                      Issuing Entity <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="issuingEntity"
                      type="text"
                      {...register("issuingEntity", { required: true })}
                      defaultValue={client?.issuingEntity}
                      placeholder="Enter issuing authority"
                      disabled={entrypermit !== "yes"}
                      className={`w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border 
                                  ${
                                    entrypermit !== "yes"
                                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800"
                                      : "border-gray-300"
                                  } 
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900`}
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full text-black dark:text-white">
                  <span className="text-lg font-semibold col-span-2">
                    Reference in the National Territory:
                  </span>

                  {/* Number of entries requested  */}
                  <div className="col-span-2">
                    <input
                      type="text"
                      {...register("referenceInTheNationalTerritory")}
                      defaultValue={client?.referenceInTheNationalTerritory}
                      placeholder=""
                      className="w-full h-10  px-4 py-2 rounded-lg border     
                                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                  shadow-sm transition-all duration-200 ease-in-out 
                                  placeholder-gray-400 dark:placeholder-gray-500 
                                  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  <span className="text-lg font-semibold col-span-2">
                    Name and Surname(s) Person(s) that invites in Member(s)
                    State(s) or, alternatively, the name(s) hotel (or temporary
                    accommodation in the Member(s) State(s))
                  </span>

                  {/* name  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium">
                      Name <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("invitingPerson.name")}
                      defaultValue={client?.invitingPerson?.name}
                      // value={data.email}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/* name  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium">
                      Address <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("invitingPerson.address")}
                       defaultValue={client?.invitingPerson?.address}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/* name  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium">
                      Country <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("invitingPerson.country")}
                       defaultValue={client?.invitingPerson?.country}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  <span className="text-lg font-semibold col-span-2">
                    Name and sumame Company / Organization invites
                  </span>
                  {/* name  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium">
                      Name <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("invitingCompany.name")}
                      defaultValue={client?.invitingCompany?.name}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/* name  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium">
                      Address <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("invitingCompany.address")}
                      defaultValue={client?.invitingCompany?.address}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>
                  {/* name  */}
                  <div className="col-span-2 md:col-span-1">
                    <label className=" text-xl font-medium">
                      Country <span className="text-red-600">*</span>
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("invitingCompany.country")}
                     defaultValue={client?.invitingCompany?.country}

                      placeholder=""
                      className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                    />
                  </div>

                  <span className="text-lg font-semibold col-span-2">
                    Travel expenses and subsistence during the stay of the
                    applicant are covered
                    <span className="text-red-600">*</span>
                    {/* Applicant  */}
                    <div className="">
                      <label className=" text-xl font-medium">
                        Applicant <span className="text-red-600">*</span>
                        {/* <span className="text-red-600">*</span> */}
                      </label>
                      <input
                        type="text"
                        {...register("travelExpenses.applicant.field1")}
                        defaultValue={client?.travelExpenses?.applicant?.field1}

                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                      />
                      <input
                        type="text"
                        {...register("travelExpenses.applicant.field2")}
                         defaultValue={client?.travelExpenses?.applicant?.field2}
                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                      />
                    </div>
                    {/* Sponsor  */}
                    <div className="">
                      <label className=" text-xl font-medium">
                        Sponsor <span className="text-red-600">*</span>
                        {/* <span className="text-red-600">*</span> */}
                      </label>
                      <input
                        type="text"
                        {...register("travelExpenses.sponsor.field1")}
                        defaultValue={client?.travelExpenses?.sponsor?.field1}

                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                      />
                      <input
                        type="text"
                        {...register("travelExpenses.sponsor.field2")}
                        defaultValue={client?.travelExpenses?.sponsor?.field2}
                        placeholder=""
                        className="w-full h-10  md:h-14 mt-2 px-4 py-2 rounded-lg border     
                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                        shadow-sm transition-all duration-200 ease-in-out 
                                        placeholder-gray-400 dark:placeholder-gray-500 
                                        text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900"
                      />
                    </div>
                  </span>
                </div>
              </TabPanel>

              <TabPanel className="text-center">
                Attachments are optional.
              </TabPanel>
            </TabPanels>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => {
                  setSelectedIndex((i) => Math.max(0, i - 1));
                  handleClick(); // scroll only
                }}
                disabled={selectedIndex === 0}
                className={classNames(
                  "px-4 py-2 rounded-lg  transition font-bold text-xl flex items-center dark:text-white",
                  selectedIndex === 0
                    ? " text-gray-900 cursor-not-allowed"
                    : " text-teal-900 hover:bg-teal-200"
                )}
              >
                <MdKeyboardDoubleArrowLeft /> Previous
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedIndex((i) => Math.min(tabs.length - 1, i + 1));
                  handleClick();
                }}
                disabled={selectedIndex === tabs.length - 1}
                className={classNames(
                  "px-4 py-2 rounded-lg  transition font-bold text-xl flex items-center dark:text-white",
                  selectedIndex === tabs.length - 1
                    ? " text-gray-900 cursor-not-allowed"
                    : " text-teal-900 hover:bg-teal-200"
                )}
              >
                Next <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </TabGroup>

          <button
            type="submit"
            className="w-full mx-auto lg:col-span-2 bg-blue-700 mt-12 rounded-md px-4 py-2 shadow-sm text-white hover:bg-blue-500 transition-all duration-300 font-medium cursor-pointer"
          >
            Update Client
          </button>
        </form>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EditClient;
