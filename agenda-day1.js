import { table } from "./agenda-table.js";

const agenda = [
  ["Start", "End", "Details"],
  [
    "9:00 AM",
    "1:30 PM",
    "Drive from <ilr />Vegas to <ill />Lava River Cave <iml /> with one stop.<ilw />",
  ],
  [
    "1:30 PM",
    "3:00 PM",
    "3/4 mile cave. Need 2-3 light sources and jacket cave is 40 F. " +
      "<ipl /> <iwl />",
  ],
  [
    "3:00 PM",
    "3:45 PM",
    "Drive to <ilp />Picture Canyon Natural and Cultural Preserve.",
  ],
  [
    "3:45 PM",
    "5:45 PM",
    "Picture Canyon hike 3.9 miles, Waterfalls, Petroglyph x2,<br />" +
      "Railroad trestle, pithouse, Rio de flag bridge. " +
      "<imp /> <ipp /> <iwp />",
  ],
  ["5:45 PM", "6:00 PM", "Drive to <ilh />Hotel Monte Vista. <iph />"],
  [
    "6:00 PM",
    "8:00 PM",
    "Dinner at Pato Thai<iwo />or MartAnnes Burrito<iwa />or McMillan<iwm />",
  ],
];

class GcAgenda extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = table(agenda, "12th - Day Before Hike");
  }
}

customElements.define("agenda-day1", GcAgenda);
