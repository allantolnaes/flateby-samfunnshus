"use client";

/* To edit events: Go to @/Data/eventer.ts */

import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import nb from "date-fns/locale/nb";
import {
  EventWithAvailability,
  availabilityColors,
  events,
} from "@/Data/eventer";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  nb,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function KalenderPage() {
  const [allEvents] = useState(events);

  function eventStyleGetter(event: EventWithAvailability) {
    const backgroundColor = availabilityColors[event.availability] || "#777";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.85,
        color: "black",
        border: "0px",
        display: "block",
      },
    };
  }

  return (
    <main className="bg-[#EBEBEB] min-h-screen pt-30">
      {/* Information section */}
      <div className="flex flex-col justify-center pt-16 bg-[#307532] p-6">
        <div className="flex justify-center">
          <h1 className="text-5xl text-white pb-6">Kalender</h1>
        </div>
        <p className="max-w-4xl mx-auto text-center text-white mb-6 px-4">
          I kalenderen viser fargene på hendelsene hvilken sal som er ledig:
          <br />
          <span className="font-semibold text-[#3490dc]">Blå:</span> Storesalen
          er ledig. <br />
          <span className="font-semibold text-[#ffed4a]">Gul:</span> Lillesalen
          er ledig. <br />
          <span className="font-semibold text-[#e3342f]">Rød:</span> Ingen saler
          er ledig. (fullbooket). <br />
          <br />
          Hvis en dag eller tidsrom ikke har noen hendelser, betyr det i
          utgangspunktet at begge salene er ledige.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-x-auto mt-24 p-6">
        <Calendar
          localizer={localizer}
          culture="nb"
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day"]}
          style={{ height: 600, minWidth: 320 }}
          popup
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </main>
  );
}
