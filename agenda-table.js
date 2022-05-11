import { enhance } from "./enhance-html.js";

const agendaType = [
  ["startTime", "endTime", "eventDetails", "location", "trail map", "pictures"],
];

export const table = (agenda, title = "Title Needed") => {
  const html = /* html */ `
      <div class="gc-agenda">
        <h2>${title}</h2>
        <table>
          <tbody>
            ${agenda
              .map(
                (r, i) =>
                  `<tr>${r
                    .map((c) => {
                      const d = enhance(c);
                      return i ? `<td>${d}</td>` : `<th>${d}</th>`;
                    })
                    .join("")}</tr>\n`
              )
              .join("")}
          </tbody>
        <table>
      </div>`;
  return html;
};
