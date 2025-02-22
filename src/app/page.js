"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavBarComponent from "@/components/navbar/page";
import ViewButtons from "../components/button/SelectView";
import SearchButton from "../components/button/SearchButton";
import DayChanger from "../components/button/DayChanger";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Navbar a la izquierda */}
      <div className="w-80 bg-[#18181b] text-white p-4">
        <NavBarComponent />
      </div>
      {/* Contenido principal */}
      <main className="flex-1 bg-background ">

        {/* Boton Para cambiar de dia*/}
        <div className="flex items-center justify-between p-4 w-full relative ">
          <DayChanger />
          <ViewButtons />
          <SearchButton />
        </div>

        

        <div >
          <div className="flex justify-center items-start mt-10">
            <Calendar />
          </div>
        </div>
      </main>
    </div>
  );
}
