import { useState } from "react";
import { MdWbSunny } from "react-icons/md";

export default function TodayNavBar() {
  const [date, setDate] = useState(new Date());

  return (
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
  );
}
