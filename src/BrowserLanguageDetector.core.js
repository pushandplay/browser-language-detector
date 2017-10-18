import BrowserLanguageDetector from './BrowserLanguageDetector';
import NavigatorDetector from './detectors/NavigatorDetector';

const detectors = [
  NavigatorDetector,
];

export default BrowserLanguageDetector.config({detectors});