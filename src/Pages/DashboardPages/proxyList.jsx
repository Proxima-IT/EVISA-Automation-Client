import React from 'react';
import { FaPlus, FaTrash, FaEdit, FaUpload } from "react-icons/fa";

const ProxyList = () => {
  const proxyListData = [
    { id: 1, ip: "182.168.0.10", port: "8000", status: "Active" },
    { id: 2, ip: "42.168.0.20", port: "3000", status: "Checking" },
    { id: 3, ip: "180.18.10.40", port: "5000", status: "Block" },
    { id: 4, ip: "18.168.50.33", port: "9000", status: "Not Active" },
  ];

  // Status badge styles
  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border border-green-300";
      case "Block":
        return "bg-red-100 text-red-700 border border-red-300";
      case "Checking":
        return "bg-teal-50 text-yellow-700 border border-yellow-300";
      default:
        return "bg-gray-100 whitespace-nowrap text-gray-700 border border-gray-300";
    }
  };

  return (
    <div className="p-6 mt-20">
        <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="font-bold text-black text-3xl mb-6">
            Proxy List Information
        </h1>

        <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
            {/* Table Head */}
            <thead>
                <tr className="bg-purple-100 text-lg text-purple-900">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">IP Address</th>
                <th className="p-3 text-left">Port</th>
                <th className="p-3 text-left">Status</th>
                </tr>
            </thead>
            <tbody className="text-md">
                {proxyListData.map((list, index) => (
                <tr
                    key={list.id}
                    className="hover:bg-purple-50 transition-all duration-200"
                >
                    <td className="p-3 font-semibold">{index + 1}</td>
                    <td className="p-3">{list.ip}</td>
                    <td className="p-3">{list.port}</td>
                    <td className="p-3">
                    <span
                        className={`px-3 py-1 rounded-full w-full text-sm font-semibold ${getStatusClass(
                        list.status
                        )}`}
                    >
                        {list.status}
                    </span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>


        {/* add new proxy */}
        <h1 className='mt-10 font-bold text-[#1d224f] text-2xl'>Add a new Proxy</h1>
        <form
            className="bg-white shadow-md rounded-xl p-6 mb-6 flex flex-col lg:flex-row gap-4 items-center"
        >
            <input
            type="text"
            name="ip"
            placeholder="IP Address"
            className="input input-bordered w-full max-w-xs"
            />
            <input
            type="text"
            name="port"
            placeholder="Port"
            className="input input-bordered w-full max-w-xs"
            />
            <select
            name="status"
            className="select select-bordered w-full max-w-xs"
            >
            <option>Active</option>
            <option>Checking</option>
            <option>Blocked</option>
            <option>Not Active</option>
            </select>
            <button
                type="submit"
                className="flex justify-center items-center whitespace-nowrap gap-2 cursor-pointer px-8 py-3 bg-[#2D336B] text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-[#1d224f] transition"
                >
                <FaPlus /> Add Proxy
            </button>
        </form>
    </div>
  );
};

export default ProxyList;
