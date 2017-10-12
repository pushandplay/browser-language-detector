!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("BrowserLanguageDetector", [], t) : "object" == typeof exports ? exports.BrowserLanguageDetector = t() : e.BrowserLanguageDetector = t()
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {i: r, l: !1, exports: {}};
      return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 2)
  }([function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }, u = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(), i = n(1), a = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r(this, e), this.languages = [], this.options = o({}, this.options, t), this
      }

      return u(e, [{
        key: "detect", value: function () {
          return (0, i.uniq)(this.languages)
        }
      }]), e
    }();
    t.default = a, e.exports = t.default
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function (e) {
      return [].concat(r(new Set(e)))
    }, u = function (e) {
      return e.replace(/-.*/, "").toLowerCase()
    };
    t.uniq = o, t.simplify = u
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), o = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(r);
    t.default = o.default, e.exports = t.default
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var u = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(), a = n(4), f = r(a), c = n(5), l = r(c), s = n(6), p = r(s),
      y = {defaultLanguage: "en", whiteListLanguages: ["ru", "es"], queryString: "lang"}, d = function () {
        function e() {
          o(this, e)
        }

        return i(e, null, [{
          key: "config", value: function (e) {
            return this.options = u({}, y, e), this
          }
        }, {
          key: "detect", value: function () {
            var t = new f.default(this.options), n = new p.default(this.options), r = new l.default(this.options),
              o = [].concat(t.detect(), n.detect(), r.detect());
            return e.selectPreferredLanguage(o)
          }
        }, {
          key: "selectPreferredLanguage", value: function (e) {
            return e[e.indexOf(this.options.defaultLanguage)] || this.options.defaultLanguage
          }
        }]), e
      }();
    t.default = d, e.exports = t.default
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(), a = function e(t, n, r) {
      null === t && (t = Function.prototype);
      var o = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === o) {
        var u = Object.getPrototypeOf(t);
        return null === u ? void 0 : e(u, n, r)
      }
      if ("value" in o) return o.value;
      var i = o.get;
      if (void 0 !== i) return i.call(r)
    }, f = n(0), c = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(f), l = n(1), s = function (e) {
      function t() {
        return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }

      return u(t, e), i(t, [{
        key: "detect", value: function () {
          var e = window.navigator || window.clientInformation || {};
          return this.languages = [].concat(e.languages, e.language, e.userLanguage, e.browserLanguage, e.systemLanguage, this.options.defaultLanguage).filter(function (e) {
            return e
          }).map(function (e) {
            return (0, l.simplify)(e)
          }), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "detect", this).call(this)
        }
      }]), t
    }(c.default);
    t.default = s, e.exports = t.default
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(), a = function e(t, n, r) {
      null === t && (t = Function.prototype);
      var o = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === o) {
        var u = Object.getPrototypeOf(t);
        return null === u ? void 0 : e(u, n, r)
      }
      if ("value" in o) return o.value;
      var i = o.get;
      if (void 0 !== i) return i.call(r)
    }, f = n(0), c = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(f), l = function (e) {
      function t() {
        return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }

      return u(t, e), i(t, [{
        key: "detect", value: function () {
          var e = "undefined" != typeof document ? document.documentElement : null;
          return e && "function" == typeof e.getAttribute && (this.languages = [e.getAttribute("lang")]), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "detect", this).call(this)
        }
      }]), t
    }(c.default);
    t.default = l, e.exports = t.default
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(), a = function e(t, n, r) {
      null === t && (t = Function.prototype);
      var o = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === o) {
        var u = Object.getPrototypeOf(t);
        return null === u ? void 0 : e(u, n, r)
      }
      if ("value" in o) return o.value;
      var i = o.get;
      if (void 0 !== i) return i.call(r)
    }, f = n(0), c = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(f), l = function (e) {
      function t() {
        return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }

      return u(t, e), i(t, [{
        key: "detect", value: function () {
          if ("undefined" != typeof window) for (var e = window.location.search.substring(1), n = e.split("&"), r = 0; r < n.length; r++) {
            var o = n[r].indexOf("=");
            if (o > 0) {
              var u = n[r].substring(0, o);
              u === this.options.queryString && (this.languages = [n[r].substring(o + 1)])
            }
          }
          return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "detect", this).call(this)
        }
      }]), t
    }(c.default);
    t.default = l, e.exports = t.default
  }])
});