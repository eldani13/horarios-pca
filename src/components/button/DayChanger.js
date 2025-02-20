"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DayChanger() {
  return (
    <div className="flex items-center  ">
      <div className="flex items-center justify-between bg-gray-100  rounded-lg w-56 ">
        {/* Botón de flecha izquierda */}

        <button className="border-r h-10 border-white">
          <ChevronLeft className="w-5 h-5 text-gray-800 " />
        </button>

        {/* Texto en el centro */}
        <span className=" text-gray-800 font-medium">Today</span>

        {/* Botón de flecha derecha */}
        <button className="border-l h-10 border-white">
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
