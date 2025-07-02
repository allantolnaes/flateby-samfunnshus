export type Availability = "storesalen" | "lillesalen" | "begge" | "ingen";

export interface EventWithAvailability {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  availability: Availability;
}

export const availabilityColors: Record<Availability, string> = {
  storesalen: "#3490dc", // blue
  lillesalen: "#ffed4a", // yellow
  begge: "#38c172", // green
  ingen: "#e3342f", // red
};

export const events: EventWithAvailability[] = [
  {
    id: 0,
    title: "Privat arrangement i Storesalen",
    start: new Date(2025, 6, 6),
    end: new Date(2025, 6, 6),
    availability: "lillesalen",
    allDay: true,
  },
  {
    id: 1,
    title: "Hele huset utleid",
    start: new Date(2025, 6, 17),
    end: new Date(2025, 6, 21),
    allDay: true,
    availability: "ingen",
  },
  {
    id: 2,
    title: "Privat arrangement i Storesalen",
    start: new Date(2025, 7, 16),
    end: new Date(2025, 7, 18),
    allDay: true,
    availability: "lillesalen",
  },
  {
    id: 3,
    title: "Privat arrangement på hele huset",
    start: new Date(2025, 7, 23),
    end: new Date(2025, 7, 25),
    allDay: true,
    availability: "ingen",
  },
  {
    id: 4,
    title: "Privat arrangement i Lillesalen",
    start: new Date(2025, 7, 30),
    end: new Date(2025, 7, 30),
    allDay: true,
    availability: "storesalen",
  },
  {
    id: 5,
    title: "QUIZ i Storesalen",
    start: new Date(2025, 8, 4),
    end: new Date(2025, 8, 4),
    allDay: true,
    availability: "lillesalen",
  },
  {
    id: 6,
    title: "Privat arrangement i Storesalen",
    start: new Date(2025, 8, 5),
    end: new Date(2025, 8, 8),
    allDay: true,
    availability: "lillesalen",
  },
];
