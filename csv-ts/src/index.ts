import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const liverpoolSummary = Summary.winAnalysisWithHtmlReport("Liverpool");
liverpoolSummary.makeAndPrintReport(matchReader.matches);

// import { CsvFileReader } from "./CsvFileReader";
// import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
// import { ConsoleReport } from "./reports/ConsoleReport";
// import { HTMLReport } from "./reports/HTMLReport";

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = MatchReader.fromCsv("football.csv");
// matchReader.load();

// const liverpoolSummary = Summary.winAnalysisWithHtmlReport("Liverpool");
// liverpoolSummary.makeAndPrintReport(matchReader.matches);
