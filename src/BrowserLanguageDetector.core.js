import BrowserLanguageDetector from './BrowserLanguageDetector';
import NavigatorPlugin from './plugins/NavigatorPlugin';

const plugins = [
  NavigatorPlugin,
];

export default BrowserLanguageDetector.config({plugins});