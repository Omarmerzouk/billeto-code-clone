
import { Event } from "../../types/event";
import { conferencesEvents } from "./conferences";
import { seminarsEvents } from "./seminars";
import { summitsEvents } from "./summits";

// Combine all event types into a single array
export const events: Event[] = [
  ...conferencesEvents,
  ...seminarsEvents,
  ...summitsEvents
];
