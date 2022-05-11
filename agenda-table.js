import { enhance } from "./enhance-html.js";

const agendaType = [
  ["startTime", "endTime", "eventDetails", "location", "trail map", "pictures"],
];

export const table = (agenda, title = "Title Needed") => {
  const head = agenda.slice(0, 1);
  const body = agenda.slice(1);
  const html = /* html */ `
      <div class="gc-agenda">
        <h2>${title}</h2>
        <table>
          <thead>
            ${head
              .map(
                (r, i) => `<tr>${r.map((c) => `<th>${c}</th>`).join("")}</tr>\n`
              )
              .join("")}
          <thead>
          <tbody>
            ${body
              .map(
                (r) =>
                  `<tr>${r
                    .map((c) => `<td>${enhance(c)}</td>`)
                    .join("")}</tr>\n`
              )
              .join("")}
          </tbody>
        <table>
      </div>`;
  return html;
};
