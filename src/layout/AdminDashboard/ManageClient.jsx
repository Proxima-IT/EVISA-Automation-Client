import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageClient = () => {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/visa?page=${page}&limit=10`)
      .then((res) => {
        console.log(res.data.data);
        setClients(res.data.data);
        setLoading(false);
        setTotalPages(res.data.pagination.totalPages);
      });
  }, [page]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/visa/${id}`);
        Swal.fire({
          title: "Client Deleted!",
          text: "This client data has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-5">
        <div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className=" border border-[#00B5FF] rounded-2xl p-2  my-3 lg:mx-4 ">
        {/* // main dynamic content goes here */}
        <div className="container p-2 mx-auto sm:p-4 flex flex-col items-center ">
          <div className="w-full overflow-x-scroll">
            <table className=" text-center w-full">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-600  rounded-md whitespace-nowrap text-white">
                <tr className="text-center lg:text-lg text-sm ">
                  <th className="p-3">SL.</th>
                  <th className="p-3">FirstName</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Passport number</th>
                  <th className="p-3">Date of birth</th>
                  <th className="p-3">Phone number</th>
                  <th className="p-3">ConsularPost</th>
                  <th className="p-3">OriginalNationality</th>
                  {/* <th className="p-3">Appointment time</th> */}
                  {/* <th className="p-3">Confirmation Id</th> */}
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {clients.map((client, index) => (
                  <tr
                    key={client._id}
                    className="w-full border-b border-opacity-20 text-center text-black bg-gray-100 border-gray-700 "
                  >
                    <td className="p-3">{(page - 1) * 10 + (index + 1)}</td>
                    <td className="p-3">{client.firstName}</td>
                    <td className="p-3">{client.requestorEmail}</td>
                    <td className="p-3">{client.passportNumber}</td>
                    <td className="p-3">{client.dateOfBirth}</td>
                    <td className="p-3">{client.requestorPhone}</td>
                    <td className="p-3">{client.consularPost}</td>
                    <td className="p-3">{client.originalNationality}</td>
                    {/* <td className="p-3">{client.appointment?.time}</td> */}
                    {/* <td className="p-3">
                      {client.appointment?.confirmationId}
                    </td> */}

                    <td className="p-3 flex gap-3 items-center">
                      <button
                        onClick={() => {}}
                        className="flex items-center gap-2 bg-green-600 rounded-md px-3 py-1 text-white mb-2 font-bold cursor-pointer"
                      >
                        Activate
                      </button>
                      <Link to={`/admin/edit-client/${client._id}`}>
                        <button className="flex gap-2 items-center bg-blue-300 rounded-md px-3 py-1 text-black mb-3 font-bold cursor-pointer">
                          Edit <FiEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(client._id);
                        }}
                        className="flex items-center gap-2 bg-orange-300 rounded-md px-3 py-1 text-black mb-2 font-bold cursor-pointer"
                      >
                        Delete <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-blue-500 text-black"
                    : "bg-gray-200 text-black"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-2 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClient;
