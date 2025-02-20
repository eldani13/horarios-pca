import { FaPlus } from "react-icons/fa";
import Image from "next/image";

export default function HeaderNavBar() {
  const puntos = "/puntos.png";

  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={puntos} width={40} height={40} alt="puntos" />
      </div>
      <div className="bg-[#4b4848] p-2 rounded-lg">
        <FaPlus size={15} className="text-white" />
      </div>
    </div>
  );
}
