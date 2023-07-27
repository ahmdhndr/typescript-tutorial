import { writeFileSync } from "node:fs";

import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    const renderHTML = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    writeFileSync("report.html", renderHTML);
  }
}
