"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendario.css";

export default function CalendarioNavBar() {
  const [date, setDate] = useState(new Date());

  const eventos = [
    { date: "2025-02-05", color: "bg-blue-400" },
    { date: "2025-02-05", color: "bg-purple-400" },
    { date: "2025-02-12", color: "bg-green-400" },
    { date: "2025-02-12", color: "bg-red-400" },
    { date: "2025-02-18", color: "bg-yellow-400" },
    { date: "2025-02-24", color: "bg-blue-400" },
  ];
  return (
    <div className="">
      <Calendar
        onChange={setDate}
        value={date}
        showNavigation={false}
        className="w-full"
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            date.toDateString() === new Date().toDateString()
          ) {
            return "bg-blue-500 text-black rounded-lg";
          }
          return "hover:bg-gray-700 rounded-lg";
        }}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const eventColors = eventos
              .filter((e) => e.date === date.toISOString().split("T")[0])
              .map((e, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 ${e.color} rounded-full`}
                ></div>
              ));
            return (
              <div className="flex justify-center gap-1 mt-1">
                {eventColors}
              </div>
            );
          }
        }}
      />
    </div>
  );
}
