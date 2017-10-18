import BrowserLanguageDetector from './BrowserLanguageDetector';
import NavigatorPlugin from './plugins/NavigatorPlugin';
// import HTMLTagPlugin from './plugins/HTMLTagPlugin';
// import QueryStringPlugin from './plugins/QueryStringPlugin';

const plugins = [
  NavigatorPlugin,
  // HTMLTagPlugin,
  // QueryStringPlugin
];

export default BrowserLanguageDetector.config({plugins});