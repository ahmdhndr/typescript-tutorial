import { MatchData } from "./MatchData";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { HTMLReport } from "./reports/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalyzer(teamName), new HTMLReport());
  }

  makeAndPrintReport(matches: MatchData[]): void {
    const result = this.analyzer.run(matches);
    this.outputTarget.print(result);
  }
}
