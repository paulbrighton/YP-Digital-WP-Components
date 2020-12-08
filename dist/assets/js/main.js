/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y["default"])(w, x), (0, b["default"])(w, x.once), w;
    },
        O = function O() {
      w = (0, h["default"])(), j();
    },
        M = function M() {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function S(e) {
      return e === !0 || "mobile" === e && p["default"].mobile() || "phone" === e && p["default"].phone() || "tablet" === e && p["default"].tablet() || "function" == typeof e && e() === !0;
    },
        _ = function _(e) {
      x = i(x, e), w = (0, h["default"])();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? M() : (x.disableMutationObserver || d["default"].isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, s["default"])(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s["default"])(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u["default"])(function () {
        (0, b["default"])(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d["default"].ready("[data-aos]", O), w);
    };

    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }

        function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w,
              o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O(),
              n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }

      var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function O() {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }

        function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;
          return S ? x(i, y - o) : i;
        }

        function s(e) {
          var n = e - w,
              o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j(),
              n = s(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;

        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }

      var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function j() {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
          o = void 0,
          i = void 0;

      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }

      return !1;
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function i() {
      return !!o();
    }

    function r(e, t) {
      var n = window.document,
          i = o(),
          r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            o = Array.prototype.slice.call(e.removedNodes),
            i = t.concat(o);
        if (n(i)) return u();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = function u() {};

    t["default"] = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: "phone",
        value: function value() {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t["default"] = new s();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e, t, _n) {
      var o = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !_n && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function o(e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t["default"] = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(12),
        r = o(i),
        a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r["default"])(e.node, t.offset);
      }), e;
    };

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(13),
        r = o(i),
        a = function a(e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r["default"])(e).top, a.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          n += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          n += e.offsetHeight;
          break;

        case "top-center":
          n += i / 2;
          break;

        case "bottom-center":
          n += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          n += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          n += i;
          break;

        case "bottom-top":
          n += e.offsetHeight + i;
          break;

        case "center-top":
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t["default"] = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: n,
        left: t
      };
    };

    t["default"] = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t["default"] = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/assets/js/components/accordion.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/accordion.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion--expand').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__btn').html('<span><i class="fas fa-angle-double-down fa-xs"></i></span>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__body:visible').slideUp();

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().is(':visible')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().slideDown(200);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.c-accordion__btn').html('<span><i class="fas fa-angle-double-up fa-xs"></i></span>');
  }
});

/***/ }),

/***/ "./src/assets/js/components/animate.js":
/*!*********************************************!*\
  !*** ./src/assets/js/components/animate.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
 // You can also pass an optional settings object
// below listed default settings

aos__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 600,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});

/***/ }),

/***/ "./src/assets/js/components/navigation/hamburger-nav.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/components/navigation/hamburger-nav.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var isOpen = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.openbtn').click(function () {
    if (isOpen === 0) {
      openNav();
    } else {
      closeNav();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.closebtn').click(function () {
    closeNav();
  });

  function openNav() {
    document.getElementById('myNav').style.width = '100%';
    isOpen = 1;
  }

  function closeNav() {
    document.getElementById('myNav').style.width = '0%';
    isOpen = 0;
  }
});

/***/ }),

/***/ "./src/assets/js/components/navigation/navigation.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/components/navigation/navigation.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
  console.log('mouse enter');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();

  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation_hamburger_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/hamburger-nav */ "./src/assets/js/components/navigation/hamburger-nav.js");
/* harmony import */ var _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation */ "./src/assets/js/components/navigation/navigation.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/animate */ "./src/assets/js/components/animate.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion */ "./src/assets/js/components/accordion.js");





 // import webpackStream from 'webpack-stream'

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post__gallery').slick({
    'arrows': false,
    'adaptiveHeight': true
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.most_recent_widget').slick();

  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === '_themename_most_recent_widget') {
        placement.container.find('.most_recent_widget').slick();
      }
    });
  }
});

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulbrighton/Sites/yp-digital-framework-components/wp-content/themes/yp-digital-fw/src/assets/js/main.js */"./src/assets/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hbmltYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwibyIsIm4iLCJpIiwiaWQiLCJsb2FkZWQiLCJjYWxsIiwibSIsImMiLCJwIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiciIsImEiLCJ1IiwicyIsImYiLCJkIiwibCIsImIiLCJ2IiwieSIsImciLCJoIiwidyIsImsiLCJ4Iiwib2Zmc2V0IiwiZGVsYXkiLCJlYXNpbmciLCJkdXJhdGlvbiIsImRpc2FibGUiLCJvbmNlIiwic3RhcnRFdmVudCIsInRocm90dGxlRGVsYXkiLCJkZWJvdW5jZURlbGF5IiwiZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXIiLCJqIiwiTyIsIk0iLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlMiLCJtb2JpbGUiLCJwaG9uZSIsInRhYmxldCIsIl8iLCJkb2N1bWVudCIsImFsbCIsIndpbmRvdyIsImF0b2IiLCJpc1N1cHBvcnRlZCIsImNvbnNvbGUiLCJpbmZvIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlYWR5IiwiaW5pdCIsInJlZnJlc2giLCJyZWZyZXNoSGFyZCIsImFwcGx5Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlR5cGVFcnJvciIsImxlYWRpbmciLCJtYXhXYWl0IiwidHJhaWxpbmciLCJjYW5jZWwiLCJmbHVzaCIsInZhbHVlT2YiLCJyZXBsYWNlIiwidGVzdCIsInNsaWNlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIk5hTiIsInBhcnNlSW50Iiwic2VsZiIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJNYXRoIiwibWF4IiwibWluIiwiRGF0ZSIsIm5vdyIsImRhdGFzZXQiLCJhb3MiLCJjaGlsZHJlbiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVtb3ZlZE5vZGVzIiwiQXJyYXkiLCJhZGRlZE5vZGVzIiwiY29uY2F0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5Iiwic3Vic3RyIiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiYW5jaG9yIiwiYW5jaG9yUGxhY2VtZW50IiwiaXNOYU4iLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9wIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInRhZ05hbWUiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwib2Zmc2V0UGFyZW50IiwibGVmdCIsIm1hcCIsImZhY3RvcnkiLCIkIiwiU2xpY2siLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwiYXBwZW5kQXJyb3dzIiwiYXBwZW5kRG90cyIsImFycm93cyIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJjc3NFYXNlIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwidGV4dCIsImRvdHMiLCJkb3RzQ2xhc3MiLCJkcmFnZ2FibGUiLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImZvY3VzT25DaGFuZ2UiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJydGwiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3BlZWQiLCJzd2lwZSIsInN3aXBlVG9TbGlkZSIsInRvdWNoTW92ZSIsInRvdWNoVGhyZXNob2xkIiwidXNlQ1NTIiwidXNlVHJhbnNmb3JtIiwidmFyaWFibGVXaWR0aCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwid2FpdEZvckFuaW1hdGUiLCJ6SW5kZXgiLCJpbml0aWFscyIsImFuaW1hdGluZyIsImRyYWdnaW5nIiwiYXV0b1BsYXlUaW1lciIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50TGVmdCIsImN1cnJlbnRTbGlkZSIsImRpcmVjdGlvbiIsIiRkb3RzIiwibGlzdFdpZHRoIiwibGlzdEhlaWdodCIsImxvYWRJbmRleCIsIiRuZXh0QXJyb3ciLCIkcHJldkFycm93Iiwic2Nyb2xsaW5nIiwic2xpZGVDb3VudCIsInNsaWRlV2lkdGgiLCIkc2xpZGVUcmFjayIsIiRzbGlkZXMiLCJzbGlkaW5nIiwic2xpZGVPZmZzZXQiLCJzd2lwZUxlZnQiLCJzd2lwaW5nIiwiJGxpc3QiLCJ0b3VjaE9iamVjdCIsInRyYW5zZm9ybXNFbmFibGVkIiwidW5zbGlja2VkIiwiZXh0ZW5kIiwiYWN0aXZlQnJlYWtwb2ludCIsImFuaW1UeXBlIiwiYW5pbVByb3AiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRTZXR0aW5ncyIsImNzc1RyYW5zaXRpb25zIiwiZm9jdXNzZWQiLCJpbnRlcnJ1cHRlZCIsImhpZGRlbiIsInBhdXNlZCIsInBvc2l0aW9uUHJvcCIsInJvd0NvdW50Iiwic2hvdWxkQ2xpY2siLCIkc2xpZGVyIiwiJHNsaWRlc0NhY2hlIiwidHJhbnNmb3JtVHlwZSIsInRyYW5zaXRpb25UeXBlIiwidmlzaWJpbGl0eUNoYW5nZSIsIndpbmRvd1dpZHRoIiwid2luZG93VGltZXIiLCJkYXRhIiwib3B0aW9ucyIsIm9yaWdpbmFsU2V0dGluZ3MiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImFjdGl2YXRlQURBIiwiZmluZCIsImF0dHIiLCJhZGRTbGlkZSIsInNsaWNrQWRkIiwibWFya3VwIiwiaW5kZXgiLCJhZGRCZWZvcmUiLCJ1bmxvYWQiLCJhcHBlbmRUbyIsImluc2VydEJlZm9yZSIsImVxIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJkZXRhY2giLCJhcHBlbmQiLCJlYWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImFuaW1TdGFydCIsInN0ZXAiLCJjZWlsIiwiY3NzIiwiY29tcGxldGUiLCJhcHBseVRyYW5zaXRpb24iLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsIm5vdCIsInRhcmdldCIsInNsaWNrIiwic2xpZGVIYW5kbGVyIiwidHJhbnNpdGlvbiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlVG8iLCJidWlsZEFycm93cyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsInBhcmVudCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyb3ciLCJnZXQiLCJhcHBlbmRDaGlsZCIsImVtcHR5IiwiY2hlY2tSZXNwb25zaXZlIiwiaW5pdGlhbCIsImZvcmNlVXBkYXRlIiwiYnJlYWtwb2ludCIsInRhcmdldEJyZWFrcG9pbnQiLCJyZXNwb25kVG9XaWR0aCIsInRyaWdnZXJCcmVha3BvaW50Iiwic2xpZGVyV2lkdGgiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJ1bnNsaWNrIiwidHJpZ2dlciIsImV2ZW50IiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwiaXMiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJjbGVhblVwRXZlbnRzIiwib2ZmIiwiaW50ZXJydXB0IiwidmlzaWJpbGl0eSIsImNsZWFuVXBTbGlkZUV2ZW50cyIsIm9yaWVudGF0aW9uQ2hhbmdlIiwicmVzaXplIiwiY2xlYW5VcFJvd3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJkZXN0cm95IiwiZmFkZVNsaWRlIiwic2xpZGVJbmRleCIsIm9wYWNpdHkiLCJmYWRlU2xpZGVPdXQiLCJmaWx0ZXJTbGlkZXMiLCJzbGlja0ZpbHRlciIsImZpbHRlciIsImZvY3VzSGFuZGxlciIsIm9uIiwiJHNmIiwiZ2V0Q3VycmVudCIsInNsaWNrQ3VycmVudFNsaWRlIiwiYnJlYWtQb2ludCIsImNvdW50ZXIiLCJwYWdlclF0eSIsImdldExlZnQiLCJ2ZXJ0aWNhbEhlaWdodCIsInZlcnRpY2FsT2Zmc2V0IiwidGFyZ2V0U2xpZGUiLCJjb2VmIiwiZmxvb3IiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiYWJzIiwiZ29UbyIsInNsaWNrR29UbyIsImNyZWF0aW9uIiwiaGFzQ2xhc3MiLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiYWN0aW9uIiwiaW5pdFVJIiwic2hvdyIsIm1hdGNoIiwia2V5Q29kZSIsImxvYWRSYW5nZSIsImNsb25lUmFuZ2UiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VzU2NvcGUiLCJpbWFnZSIsImltYWdlU291cmNlIiwiaW1hZ2VTcmNTZXQiLCJpbWFnZVNpemVzIiwiaW1hZ2VUb0xvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsIm5leHQiLCJzbGlja05leHQiLCJwYXVzZSIsInNsaWNrUGF1c2UiLCJwbGF5Iiwic2xpY2tQbGF5IiwicG9zdFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsImZvY3VzIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJ0eXBlIiwic3BsaWNlIiwic29ydCIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInJlbW92ZUJlZm9yZSIsInJlbW92ZUFsbCIsInNldENTUyIsInBvc2l0aW9uUHJvcHMiLCJzZXREaW1lbnNpb25zIiwicGFkZGluZyIsInNldEZhZGUiLCJyaWdodCIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsIm9wdCIsImJvZHlTdHlsZSIsImJvZHkiLCJzdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJNb3pUcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiT1RyYW5zZm9ybSIsInBlcnNwZWN0aXZlUHJvcGVydHkiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsIk1velRyYW5zZm9ybSIsIk1velBlcnNwZWN0aXZlIiwid2Via2l0VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJhbGxTbGlkZXMiLCJyZW1haW5kZXIiLCJldmVuQ29lZiIsImluZmluaXRlQ291bnQiLCJjbG9uZSIsInRvZ2dsZSIsInRhcmdldEVsZW1lbnQiLCJwYXJlbnRzIiwic3luYyIsImFuaW1TbGlkZSIsIm9sZFNsaWRlIiwic2xpZGVMZWZ0IiwibmF2VGFyZ2V0IiwiaGlkZSIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwicm91bmQiLCJQSSIsInN3aXBlRW5kIiwic3dpcGVMZW5ndGgiLCJlZGdlSGl0IiwibWluU3dpcGUiLCJmaW5nZXJDb3VudCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwic3dpcGVTdGFydCIsInN3aXBlTW92ZSIsImVkZ2VXYXNIaXQiLCJjdXJMZWZ0IiwicG9zaXRpb25PZmZzZXQiLCJ2ZXJ0aWNhbFN3aXBlTGVuZ3RoIiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwic3FydCIsInBvdyIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciIsImZyb21CcmVha3BvaW50IiwiZm4iLCJhcmdzIiwicmV0Iiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJodG1sIiwic2xpZGVVcCIsInNsaWRlRG93biIsIkFPUyIsImluaXRDbGFzc05hbWUiLCJhbmltYXRlZENsYXNzTmFtZSIsInVzZUNsYXNzTmFtZXMiLCJtaXJyb3IiLCJpc09wZW4iLCJjbGljayIsIm9wZW5OYXYiLCJjbG9zZU5hdiIsImdldEVsZW1lbnRCeUlkIiwibG9nIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJtZW51X2l0ZW0iLCJzaWJsaW5ncyIsIndwIiwiY3VzdG9taXplIiwic2VsZWN0aXZlUmVmcmVzaCIsImJpbmQiLCJwbGFjZW1lbnQiLCJwYXJ0aWFsIiwid2lkZ2V0SWRQYXJ0cyIsImlkQmFzZSIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLDRDQUFpQkMsT0FBakIsTUFBMEIsMENBQWlCQyxNQUFqQixFQUExQixHQUFrREEsTUFBTSxDQUFDRCxPQUFQLEdBQWVELENBQUMsRUFBbEUsR0FBcUUsUUFBc0NHLGlDQUFPLEVBQUQsb0NBQUlILENBQUo7QUFBQTtBQUFBO0FBQUEsb0dBQTVDLEdBQW1ELFNBQXhIO0FBQTJLLENBQXpMLENBQTBMLElBQTFMLEVBQStMLFlBQVU7QUFBQyxTQUFPLFVBQVNELENBQVQsRUFBVztBQUFDLGFBQVNDLENBQVQsQ0FBV0ksQ0FBWCxF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QUFnRG9DLEtBQWhEO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7QUFDRixDQWRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQU9TPXQoKTplLkFPUz10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIGk9bltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJkaXN0L1wiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0scj1uKDEpLGE9KG8ociksbig2KSksdT1vKGEpLGM9big3KSxzPW8oYyksZj1uKDgpLGQ9byhmKSxsPW4oOSkscD1vKGwpLG09bigxMCksYj1vKG0pLHY9bigxMSkseT1vKHYpLGc9bigxNCksaD1vKGcpLHc9W10saz0hMSx4PXtvZmZzZXQ6MTIwLGRlbGF5OjAsZWFzaW5nOlwiZWFzZVwiLGR1cmF0aW9uOjQwMCxkaXNhYmxlOiExLG9uY2U6ITEsc3RhcnRFdmVudDpcIkRPTUNvbnRlbnRMb2FkZWRcIix0aHJvdHRsZURlbGF5Ojk5LGRlYm91bmNlRGVsYXk6NTAsZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6ITF9LGo9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO2lmKGUmJihrPSEwKSxrKXJldHVybiB3PSgwLHkuZGVmYXVsdCkodyx4KSwoMCxiLmRlZmF1bHQpKHcseC5vbmNlKSx3fSxPPWZ1bmN0aW9uKCl7dz0oMCxoLmRlZmF1bHQpKCksaigpfSxNPWZ1bmN0aW9uKCl7dy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiKX0pfSxTPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ITB8fFwibW9iaWxlXCI9PT1lJiZwLmRlZmF1bHQubW9iaWxlKCl8fFwicGhvbmVcIj09PWUmJnAuZGVmYXVsdC5waG9uZSgpfHxcInRhYmxldFwiPT09ZSYmcC5kZWZhdWx0LnRhYmxldCgpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCk9PT0hMH0sXz1mdW5jdGlvbihlKXt4PWkoeCxlKSx3PSgwLGguZGVmYXVsdCkoKTt2YXIgdD1kb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYjtyZXR1cm4gUyh4LmRpc2FibGUpfHx0P00oKTooeC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LmlzU3VwcG9ydGVkKCl8fChjb25zb2xlLmluZm8oJ1xcbiAgICAgIGFvczogTXV0YXRpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcixcXG4gICAgICBjb2RlIG11dGF0aW9ucyBvYnNlcnZpbmcgaGFzIGJlZW4gZGlzYWJsZWQuXFxuICAgICAgWW91IG1heSBoYXZlIHRvIGNhbGwgXCJyZWZyZXNoSGFyZCgpXCIgYnkgeW91cnNlbGYuXFxuICAgICcpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI9ITApLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiLHguZWFzaW5nKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiLHguZHVyYXRpb24pLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIseC5kZWxheSksXCJET01Db250ZW50TG9hZGVkXCI9PT14LnN0YXJ0RXZlbnQmJltcImNvbXBsZXRlXCIsXCJpbnRlcmFjdGl2ZVwiXS5pbmRleE9mKGRvY3VtZW50LnJlYWR5U3RhdGUpPi0xP2ooITApOlwibG9hZFwiPT09eC5zdGFydEV2ZW50P3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoMCx1LmRlZmF1bHQpKGZ1bmN0aW9uKCl7KDAsYi5kZWZhdWx0KSh3LHgub25jZSl9LHgudGhyb3R0bGVEZWxheSkpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5yZWFkeShcIltkYXRhLWFvc11cIixPKSx3KX07ZS5leHBvcnRzPXtpbml0Ol8scmVmcmVzaDpqLHJlZnJlc2hIYXJkOk99fSxmdW5jdGlvbihlLHQpe30sLCwsLGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIG8odCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsaz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGs9ZSxoPXNldFRpbWVvdXQoZix0KSxNP28oZSk6Z31mdW5jdGlvbiBhKGUpe3ZhciBuPWUtdyxvPWUtayxpPXQtbjtyZXR1cm4gUz9qKGkseS1vKTppfWZ1bmN0aW9uIGMoZSl7dmFyIG49ZS13LG89ZS1rO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPU8oKTtyZXR1cm4gYyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsYShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/byhlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLGs9MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKE8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPU8oKSxuPWMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLG8odyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsaz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gdD11KHQpfHwwLGkobikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz94KHUobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUsdCxvKXt2YXIgcj0hMCxhPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gaShvKSYmKHI9XCJsZWFkaW5nXCJpbiBvPyEhby5sZWFkaW5nOnIsYT1cInRyYWlsaW5nXCJpbiBvPyEhby50cmFpbGluZzphKSxuKGUsdCx7bGVhZGluZzpyLG1heFdhaXQ6dCx0cmFpbGluZzphfSl9ZnVuY3Rpb24gaShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiByKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl9ZnVuY3Rpb24gYShlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKXx8cihlKSYmay5jYWxsKGUpPT1kfWZ1bmN0aW9uIHUoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYShlKSlyZXR1cm4gZjtpZihpKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPWkodCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UobCxcIlwiKTt2YXIgbj1tLnRlc3QoZSk7cmV0dXJuIG58fGIudGVzdChlKT92KGUuc2xpY2UoMiksbj8yOjgpOnAudGVzdChlKT9mOitlfXZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsZj1OYU4sZD1cIltvYmplY3QgU3ltYm9sXVwiLGw9L15cXHMrfFxccyskL2cscD0vXlstK10weFswLTlhLWZdKyQvaSxtPS9eMGJbMDFdKyQvaSxiPS9eMG9bMC03XSskL2ksdj1wYXJzZUludCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCxnPVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOmMoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixoPXl8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx3PU9iamVjdC5wcm90b3R5cGUsaz13LnRvU3RyaW5nLHg9TWF0aC5tYXgsaj1NYXRoLm1pbixPPWZ1bmN0aW9uKCl7cmV0dXJuIGguRGF0ZS5ub3coKX07ZS5leHBvcnRzPW99KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsTz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIE89ZSxoPXNldFRpbWVvdXQoZix0KSxNP2koZSk6Z31mdW5jdGlvbiB1KGUpe3ZhciBuPWUtdyxvPWUtTyxpPXQtbjtyZXR1cm4gUz94KGkseS1vKTppfWZ1bmN0aW9uIHMoZSl7dmFyIG49ZS13LG89ZS1PO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPWooKTtyZXR1cm4gcyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsdShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/aShlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLE89MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKGooKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPWooKSxuPXMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLGkodyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsTz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihjKTtyZXR1cm4gdD1hKHQpfHwwLG8obikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz9rKGEobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKX1mdW5jdGlvbiByKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfHxpKGUpJiZ3LmNhbGwoZSk9PWZ9ZnVuY3Rpb24gYShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihyKGUpKXJldHVybiBzO2lmKG8oZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9byh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciBuPXAudGVzdChlKTtyZXR1cm4gbnx8bS50ZXN0KGUpP2IoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP3M6K2V9dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixzPU5hTixmPVwiW29iamVjdCBTeW1ib2xdXCIsZD0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLHA9L14wYlswMV0rJC9pLG09L14wb1swLTddKyQvaSxiPXBhcnNlSW50LHY9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6dSh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6dShzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGc9dnx8eXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGg9T2JqZWN0LnByb3RvdHlwZSx3PWgudG9TdHJpbmcsaz1NYXRoLm1heCx4PU1hdGgubWluLGo9ZnVuY3Rpb24oKXtyZXR1cm4gZy5EYXRlLm5vdygpfTtlLmV4cG9ydHM9bn0pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3ZhciB0PXZvaWQgMCxvPXZvaWQgMCxpPXZvaWQgMDtmb3IodD0wO3Q8ZS5sZW5ndGg7dCs9MSl7aWYobz1lW3RdLG8uZGF0YXNldCYmby5kYXRhc2V0LmFvcylyZXR1cm4hMDtpZihpPW8uY2hpbGRyZW4mJm4oby5jaGlsZHJlbikpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gbygpe3JldHVybiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcnx8d2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyfWZ1bmN0aW9uIGkoKXtyZXR1cm4hIW8oKX1mdW5jdGlvbiByKGUsdCl7dmFyIG49d2luZG93LmRvY3VtZW50LGk9bygpLHI9bmV3IGkoYSk7dT10LHIub2JzZXJ2ZShuLmRvY3VtZW50RWxlbWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITAscmVtb3ZlZE5vZGVzOiEwfSl9ZnVuY3Rpb24gYShlKXtlJiZlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5hZGRlZE5vZGVzKSxvPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucmVtb3ZlZE5vZGVzKSxpPXQuY29uY2F0KG8pO2lmKG4oaSkpcmV0dXJuIHUoKX0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciB1PWZ1bmN0aW9uKCl7fTt0LmRlZmF1bHQ9e2lzU3VwcG9ydGVkOmkscmVhZHk6cn19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbygpe3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmF8fFwiXCJ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxyPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxhPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLGM9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSl9cmV0dXJuIGkoZSxbe2tleTpcInBob25lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghci50ZXN0KGUpJiYhYS50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJtb2JpbGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCF1LnRlc3QoZSkmJiFjLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcInRhYmxldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9iaWxlKCkmJiF0aGlzLnBob25lKCl9fV0pLGV9KCk7dC5kZWZhdWx0PW5ldyBzfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1lLm5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb25jZVwiKTt0PmUucG9zaXRpb24/ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtYW5pbWF0ZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbyYmKFwiZmFsc2VcIj09PW98fCFuJiZcInRydWVcIiE9PW8pJiZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFvcy1hbmltYXRlXCIpfSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG89d2luZG93LnBhZ2VZT2Zmc2V0LGk9d2luZG93LmlubmVySGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlLHIpe24oZSxpK28sdCl9KX07dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEyKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSxuKXtlLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1pbml0XCIpLGUucG9zaXRpb249KDAsci5kZWZhdWx0KShlLm5vZGUsdC5vZmZzZXQpfSksZX07dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEzKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3ZhciBuPTAsbz0wLGk9d2luZG93LmlubmVySGVpZ2h0LGE9e29mZnNldDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9mZnNldFwiKSxhbmNob3I6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3JcIiksYW5jaG9yUGxhY2VtZW50OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudFwiKX07c3dpdGNoKGEub2Zmc2V0JiYhaXNOYU4oYS5vZmZzZXQpJiYobz1wYXJzZUludChhLm9mZnNldCkpLGEuYW5jaG9yJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcilbMF0pLG49KDAsci5kZWZhdWx0KShlKS50b3AsYS5hbmNob3JQbGFjZW1lbnQpe2Nhc2VcInRvcC1ib3R0b21cIjpicmVhaztjYXNlXCJjZW50ZXItYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJib3R0b20tYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwidG9wLWNlbnRlclwiOm4rPWkvMjticmVhaztjYXNlXCJib3R0b20tY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcImNlbnRlci1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJ0b3AtdG9wXCI6bis9aTticmVhaztjYXNlXCJib3R0b20tdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQraTticmVhaztjYXNlXCJjZW50ZXItdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQvMitpfXJldHVybiBhLmFuY2hvclBsYWNlbWVudHx8YS5vZmZzZXR8fGlzTmFOKHQpfHwobz10KSxuK299O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtlJiYhaXNOYU4oZS5vZmZzZXRMZWZ0KSYmIWlzTmFOKGUub2Zmc2V0VG9wKTspdCs9ZS5vZmZzZXRMZWZ0LShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsTGVmdDowKSxuKz1lLm9mZnNldFRvcC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbFRvcDowKSxlPWUub2Zmc2V0UGFyZW50O3JldHVybnt0b3A6bixsZWZ0OnR9fTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZT1lfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW9zXVwiKSxBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZSxmdW5jdGlvbihlKXtyZXR1cm57bm9kZTplfX0pfTt0LmRlZmF1bHQ9bn1dKX0pOyIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS44LjFcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICBpZighcmVmcmVzaCkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQsXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxuICAgICAgICAgICAgY29lZjtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcbiAgICAgICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgPj0gMCkgJiYgKHZhbCA8IF8uc2xpZGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlQ29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBhcmlhQnV0dG9uQ29udHJvbCA9ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBzbGlkZUNvbnRyb2xJbmRleFxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IChpICsgMSkgKyAnIG9mICcgKyBudW1Eb3RHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgICAgICB9KS5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xuXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG5cbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgIC8vRG9udCBzbGlkZSBpZiB0aGUgY3Vyc29yIGlzIGluc2lkZSB0aGUgZm9ybSBmaWVsZHMgYW5kIGFycm93IGtleXMgYXJlIHByZXNzZWRcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNTY29wZSkge1xuXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1NldCA9ICQodGhpcykuYXR0cignZGF0YS1zcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+IDApIHJhbmdlU3RhcnQtLTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcmFuZ2VFbmQsXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEobmV4dFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICQoXy4kc2xpZGVzLmdldChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcbiAgICAgICAgICAgIGltYWdlU2l6ZXMsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4IC0gY2VudGVyT2Zmc2V0ICsgZXZlbkNvZWYsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCxcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XG5cbiAgICAgICAgc3luYyA9IHN5bmMgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uc3dpcGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdG91Y2hlcztcblxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XG4gICAgICAgIF8uZGVzdHJveSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtYWNjb3JkaW9uLS1leHBhbmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5jLWFjY29yZGlvbl9fYnRuJykuaHRtbCgnPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWRvd24gZmEteHNcIj48L2k+PC9zcGFuPicpXG4gICQoJy5jLWFjY29yZGlvbl9fYm9keTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gIGlmICghJCh0aGlzKS5uZXh0KCkuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oMjAwKVxuICAgICQodGhpcykuZmluZCgnLmMtYWNjb3JkaW9uX19idG4nKS5odG1sKCc8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtdXAgZmEteHNcIj48L2k+PC9zcGFuPicpXG4gIH1cbn0pXG4iLCJpbXBvcnQgQU9TIGZyb20gJ2FvcydcblxuLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgc2V0dGluZ3Mgb2JqZWN0XG4vLyBiZWxvdyBsaXN0ZWQgZGVmYXVsdCBzZXR0aW5nc1xuQU9TLmluaXQoe1xuICAvLyBHbG9iYWwgc2V0dGluZ3M6XG4gIGRpc2FibGU6IGZhbHNlLCAvLyBhY2NlcHRzIGZvbGxvd2luZyB2YWx1ZXM6ICdwaG9uZScsICd0YWJsZXQnLCAnbW9iaWxlJywgYm9vbGVhbiwgZXhwcmVzc2lvbiBvciBmdW5jdGlvblxuICBzdGFydEV2ZW50OiAnRE9NQ29udGVudExvYWRlZCcsIC8vIG5hbWUgb2YgdGhlIGV2ZW50IGRpc3BhdGNoZWQgb24gdGhlIGRvY3VtZW50LCB0aGF0IEFPUyBzaG91bGQgaW5pdGlhbGl6ZSBvblxuICBpbml0Q2xhc3NOYW1lOiAnYW9zLWluaXQnLCAvLyBjbGFzcyBhcHBsaWVkIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gIGFuaW1hdGVkQ2xhc3NOYW1lOiAnYW9zLWFuaW1hdGUnLCAvLyBjbGFzcyBhcHBsaWVkIG9uIGFuaW1hdGlvblxuICB1c2VDbGFzc05hbWVzOiBmYWxzZSwgLy8gaWYgdHJ1ZSwgd2lsbCBhZGQgY29udGVudCBvZiBgZGF0YS1hb3NgIGFzIGNsYXNzZXMgb24gc2Nyb2xsXG4gIGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiBmYWxzZSwgLy8gZGlzYWJsZXMgYXV0b21hdGljIG11dGF0aW9ucycgZGV0ZWN0aW9ucyAoYWR2YW5jZWQpXG4gIGRlYm91bmNlRGVsYXk6IDUwLCAvLyB0aGUgZGVsYXkgb24gZGVib3VuY2UgdXNlZCB3aGlsZSByZXNpemluZyB3aW5kb3cgKGFkdmFuY2VkKVxuICB0aHJvdHRsZURlbGF5OiA5OSwgLy8gdGhlIGRlbGF5IG9uIHRocm90dGxlIHVzZWQgd2hpbGUgc2Nyb2xsaW5nIHRoZSBwYWdlIChhZHZhbmNlZClcblxuICAvLyBTZXR0aW5ncyB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIG9uIHBlci1lbGVtZW50IGJhc2lzLCBieSBgZGF0YS1hb3MtKmAgYXR0cmlidXRlczpcbiAgb2Zmc2V0OiAxMjAsIC8vIG9mZnNldCAoaW4gcHgpIGZyb20gdGhlIG9yaWdpbmFsIHRyaWdnZXIgcG9pbnRcbiAgZGVsYXk6IDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZHVyYXRpb246IDYwMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBlYXNpbmc6ICdlYXNlJywgLy8gZGVmYXVsdCBlYXNpbmcgZm9yIEFPUyBhbmltYXRpb25zXG4gIG9uY2U6IGZhbHNlLCAvLyB3aGV0aGVyIGFuaW1hdGlvbiBzaG91bGQgaGFwcGVuIG9ubHkgb25jZSAtIHdoaWxlIHNjcm9sbGluZyBkb3duXG4gIG1pcnJvcjogZmFsc2UsIC8vIHdoZXRoZXIgZWxlbWVudHMgc2hvdWxkIGFuaW1hdGUgb3V0IHdoaWxlIHNjcm9sbGluZyBwYXN0IHRoZW1cbiAgYW5jaG9yUGxhY2VtZW50OiAndG9wLWJvdHRvbScgLy8gZGVmaW5lcyB3aGljaCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWdhcmRpbmcgdG8gd2luZG93IHNob3VsZCB0cmlnZ2VyIHRoZSBhbmltYXRpb25cblxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChmdW5jdGlvbiAoKSB7XG4gIHZhciBpc09wZW4gPSAwXG4gICQoJy5vcGVuYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc09wZW4gPT09IDApIHtcbiAgICAgIG9wZW5OYXYoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU5hdigpXG4gICAgfVxuICB9KVxuICAkKCcuY2xvc2VidG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VOYXYoKVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9wZW5OYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaXNPcGVuID0gMVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIGlzT3BlbiA9IDBcbiAgfVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJylcbiAgY29uc29sZS5sb2coJ21vdXNlIGVudGVyJylcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJylcbn0pXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKVxuICBsZXQgbWVudV9pdGVtID0gbWVudV9saW5rLnBhcmVudCgpXG4gIGlmIChtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICB9IGVsc2Uge1xuICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICB9XG59KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdidcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbidcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hbmltYXRlJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJ1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcbiAgICAnYXJyb3dzJzogZmFsc2UsXG4gICAgJ2FkYXB0aXZlSGVpZ2h0JzogdHJ1ZVxuICB9KVxuXG4gICQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gIGlmICh3cC5jdXN0b21pemUgJiYgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2gpIHtcbiAgICB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaC5iaW5kKCdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLCAocGxhY2VtZW50KSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cyAmJiBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT0gJ190aGVtZW5hbWVfbW9zdF9yZWNlbnRfd2lkZ2V0Jykge1xuICAgICAgICBwbGFjZW1lbnQuY29udGFpbmVyLmZpbmQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=