"use client";
import { useState } from "react";

const ViewButtons = () => {
  const [activeView, setActiveView] = useState("Week");

  const views = ["Day", "Week", "Month", "Year"];

  return (
    <div className="flex space-x-4">
      {views.map((view) => (
        <button
          key={view}
          onClick={() => setActiveView(view)}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeView === view
              ? "bg-red-600 text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewButtons;
