import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiCloud } from "react-icons/bi";

export default function WednesdayNavBar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="uppercase text-gray-400 font-bold">WEDNESDAY</span>
          <span className="text-gray-400 text-sm">
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
            <BiCloud size={20} className="text-[#fff]" />
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <div className="h-3 w-3 rounded-full bg-blue-500 self-start mt-1"></div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm text-gray-500 font-bold flex items-center gap-2">
            8:30 - 9:00 AM{" "}
            <BsFillCameraVideoFill
              size={15}
              className="bg-[#A1A1AA] text-[#18181B] p-1 rounded-full"
            />{" "}
          </span>
          <span className="text-xs text-white">
            Meeting to talk about Ross contract.
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <div className="h-3 w-3 rounded-full bg-blue-500 self-start mt-1"></div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm text-gray-500 font-bold flex items-center gap-2">
            8:30 - 9:00 AM{" "}
            <BsFillCameraVideoFill
              size={15}
              className="bg-[#A1A1AA] text-[#18181B] p-1 rounded-full"
            />{" "}
          </span>
          <span className="text-xs text-white">
            Meeting to discuss the new proposal.
          </span>
        </div>
      </div>
    </div>
  );
}
