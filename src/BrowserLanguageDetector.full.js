import BrowserLanguageDetector from './BrowserLanguageDetector';
import NavigatorDetector from './detectors/NavigatorDetector';
import HTMLTagDetector from './detectors/HTMLTagDetector';
import QueryStringDetector from './detectors/QueryStringDetector';

const detectors = [
  NavigatorDetector,
  HTMLTagDetector,
  QueryStringDetector
];

export default BrowserLanguageDetector.config({detectors});