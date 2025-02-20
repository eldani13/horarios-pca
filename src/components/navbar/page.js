"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import "./calendario.css";

const puntos = "/puntos.png";

export default function NavBarComponent() {
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
    <div className="text-white space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <Image src={puntos} width={40} height={40} alt="puntos" />
        </div>
        <div className="bg-[#4b4848] p-2 rounded-lg">
          <FaPlus size={15} className="text-white" />
        </div>
      </div>

      {/* Fecha */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl">
            Febrero <span className="text-xl text-red-500">2025</span>
          </span>
        </div>
        <div className="flex">
          <MdKeyboardArrowLeft size={20} />
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>

      {/* Calendario */}
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

      {/* Clima */}
      <div className="">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="uppercase text-[#3B82F6] font-bold">Today</span>
            <span className="text-[#3B82F6] text-sm">
              {new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(date)}
            </span>
          </div>
          <div className="">
            <span className="flex gap-1 text-[#bbbaba]">
              <span className="text-[#bbbaba] font-bold">55°</span>/
              <span>40°</span>
              <MdWbSunny size={20} className="text-[#FDE047]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
