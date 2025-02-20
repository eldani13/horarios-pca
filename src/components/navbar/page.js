import React from "react";
import HeaderNavBar from "../headerNavBar/page";
import FechaNavbar from "../fechaNavBar/page";
import CalendarioNavBar from "../calendarioNavBar/page";
import TodayNavBar from "../today/page";
import ReunionGerenalNavBar from "../reunionGeneral/page";
import MañanaNavBar from "../mañana/page";
import MondayNavBar from "../monday/page";
import TuesdayNavbar from "../tuesday/page";
import WednesdayNavBar from "../wednesday/page";

export default function NavBarComponent() {
  return (
    <div className="text-white space-y-5">
      {/* Header */}
      <HeaderNavBar />
      {/* Fecha */}
      <FechaNavbar />
      {/* Calendario */}
      <CalendarioNavBar />

      <section className="space-y-3 overflow-y-auto max-h-[55vh] custom-scroll">
        {/* TODAY */}
        <TodayNavBar />
        {/* Reunion Gerenal */}
        <ReunionGerenalNavBar />
        {/* Mañana */}
        <MañanaNavBar />
        {/* Monday */}
        <MondayNavBar />
        {/* Tuesday */}
        <TuesdayNavbar />
        {/* WEDNESDAY */}
        <WednesdayNavBar />
      </section>
    </div>
  );
}
