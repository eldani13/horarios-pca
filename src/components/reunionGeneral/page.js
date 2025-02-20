import { BsFillCameraVideoFill } from "react-icons/bs";


export default function ReunionGerenalNavBar() {
  return (
    <div className="">
      <div>
        <span className="bg-purple-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
          All-Hands Company Meeting
        </span>
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
          <span className="text-xs text-white">Monthly catch-up</span>
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
          <span className="text-xs text-white">Quarterly review</span>
          <span className="text-xs text-gray-500">
            https://zoom.us/i/1983475281
          </span>
        </div>
      </div>
    </div>
  );
}
