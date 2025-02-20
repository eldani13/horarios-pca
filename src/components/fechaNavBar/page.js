import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function FechaNavbar(){
    return (
        <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl">
            Febrero <span className="text-3xl text-red-500">2025</span>
          </span>
        </div>
        <div className="flex">
          <MdKeyboardArrowLeft size={20} />
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>
    )
}