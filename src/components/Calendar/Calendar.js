import React, { useEffect, useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";

// Función para obtener los días de la semana en el idioma del usuario
const getLocalizedDays = () => {
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    weekday: "short",
  });
  return Array.from({ length: 7 }, (_, i) =>
    formatter.format(new Date(2023, 0, i + 1))
  );
};

// Función para calcular la hora en formato AM/PM
const formatHour = (start) => {
  const hour = 10 + start;
  return hour < 12 ? `${hour} AM` : hour === 12 ? "12 PM" : `${hour - 12} PM`;
};

// Horas del día en formato de 12 horas
const hours = Array.from({ length: 12 }, (_, i) => {
  const hour = i + 10;
  return hour <= 11 ? `${hour} AM` : `${hour === 12 ? 12 : hour - 12} PM`;
});

// Diccionario de colores con bordes más oscuros
const colorClasses = {
  red: "bg-red-100 border-l-4 border-red-700",
  "purple-100": "bg-purple-100 border-l-4 border-purple-800",
  "yellow-100": "bg-yellow-100 border-l-4 border-yellow-800",
};

// Diccionario de colores para el icono de la cámara
const iconColorClasses = {
  red: "text-red-700",
  "purple-100": "text-purple-800",
  "yellow-100": "text-yellow-800",
};

// Eventos con referencia a los colores del diccionario
const events = [
  {
    id: 1,
    title: "Monday Wake-Up Hour",
    day: 1,
    start: 2,
    duration: 2,
    color: "red",
  },
  {
    id: 2,
    title: "Reunión",
    day: 3,
    start: 4,
    duration: 1,
    color: "purple-100",
  },
  {
    id: 3,
    title: "Break",
    day: 5,
    start: 6,
    duration: 1,
    color: "yellow-100",
  },
];

const Calendar = () => {
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    setDaysOfWeek(getLocalizedDays()); // Ajustar los días al idioma del usuario
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Encabezado */}
      <div className="grid grid-cols-8 bg-gray-100 border-b border-gray-300 text-center font-semibold">
        <div></div> {/* Espacio vacío para las horas */}
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-2 text-gray-700">
            {day}
          </div>
        ))}
      </div>
      
      {/* Horarios y días */}
      <div className="grid grid-cols-8 divide-x divide-gray-300">
        {/* Columna de horas */}
        <div className="flex flex-col border-r border-gray-300">
          {hours.map((hour, index) => (
            <div
              key={index}
              className="h-14 flex items-center justify-center text-sm text-gray-600 border-b border-gray-200"
            >
              {hour}
            </div>
          ))}
        </div>

        {/* Días y eventos */}
        {daysOfWeek.map((_, dayIndex) => (
          <div key={dayIndex} className="flex flex-col relative">
            {hours.map((_, hourIndex) => (
              <div key={hourIndex} className="h-14 border-b border-gray-200 hover:bg-gray-100 relative"></div>
            ))}

            {/* Renderizar eventos con hora y cámara incluida */}
            {events
              .filter((event) => event.day === dayIndex)
              .map((event) => (
                <div
                  key={event.id}
                  className={`absolute w-full left-0 p-2 text-sm font-medium shadow-md text-black rounded-md 
                    ${
                      colorClasses[event.color] ||
                      "bg-gray-200 border-l-4 border-gray-600"
                    }`}
                  style={{
                    top: `${event.start * 3.5}rem`,
                    height: `${event.duration * 3.5}rem`,
                  }}
                >
                  <span className="flex items-center gap-2 text-xs font-bold text-gray-800">
                    {/* Cámara con el mismo color del evento */}
                    <BsFillCameraVideoFill
                      size={15}
                      className={`${iconColorClasses[event.color] || "text-gray-600"}`}
                    />
                    {formatHour(event.start)}
                  </span>
                  {event.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
