import React from "react";

const Status = ({ text }) => {
  return (
    <span
      className={
        text === "Active"
          ? "bg-green-700 text-white text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Completed" || text === "Open"
          ? "bg-blue-100 text-primary text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "On-going"
          ? "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Locked"
          ? "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : "bg-gray-400 text-black text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
      }
    >
      {text}
    </span>
  );
};

export default Status;
