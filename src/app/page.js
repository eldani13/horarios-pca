import Image from "next/image";
import NavBarComponent from "@/components/navbar/page";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Navbar a la izquierda */}
      <div className="w-80 bg-gray-900 text-white p-4">
        <NavBarComponent />
      </div>
      
      {/* Contenido principal */}
      <main className="flex-1 bg-background p-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </main>
    </div>
  );
}
