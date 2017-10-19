
A lightweight cross-browser JavaScript library for detecting browser and user language.


[![NPM][npm]][npm-url]
[![Build Status][travis]][travis-url]
[![Coverage Status][coverage]][coverage-url]
[![Quality][quality]][quality-url]
[![License][license]][license-url]

## Download

[Latest build][download-url]

## Installation

In a browser:
```html
<script src="BrowserLanguageDetector.js"></script>
```

Using npm:
```shell
$ npm i --save browser-language-detector
```

## API

Get preferred language

```javascript
BrowserLanguageDetector.preferredLanguage;
```

Get list of all detected languages

```javascript
BrowserLanguageDetector.detectedLanguages;
```

Set up your preferred language and set up white list of supported languages of your system. And get preferred detected language

```
BrowserLanguageDetector.config({fallbackLanguage: 'it', whiteListLanguages: ['en','zhen', 'ru']});
```

## License

  [MIT](LICENSE)
  

[download-url]: https://raw.githubusercontent.com/pushandplay/browser-language-detector/master/dist/BrowserLanguageDetector.min.js

[npm]: https://img.shields.io/npm/v/browser-language-detector.svg
[npm-url]: https://www.npmjs.com/package/browser-language-detector

[travis]: https://travis-ci.org/pushandplay/browser-language-detector.svg?branch=master
[travis-url]: https://travis-ci.org/pushandplay/browser-language-detector

[coverage]: https://coveralls.io/repos/github/pushandplay/browser-language-detector/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/pushandplay/browser-language-detector?branch=master

[quality]: https://www.bithound.io/github/pushandplay/browser-language-detector/badges/score.svg
[quality-url]: https://www.bithound.io/github/pushandplay/browser-language-detector

[license]: https://img.shields.io/github/license/pushandplay/browser-language-detector.svg
[license-url]: https://github.com/pushandplay/browser-language-detector/blob/master/LICENSE