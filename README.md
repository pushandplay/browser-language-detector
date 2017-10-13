[![NPM](https://nodei.co/npm/browser-language-detector.png?global=true)](https://nodei.co/npm/browser-language-detector/)

[![npm](https://img.shields.io/npm/v/browser-language-detector.svg)](https://www.npmjs.com/package/browser-language-detector) [![Build Status](https://travis-ci.org/pushandplay/browser-language-detector.svg?branch=master)](https://travis-ci.org/pushandplay/browser-language-detector) [![license](https://img.shields.io/github/license/pushandplay/browser-language-detector.svg)](https://github.com/pushandplay/browser-language-detector/blob/master/LICENSE)

A lightweight cross-browser JavaScript library for detecting browser language.

## Download

 * [Latest build](https://raw.githubusercontent.com/pushandplay/browser-language-detector/master/dist/BrowserLanguageDetector.min.js)

## Installation

In a browser:
```html
<script src="BrowserLanguageDetector.js"></script>
```

Using npm:
```shell
$ npm i --save browser-language-detector
```

So... it works like this:

```javascript
BrowserLanguageDetector.detect();
// en or your browser language
```

You can specify default fallback language
```javascript
BrowserLanguageDetector
    .config({defaultLanguage: 'zh'})
    .detect();
// zh
```