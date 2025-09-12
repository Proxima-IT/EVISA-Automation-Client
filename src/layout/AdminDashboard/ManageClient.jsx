import React, { useState } from "react";
import { Link } from "react-router";

const ManageClient = () => {
  const [clients, setClients] = useState([]);
  return (
    <div>
      <div className=" border border-[#00B5FF] rounded-2xl p-2  my-3 mx-4 ">
        {/* // main dynamic content goes here */}
        <div className="container p-2 mx-auto sm:p-4 flex flex-col items-center ">
          <div className="w-full overflow-x-scroll">
            <table className=" text-center">
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
              <thead className="bg-teal-300  rounded-md whitespace-nowrap">
                <tr className="text-center lg:text-base text-sm ">
                  <th className="p-3">SL.</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Passport number</th>
                  <th className="p-3">Date of birth</th>
                  <th className="p-3">Phone number</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Appointment date</th>
                  <th className="p-3">Appointment time</th>
                  <th className="p-3">Confirmation Id</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-full border-b border-opacity-20 text-center bg-teal-100 border-gray-700 ">
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>
                  <td className="p-3">name</td>             

                  <td className="p-3">
                    <Link to="manage-client/edit-client">
                    <button className="bg-green-300 rounded-md px-3 py-1 text-black mb-2 font-bold cursor-pointer">
                      Edit
                    </button>
                    </Link>
                    <button className="bg-orange-300 rounded-md px-3 py-1 text-black mb-2 font-bold cursor-pointer">
                      Delete
                    </button>
                  </td>
                </tr>
                {clients.map((client, index) => a)}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            <button
              //   disabled={page === 1}
              //   onClick={() => setPage(page - 1)}
              className="px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
            >
              Prev
            </button>
            {/* {[...Array(totalPages)].map((_, i) => (
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
            ))} */}
            <button
              //   disabled={page === totalPages}
              //   onClick={() => setPage(page + 1)}
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
