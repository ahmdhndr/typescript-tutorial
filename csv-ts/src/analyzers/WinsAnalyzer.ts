import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalyzer implements Analyzer {
  constructor(public teamName: string) {}

  run(teamMatches: MatchData[]): string {
    let wins = 0;

    for (let match of teamMatches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games`;
  }
}
