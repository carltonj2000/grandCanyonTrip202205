import { table } from "./agenda-table.js";

const agenda = [
  ["Start", "End", "Details"],
  [
    "7:00 AM",
    "7:30 AM",
    " Grand Canyon Visitor Orange Shuttle<ilv /> To Kaibab Rim<ilk /><ips />",
  ],
  [
    "7:30 AM",
    "9:00 AM",
    "4.4 miles down to The Tip Off <ilt />and Tonto Trail",
  ],
  ["9:00 AM", "11:00 AM", "4.3 miles on Tonto Trail to Indian Garden<ili />"],
  ["11:00 AM", "12:30 PM", "1.6 Mile to Plateau Point<ilu /> and lunch break"],
  [
    "12:30 PM",
    "5:00 PM",
    "6.1 Mile up Bright Angle Trail to GC Village<ilb />",
  ],
  ["5:00 PM", "5:05 PM", "<ily /> Bright Angel Lodge For Eats And Rest"],
  ["5:00 PM", "5:05 PM", "Hermits Rest Blue Shuttle Bus<ipy />"],
  [
    "5:05 PM",
    "5:30 PM",
    "<ips />Blue Shuttle Bus In Village to Visitor Center",
  ],
];

class GcAgenda extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = table(agenda, "13th - Hike Day");
  }
}

customElements.define("agenda-day2", GcAgenda);
