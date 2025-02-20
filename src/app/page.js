"use client";
import { useState } from "react";
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
      <div className="w-80 bg-gray-900 text-white p-4">
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

          {/* 
          <div className="inline-flex flex-col space-y-1 items-start justify-start h-full w-full">
            <div className="inline-flex space-x-28 items-start justify-start pr-24 h-full w-full">
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                M
              </p>
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                T
              </p>
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                W
              </p>
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                T
              </p>
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                F
              </p>
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                S
              </p>
              <p className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
                S
              </p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="inline-flex items-center justify-start h-full w-full">
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">01</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">02</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">03</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">04</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">05</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">06</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">07</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-start w-full h-full">
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">08</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">09</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">10</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">11</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">12</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">13</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">14</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-start w-full h-full">
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">15</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">16</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">17</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">18</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">19</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">20</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">21</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-start h-full w-full">
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">22</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">23</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">24</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">25</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">26</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">27</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">28</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-start w-full h-full">
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">29</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">30</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">31</p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="opacity-50 text-sm font-medium text-gray-800">
                    01
                  </p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="opacity-50 text-sm font-medium text-gray-800">
                    02
                  </p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="opacity-50 text-sm font-medium text-gray-800">
                    03
                  </p>
                </div>
                <div className="flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
                  <p className="opacity-50 text-sm font-medium text-gray-800">
                    04
                  </p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </main>
    </div>
  );
}
