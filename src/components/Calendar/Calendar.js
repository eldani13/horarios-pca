import React from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 10; 
    return hour <= 11 ? `${hour} AM` : `${hour === 12 ? 12 : hour - 12} PM`;
  });

const Calendar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-8 bg-gray-100 border-b border-gray-300  text-center font-semibold">

        <div></div> {/* Empty space for hour labels */}
        {daysOfWeek.map((day) => (
          <div key={day} className="p-1 text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-8 divide-x divide-gray-300">
        <div className="flex flex-col border-r border-gray-300">
          {hours.map((hour, index) => (
            <div key={index} className="h-14 flex items-center justify-center text-sm text-gray-600 border-b border-gray-200">
              {hour}
            </div>
          ))}
        </div>
        {daysOfWeek.map((_, dayIndex) => (
          <div key={dayIndex} className="flex flex-col">
            {hours.map((_, hourIndex) => (
              <div key={hourIndex} className="h-14 border-b border-gray-200 hover:bg-gray-100"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
