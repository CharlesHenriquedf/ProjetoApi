(function () {
  var e = "testmessageforsolveroutput";
  var t = 1 * 24 * 60 * 60;
  var n = 3 * 60;
  var r = 1 * 6 * 60 * 60;
  var a = 3 * 60;
  var o =
    typeof code !== "undefined"
      ? code(
          cachedCode(
            "69LawbW91aWV1Ju/6aLn46DHmKW46Ni/3uSlrMe/pcy64dKwzcqw66bA3s27uLbmyrPux72v7bW/x+G1tZ+428m0wuLh7b250Ovp6LfFyA=="
          ),
          e,
          true
        )
      : "doNotUseCache";
  var s = 110;
  var l = "ctrl+shift+3";
  var u = "ctrl+shift+6";
  var f = "http://ar1n.xyz/anticaptcha/getAllHostnameSelectors.json";
  var c = {
    phrase: false,
    case: true,
    numeric: 0,
    math: false,
    minLength: 0,
    maxLength: 0,
    comment: "",
  };
  var d = "http://ar1n.xyz/anticaptcha/plugin_last_version.json";
  var v = "lncaoejhfdpcafpkkcddpjnhnodcajfg";
  var p = "_recaptchaOnloadMethod";
  var h = "_hcaptchaOnloadMethod";
  var m = "UNKNOWN_ERROR";

      (function (e, t) {
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = t())
      : typeof define === "function" && define.amd
      ? define(t)
      : ((e = e || self), (e.Vue = t()));
  })(this, function () {
    "use strict";
    var e = Object.freeze({});
    function t(e) {
      return e === undefined || e === null;
    }
    function n(e) {
      return e !== undefined && e !== null;
    }
    function r(e) {
      return e === true;
    }
    function i(e) {
      return e === false;
    }
    function a(e) {
      return (
        typeof e === "string" ||
        typeof e === "number" ||
        typeof e === "symbol" ||
        typeof e === "boolean"
      );
    }
    function o(e) {
      return e !== null && typeof e === "object";
    }
    var s = Object.prototype.toString;
    function l(e) {
      return s.call(e).slice(8, -1);
    }
    function u(e) {
      return s.call(e) === "[object Object]";
    }
    function f(e) {
      return s.call(e) === "[object RegExp]";
    }
    function c(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e);
    }
    function d(e) {
      return (
        n(e) && typeof e.then === "function" && typeof e.catch === "function"
      );
    }
    function v(e) {
      return e == null
        ? ""
        : Array.isArray(e) || (u(e) && e.toString === s)
        ? JSON.stringify(e, null, 2)
        : String(e);
    }
    function p(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }
    function h(e, t) {
      var n = Object.create(null);
      var r = e.split(",");
      for (var i = 0; i < r.length; i++) {
        n[r[i]] = true;
      }
      return t
        ? function (e) {
            return n[e.toLowerCase()];
          }
        : function (e) {
            return n[e];
          };
    }
    var m = h("slot,component", true);
    var g = h("key,ref,slot,slot-scope,is");
    function y(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) {
          return e.splice(n, 1);
        }
      }
    }
    var _ = Object.prototype.hasOwnProperty;
    function b(e, t) {
      return _.call(e, t);
    }
    function w(e) {
      var t = Object.create(null);
      return function n(r) {
        var i = t[r];
        return i || (t[r] = e(r));
      };
    }
    var x = /-(\w)/g;
    var A = w(function (e) {
      return e.replace(x, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    });
    var k = w(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    });
    var S = /\B([A-Z])/g;
    var C = w(function (e) {
      return e.replace(S, "-$1").toLowerCase();
    });
    function $(e, t) {
      function n(n) {
        var r = arguments.length;
        return r ? (r > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
      }
      n._length = e.length;
      return n;
    }
    function T(e, t) {
      return e.bind(t);
    }
    var O = Function.prototype.bind ? T : $;
    function M(e, t) {
      t = t || 0;
      var n = e.length - t;
      var r = new Array(n);
      while (n--) {
        r[n] = e[n + t];
      }
      return r;
    }
    function L(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }
      return e;
    }
    function N(e) {
      var t = {};
      for (var n = 0; n < e.length; n++) {
        if (e[n]) {
          L(t, e[n]);
        }
      }
      return t;
    }
    function E(e, t, n) {}
    var I = function (e, t, n) {
      return false;
    };
    var P = function (e) {
      return e;
    };
    function D(e) {
      return e
        .reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, [])
        .join(",");
    }
    function j(e, t) {
      if (e === t) {
        return true;
      }
      var n = o(e);
      var r = o(t);
      if (n && r) {
        try {
          var i = Array.isArray(e);
          var a = Array.isArray(t);
          if (i && a) {
            return (
              e.length === t.length &&
              e.every(function (e, n) {
                return j(e, t[n]);
              })
            );
          } else if (e instanceof Date && t instanceof Date) {
            return e.getTime() === t.getTime();
          } else if (!i && !a) {
            var s = Object.keys(e);
            var l = Object.keys(t);
            return (
              s.length === l.length &&
              s.every(function (n) {
                return j(e[n], t[n]);
              })
            );
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      } else if (!n && !r) {
        return String(e) === String(t);
      } else {
        return false;
      }
    }
    function R(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (j(e[n], t)) {
          return n;
        }
      }
      return -1;
    }
    function F(e) {
      var t = false;
      return function () {
        if (!t) {
          t = true;
          e.apply(this, arguments);
        }
      };
    }
    var V = "data-server-rendered";
    var B = ["component", "directive", "filter"];
    var H = [
      "beforeCreate",
      "created",
      "beforeMount",
      "mounted",
      "beforeUpdate",
      "updated",
      "beforeDestroy",
      "destroyed",
      "activated",
      "deactivated",
      "errorCaptured",
      "serverPrefetch",
    ];
    var U = {
      optionMergeStrategies: Object.create(null),
      silent: false,
      productionTip: "development" !== "production",
      devtools: "development" !== "production",
      performance: false,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: I,
      isReservedAttr: I,
      isUnknownElement: I,
      getTagNamespace: E,
      parsePlatformTagName: P,
      mustUseProp: I,
      async: true,
      _lifecycleHooks: H,
    };
    var K =
      /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    function W(e) {
      var t = (e + "").charCodeAt(0);
      return t === 36 || t === 95;
    }
    function q(e, t, n, r) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!r,
        writable: true,
        configurable: true,
      });
    }
    var z = new RegExp("[^" + K.source + ".$_\\d]");
    function J(e) {
      if (z.test(e)) {
        return;
      }
      var t = e.split(".");
      return function (e) {
        for (var n = 0; n < t.length; n++) {
          if (!e) {
            return;
          }
          e = e[t[n]];
        }
        return e;
      };
    }
    var G = "__proto__" in {};
    var Z = typeof window !== "undefined";
    var Y = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
    var X = Y && WXEnvironment.platform.toLowerCase();
    var Q = Z && window.navigator.userAgent.toLowerCase();
    var ee = Q && /msie|trident/.test(Q);
    var te = Q && Q.indexOf("msie 9.0") > 0;
    var ne = Q && Q.indexOf("edge/") > 0;
    var re = (Q && Q.indexOf("android") > 0) || X === "android";
    var ie = (Q && /iphone|ipad|ipod|ios/.test(Q)) || X === "ios";
    var ae = Q && /chrome\/\d+/.test(Q) && !ne;
    var oe = Q && /phantomjs/.test(Q);
    var se = Q && Q.match(/firefox\/(\d+)/);
    var le = {}.watch;
    var ue = false;
    if (Z) {
      try {
        var fe = {};
        Object.defineProperty(fe, "passive", {
          get: function e() {
            ue = true;
          },
        });
        window.addEventListener("test-passive", null, fe);
      } catch (e) {}
    }
    var ce;
    var de = function () {
      if (ce === undefined) {
        if (!Z && !Y && typeof global !== "undefined") {
          ce = global["process"] && global["process"].env.VUE_ENV === "server";
        } else {
          ce = false;
        }
      }
      return ce;
    };
    var ve = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function pe(e) {
      return typeof e === "function" && /native code/.test(e.toString());
    }
    var he =
      typeof Symbol !== "undefined" &&
      pe(Symbol) &&
      typeof Reflect !== "undefined" &&
      pe(Reflect.ownKeys);
    var me;
    if (typeof Set !== "undefined" && pe(Set)) {
      me = Set;
    } else {
      me = (function () {
        function e() {
          this.set = Object.create(null);
        }
        e.prototype.has = function e(t) {
          return this.set[t] === true;
        };
        e.prototype.add = function e(t) {
          this.set[t] = true;
        };
        e.prototype.clear = function e() {
          this.set = Object.create(null);
        };
        return e;
      })();
    }
    var ge = E;
    var ye = E;
    var _e = E;
    var be = E;
    {
      var we = typeof console !== "undefined";
      var xe = /(?:^|[-_])(\w)/g;
      var Ae = function (e) {
        return e
          .replace(xe, function (e) {
            return e.toUpperCase();
          })
          .replace(/[-_]/g, "");
      };
      ge = function (e, t) {
        var n = t ? _e(t) : "";
        if (U.warnHandler) {
          U.warnHandler.call(null, e, t, n);
        } else if (we && !U.silent) {
          console.error("[Vue warn]: " + e + n);
        }
      };
      ye = function (e, t) {
        if (we && !U.silent) {
          console.warn("[Vue tip]: " + e + (t ? _e(t) : ""));
        }
      };
      be = function (e, t) {
        if (e.$root === e) {
          return "<Root>";
        }
        var n =
          typeof e === "function" && e.cid != null
            ? e.options
            : e._isVue
            ? e.$options || e.constructor.options
            : e;
        var r = n.name || n._componentTag;
        var i = n.__file;
        if (!r && i) {
          var a = i.match(/([^/\\]+)\.vue$/);
          r = a && a[1];
        }
        return (
          (r ? "<" + Ae(r) + ">" : "<Anonymous>") +
          (i && t !== false ? " at " + i : "")
        );
      };
      var ke = function (e, t) {
        var n = "";
        while (t) {
          if (t % 2 === 1) {
            n += e;
          }
          if (t > 1) {
            e += e;
          }
          t >>= 1;
        }
        return n;
      };
      _e = function (e) {
        if (e._isVue && e.$parent) {
          var t = [];
          var n = 0;
          while (e) {
            if (t.length > 0) {
              var r = t[t.length - 1];
              if (r.constructor === e.constructor) {
                n++;
                e = e.$parent;
                continue;
              } else if (n > 0) {
                t[t.length - 1] = [r, n];
                n = 0;
              }
            }
            t.push(e);
            e = e.$parent;
          }
          return (
            "\n\nfound in\n\n" +
            t
              .map(function (e, t) {
                return (
                  "" +
                  (t === 0 ? "---\x3e " : ke(" ", 5 + t * 2)) +
                  (Array.isArray(e)
                    ? be(e[0]) + "... (" + e[1] + " recursive calls)"
                    : be(e))
                );
              })
              .join("\n")
          );
        } else {
          return "\n\n(found in " + be(e) + ")";
        }
      };
    }
    var Se = 0;
    var Ce = function e() {
      this.id = Se++;
      this.subs = [];
    };
    Ce.prototype.addSub = function e(t) {
      this.subs.push(t);
    };
    Ce.prototype.removeSub = function e(t) {
      y(this.subs, t);
    };
    Ce.prototype.depend = function e() {
      if (Ce.target) {
        Ce.target.addDep(this);
      }
    };
    Ce.prototype.notify = function e() {
      var t = this.subs.slice();
      if (!U.async) {
        t.sort(function (e, t) {
          return e.id - t.id;
        });
      }
      for (var n = 0, r = t.length; n < r; n++) {
        t[n].update();
      }
    };
    Ce.target = null;
    var $e = [];
    function Te(e) {
      $e.push(e);
      Ce.target = e;
    }
    function Oe() {
      $e.pop();
      Ce.target = $e[$e.length - 1];
    }
    var Me = function e(t, n, r, i, a, o, s, l) {
      this.tag = t;
      this.data = n;
      this.children = r;
      this.text = i;
      this.elm = a;
      this.ns = undefined;
      this.context = o;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = n && n.key;
      this.componentOptions = s;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = l;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };
    var Le = { child: { configurable: true } };
    Le.child.get = function () {
      return this.componentInstance;
    };
    Object.defineProperties(Me.prototype, Le);
    var Ne = function (e) {
      if (e === void 0) e = "";
      var t = new Me();
      t.text = e;
      t.isComment = true;
      return t;
    };
    function Ee(e) {
      return new Me(undefined, undefined, undefined, String(e));
    }
    function Ie(e) {
      var t = new Me(
        e.tag,
        e.data,
        e.children && e.children.slice(),
        e.text,
        e.elm,
        e.context,
        e.componentOptions,
        e.asyncFactory
      );
      t.ns = e.ns;
      t.isStatic = e.isStatic;
      t.key = e.key;
      t.isComment = e.isComment;
      t.fnContext = e.fnContext;
      t.fnOptions = e.fnOptions;
      t.fnScopeId = e.fnScopeId;
      t.asyncMeta = e.asyncMeta;
      t.isCloned = true;
      return t;
    }
    var Pe = Array.prototype;
    var De = Object.create(Pe);
    var je = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
    je.forEach(function (e) {
      var t = Pe[e];
      q(De, e, function n() {
        var r = [],
          i = arguments.length;
        while (i--) r[i] = arguments[i];
        var a = t.apply(this, r);
        var o = this.__ob__;
        var s;
        switch (e) {
          case "push":
          case "unshift":
            s = r;
            break;
          case "splice":
            s = r.slice(2);
            break;
        }
        if (s) {
          o.observeArray(s);
        }
        o.dep.notify();
        return a;
      });
    });
    var Re = Object.getOwnPropertyNames(De);
    var Fe = true;
    function Ve(e) {
      Fe = e;
    }
    var Be = function e(t) {
      this.value = t;
      this.dep = new Ce();
      this.vmCount = 0;
      q(t, "__ob__", this);
      if (Array.isArray(t)) {
        if (G) {
          He(t, De);
        } else {
          Ue(t, De, Re);
        }
        this.observeArray(t);
      } else {
        this.walk(t);
      }
    };
    Be.prototype.walk = function e(t) {
      var n = Object.keys(t);
      for (var r = 0; r < n.length; r++) {
        We(t, n[r]);
      }
    };
    Be.prototype.observeArray = function e(t) {
      for (var n = 0, r = t.length; n < r; n++) {
        Ke(t[n]);
      }
    };
    function He(e, t) {
      e.__proto__ = t;
    }
    function Ue(e, t, n) {
      for (var r = 0, i = n.length; r < i; r++) {
        var a = n[r];
        q(e, a, t[a]);
      }
    }
    function Ke(e, t) {
      if (!o(e) || e instanceof Me) {
        return;
      }
      var n;
      if (b(e, "__ob__") && e.__ob__ instanceof Be) {
        n = e.__ob__;
      } else if (
        Fe &&
        !de() &&
        (Array.isArray(e) || u(e)) &&
        Object.isExtensible(e) &&
        !e._isVue
      ) {
        n = new Be(e);
      }
      if (t && n) {
        n.vmCount++;
      }
      return n;
    }
    function We(e, t, n, r, i) {
      var a = new Ce();
      var o = Object.getOwnPropertyDescriptor(e, t);
      if (o && o.configurable === false) {
        return;
      }
      var s = o && o.get;
      var l = o && o.set;
      if ((!s || l) && arguments.length === 2) {
        n = e[t];
      }
      var u = !i && Ke(n);
      Object.defineProperty(e, t, {
        enumerable: true,
        configurable: true,
        get: function t() {
          var r = s ? s.call(e) : n;
          if (Ce.target) {
            a.depend();
            if (u) {
              u.dep.depend();
              if (Array.isArray(r)) {
                Je(r);
              }
            }
          }
          return r;
        },
        set: function t(o) {
          var f = s ? s.call(e) : n;
          if (o === f || (o !== o && f !== f)) {
            return;
          }
          if (r) {
            r();
          }
          if (s && !l) {
            return;
          }
          if (l) {
            l.call(e, o);
          } else {
            n = o;
          }
          u = !i && Ke(o);
          a.notify();
        },
      });
    }
    function qe(e, n, r) {
      if (t(e) || a(e)) {
        ge(
          "Cannot set reactive property on undefined, null, or primitive value: " +
            e
        );
      }
      if (Array.isArray(e) && c(n)) {
        e.length = Math.max(e.length, n);
        e.splice(n, 1, r);
        return r;
      }
      if (n in e && !(n in Object.prototype)) {
        e[n] = r;
        return r;
      }
      var i = e.__ob__;
      if (e._isVue || (i && i.vmCount)) {
        ge(
          "Avoid adding reactive properties to a Vue instance or its root $data " +
            "at runtime - declare it upfront in the data option."
        );
        return r;
      }
      if (!i) {
        e[n] = r;
        return r;
      }
      We(i.value, n, r);
      i.dep.notify();
      return r;
    }
    function ze(e, n) {
      if (t(e) || a(e)) {
        ge(
          "Cannot delete reactive property on undefined, null, or primitive value: " +
            e
        );
      }
      if (Array.isArray(e) && c(n)) {
        e.splice(n, 1);
        return;
      }
      var r = e.__ob__;
      if (e._isVue || (r && r.vmCount)) {
        ge(
          "Avoid deleting properties on a Vue instance or its root $data " +
            "- just set it to null."
        );
        return;
      }
      if (!b(e, n)) {
        return;
      }
      delete e[n];
      if (!r) {
        return;
      }
      r.dep.notify();
    }
    function Je(e) {
      for (var t = void 0, n = 0, r = e.length; n < r; n++) {
        t = e[n];
        t && t.__ob__ && t.__ob__.dep.depend();
        if (Array.isArray(t)) {
          Je(t);
        }
      }
    }
    var Ge = U.optionMergeStrategies;
    {
      Ge.el = Ge.propsData = function (e, t, n, r) {
        if (!n) {
          ge(
            'option "' +
              r +
              '" can only be used during instance ' +
              "creation with the `new` keyword."
          );
        }
        return tt(e, t);
      };
    }
    function Ze(e, t) {
      if (!t) {
        return e;
      }
      var n, r, i;
      var a = he ? Reflect.ownKeys(t) : Object.keys(t);
      for (var o = 0; o < a.length; o++) {
        n = a[o];
        if (n === "__ob__") {
          continue;
        }
        r = e[n];
        i = t[n];
        if (!b(e, n)) {
          qe(e, n, i);
        } else if (r !== i && u(r) && u(i)) {
          Ze(r, i);
        }
      }
      return e;
    }
    function Ye(e, t, n) {
      if (!n) {
        if (!t) {
          return e;
        }
        if (!e) {
          return t;
        }
        return function n() {
          return Ze(
            typeof t === "function" ? t.call(this, this) : t,
            typeof e === "function" ? e.call(this, this) : e
          );
        };
      } else {
        return function r() {
          var i = typeof t === "function" ? t.call(n, n) : t;
          var a = typeof e === "function" ? e.call(n, n) : e;
          if (i) {
            return Ze(i, a);
          } else {
            return a;
          }
        };
      }
    }
    Ge.data = function (e, t, n) {
      if (!n) {
        if (t && typeof t !== "function") {
          ge(
            'The "data" option should be a function ' +
              "that returns a per-instance value in component " +
              "definitions.",
            n
          );
          return e;
        }
        return Ye(e, t);
      }
      return Ye(e, t, n);
    };
    function Xe(e, t) {
      var n = t ? (e ? e.concat(t) : Array.isArray(t) ? t : [t]) : e;
      return n ? Qe(n) : n;
    }
    function Qe(e) {
      var t = [];
      for (var n = 0; n < e.length; n++) {
        if (t.indexOf(e[n]) === -1) {
          t.push(e[n]);
        }
      }
      return t;
    }
    H.forEach(function (e) {
      Ge[e] = Xe;
    });
    function et(e, t, n, r) {
      var i = Object.create(e || null);
      if (t) {
        st(r, t, n);
        return L(i, t);
      } else {
        return i;
      }
    }
    B.forEach(function (e) {
      Ge[e + "s"] = et;
    });
    Ge.watch = function (e, t, n, r) {
      if (e === le) {
        e = undefined;
      }
      if (t === le) {
        t = undefined;
      }
      if (!t) {
        return Object.create(e || null);
      }
      {
        st(r, t, n);
      }
      if (!e) {
        return t;
      }
      var i = {};
      L(i, e);
      for (var a in t) {
        var o = i[a];
        var s = t[a];
        if (o && !Array.isArray(o)) {
          o = [o];
        }
        i[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s];
      }
      return i;
    };
    Ge.props =
      Ge.methods =
      Ge.inject =
      Ge.computed =
        function (e, t, n, r) {
          if (t && "development" !== "production") {
            st(r, t, n);
          }
          if (!e) {
            return t;
          }
          var i = Object.create(null);
          L(i, e);
          if (t) {
            L(i, t);
          }
          return i;
        };
    Ge.provide = Ye;
    var tt = function (e, t) {
      return t === undefined ? e : t;
    };
    function nt(e) {
      for (var t in e.components) {
        rt(t);
      }
    }
    function rt(e) {
      if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + K.source + "]*$").test(e)) {
        ge(
          'Invalid component name: "' +
            e +
            '". Component names ' +
            "should conform to valid custom element name in html5 specification."
        );
      }
      if (m(e) || U.isReservedTag(e)) {
        ge(
          "Do not use built-in or reserved HTML elements as component " +
            "id: " +
            e
        );
      }
    }
    function it(e, t) {
      var n = e.props;
      if (!n) {
        return;
      }
      var r = {};
      var i, a, o;
      if (Array.isArray(n)) {
        i = n.length;
        while (i--) {
          a = n[i];
          if (typeof a === "string") {
            o = A(a);
            r[o] = { type: null };
          } else {
            ge("props must be strings when using array syntax.");
          }
        }
      } else if (u(n)) {
        for (var s in n) {
          a = n[s];
          o = A(s);
          r[o] = u(a) ? a : { type: a };
        }
      } else {
        ge(
          'Invalid value for option "props": expected an Array or an Object, ' +
            "but got " +
            l(n) +
            ".",
          t
        );
      }
      e.props = r;
    }
    function at(e, t) {
      var n = e.inject;
      if (!n) {
        return;
      }
      var r = (e.inject = {});
      if (Array.isArray(n)) {
        for (var i = 0; i < n.length; i++) {
          r[n[i]] = { from: n[i] };
        }
      } else if (u(n)) {
        for (var a in n) {
          var o = n[a];
          r[a] = u(o) ? L({ from: a }, o) : { from: o };
        }
      } else {
        ge(
          'Invalid value for option "inject": expected an Array or an Object, ' +
            "but got " +
            l(n) +
            ".",
          t
        );
      }
    }
    function ot(e) {
      var t = e.directives;
      if (t) {
        for (var n in t) {
          var r = t[n];
          if (typeof r === "function") {
            t[n] = { bind: r, update: r };
          }
        }
      }
    }
    function st(e, t, n) {
      if (!u(t)) {
        ge(
          'Invalid value for option "' +
            e +
            '": expected an Object, ' +
            "but got " +
            l(t) +
            ".",
          n
        );
      }
    }
    function lt(e, t, n) {
      {
        nt(t);
      }
      if (typeof t === "function") {
        t = t.options;
      }
      it(t, n);
      at(t, n);
      ot(t);
      if (!t._base) {
        if (t.extends) {
          e = lt(e, t.extends, n);
        }
        if (t.mixins) {
          for (var r = 0, i = t.mixins.length; r < i; r++) {
            e = lt(e, t.mixins[r], n);
          }
        }
      }
      var a = {};
      var o;
      for (o in e) {
        s(o);
      }
      for (o in t) {
        if (!b(e, o)) {
          s(o);
        }
      }
      function s(r) {
        var i = Ge[r] || tt;
        a[r] = i(e[r], t[r], n, r);
      }
      return a;
    }
    function ut(e, t, n, r) {
      if (typeof n !== "string") {
        return;
      }
      var i = e[t];
      if (b(i, n)) {
        return i[n];
      }
      var a = A(n);
      if (b(i, a)) {
        return i[a];
      }
      var o = k(a);
      if (b(i, o)) {
        return i[o];
      }
      var s = i[n] || i[a] || i[o];
      if (r && !s) {
        ge("Failed to resolve " + t.slice(0, -1) + ": " + n, e);
      }
      return s;
    }
    function ft(e, t, n, r) {
      var i = t[e];
      var a = !b(n, e);
      var o = n[e];
      var s = yt(Boolean, i.type);
      if (s > -1) {
        if (a && !b(i, "default")) {
          o = false;
        } else if (o === "" || o === C(e)) {
          var l = yt(String, i.type);
          if (l < 0 || s < l) {
            o = true;
          }
        }
      }
      if (o === undefined) {
        o = ct(r, i, e);
        var u = Fe;
        Ve(true);
        Ke(o);
        Ve(u);
      }
      {
        dt(i, e, o, r, a);
      }
      return o;
    }
    function ct(e, t, n) {
      if (!b(t, "default")) {
        return undefined;
      }
      var r = t.default;
      if (o(r)) {
        ge(
          'Invalid default value for prop "' +
            n +
            '": ' +
            "Props with type Object/Array must use a factory function " +
            "to return the default value.",
          e
        );
      }
      if (
        e &&
        e.$options.propsData &&
        e.$options.propsData[n] === undefined &&
        e._props[n] !== undefined
      ) {
        return e._props[n];
      }
      return typeof r === "function" && mt(t.type) !== "Function"
        ? r.call(e)
        : r;
    }
    function dt(e, t, n, r, i) {
      if (e.required && i) {
        ge('Missing required prop: "' + t + '"', r);
        return;
      }
      if (n == null && !e.required) {
        return;
      }
      var a = e.type;
      var o = !a || a === true;
      var s = [];
      if (a) {
        if (!Array.isArray(a)) {
          a = [a];
        }
        for (var l = 0; l < a.length && !o; l++) {
          var u = pt(n, a[l], r);
          s.push(u.expectedType || "");
          o = u.valid;
        }
      }
      var f = s.some(function (e) {
        return e;
      });
      if (!o && f) {
        ge(_t(t, n, s), r);
        return;
      }
      var c = e.validator;
      if (c) {
        if (!c(n)) {
          ge(
            'Invalid prop: custom validator check failed for prop "' + t + '".',
            r
          );
        }
      }
    }
    var vt = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
    function pt(e, t, n) {
      var r;
      var i = mt(t);
      if (vt.test(i)) {
        var a = typeof e;
        r = a === i.toLowerCase();
        if (!r && a === "object") {
          r = e instanceof t;
        }
      } else if (i === "Object") {
        r = u(e);
      } else if (i === "Array") {
        r = Array.isArray(e);
      } else {
        try {
          r = e instanceof t;
        } catch (e) {
          ge('Invalid prop type: "' + String(t) + '" is not a constructor', n);
          r = false;
        }
      }
      return { valid: r, expectedType: i };
    }
    var ht = /^\s*function (\w+)/;
    function mt(e) {
      var t = e && e.toString().match(ht);
      return t ? t[1] : "";
    }
    function gt(e, t) {
      return mt(e) === mt(t);
    }
    function yt(e, t) {
      if (!Array.isArray(t)) {
        return gt(t, e) ? 0 : -1;
      }
      for (var n = 0, r = t.length; n < r; n++) {
        if (gt(t[n], e)) {
          return n;
        }
      }
      return -1;
    }
    function _t(e, t, n) {
      var r =
        'Invalid prop: type check failed for prop "' +
        e +
        '".' +
        " Expected " +
        n.map(k).join(", ");
      var i = n[0];
      var a = l(t);
      if (n.length === 1 && xt(i) && xt(typeof t) && !At(i, a)) {
        r += " with value " + bt(t, i);
      }
      r += ", got " + a + " ";
      if (xt(a)) {
        r += "with value " + bt(t, a) + ".";
      }
      return r;
    }
    function bt(e, t) {
      if (t === "String") {
        return '"' + e + '"';
      } else if (t === "Number") {
        return "" + Number(e);
      } else {
        return "" + e;
      }
    }
    var wt = ["string", "number", "boolean"];
    function xt(e) {
      return wt.some(function (t) {
        return e.toLowerCase() === t;
      });
    }
    function At() {
      var e = [],
        t = arguments.length;
      while (t--) e[t] = arguments[t];
      return e.some(function (e) {
        return e.toLowerCase() === "boolean";
      });
    }
    function kt(e, t, n) {
      Te();
      try {
        if (t) {
          var r = t;
          while ((r = r.$parent)) {
            var i = r.$options.errorCaptured;
            if (i) {
              for (var a = 0; a < i.length; a++) {
                try {
                  var o = i[a].call(r, e, t, n) === false;
                  if (o) {
                    return;
                  }
                } catch (e) {
                  Ct(e, r, "errorCaptured hook");
                }
              }
            }
          }
        }
        Ct(e, t, n);
      } finally {
        Oe();
      }
    }
    function St(e, t, n, r, i) {
      var a;
      try {
        a = n ? e.apply(t, n) : e.call(t);
        if (a && !a._isVue && d(a) && !a._handled) {
          a.catch(function (e) {
            return kt(e, r, i + " (Promise/async)");
          });
          a._handled = true;
        }
      } catch (e) {
        kt(e, r, i);
      }
      return a;
    }
    function Ct(e, t, n) {
      if (U.errorHandler) {
        try {
          return U.errorHandler.call(null, e, t, n);
        } catch (t) {
          if (t !== e) {
            $t(t, null, "config.errorHandler");
          }
        }
      }
      $t(e, t, n);
    }
    function $t(e, t, n) {
      {
        ge("Error in " + n + ': "' + e.toString() + '"', t);
      }
      if ((Z || Y) && typeof console !== "undefined") {
        console.error(e);
      } else {
        throw e;
      }
    }
    var Tt = false;
    var Ot = [];
    var Mt = false;
    function Lt() {
      Mt = false;
      var e = Ot.slice(0);
      Ot.length = 0;
      for (var t = 0; t < e.length; t++) {
        e[t]();
      }
    }
    var Nt;
    if (typeof Promise !== "undefined" && pe(Promise)) {
      var Et = Promise.resolve();
      Nt = function () {
        Et.then(Lt);
        if (ie) {
          setTimeout(E);
        }
      };
      Tt = true;
    } else if (
      !ee &&
      typeof MutationObserver !== "undefined" &&
      (pe(MutationObserver) ||
        MutationObserver.toString() === "[object MutationObserverConstructor]")
    ) {
      var It = 1;
      var Pt = new MutationObserver(Lt);
      var Dt = document.createTextNode(String(It));
      Pt.observe(Dt, { characterData: true });
      Nt = function () {
        It = (It + 1) % 2;
        Dt.data = String(It);
      };
      Tt = true;
    } else if (typeof setImmediate !== "undefined" && pe(setImmediate)) {
      Nt = function () {
        setImmediate(Lt);
      };
    } else {
      Nt = function () {
        setTimeout(Lt, 0);
      };
    }
    function jt(e, t) {
      var n;
      Ot.push(function () {
        if (e) {
          try {
            e.call(t);
          } catch (e) {
            kt(e, t, "nextTick");
          }
        } else if (n) {
          n(t);
        }
      });
      if (!Mt) {
        Mt = true;
        Nt();
      }
      if (!e && typeof Promise !== "undefined") {
        return new Promise(function (e) {
          n = e;
        });
      }
    }
    var Rt;
    var Ft;
    {
      var Vt = Z && window.performance;
      if (Vt && Vt.mark && Vt.measure && Vt.clearMarks && Vt.clearMeasures) {
        Rt = function (e) {
          return Vt.mark(e);
        };
        Ft = function (e, t, n) {
          Vt.measure(e, t, n);
          Vt.clearMarks(t);
          Vt.clearMarks(n);
        };
      }
    }
    var Bt;
    {
      var Ht = h(
        "Infinity,undefined,NaN,isFinite,isNaN," +
          "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," +
          "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt," +
          "require"
      );
      var Ut = function (e, t) {
        ge(
          'Property or method "' +
            t +
            '" is not defined on the instance but ' +
            "referenced during render. Make sure that this property is reactive, " +
            "either in the data option, or for class-based components, by " +
            "initializing the property. " +
            "See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.",
          e
        );
      };
      var Kt = function (e, t) {
        ge(
          'Property "' +
            t +
            '" must be accessed with "$data.' +
            t +
            '" because ' +
            'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
            "prevent conflicts with Vue internals. " +
            "See: https://vuejs.org/v2/api/#data",
          e
        );
      };
      var Wt = typeof Proxy !== "undefined" && pe(Proxy);
      if (Wt) {
        var qt = h("stop,prevent,self,ctrl,shift,alt,meta,exact");
        U.keyCodes = new Proxy(U.keyCodes, {
          set: function e(t, n, r) {
            if (qt(n)) {
              ge(
                "Avoid overwriting built-in modifier in config.keyCodes: ." + n
              );
              return false;
            } else {
              t[n] = r;
              return true;
            }
          },
        });
      }
      var zt = {
        has: function e(t, n) {
          var e = n in t;
          var r =
            Ht(n) ||
            (typeof n === "string" && n.charAt(0) === "_" && !(n in t.$data));
          if (!e && !r) {
            if (n in t.$data) {
              Kt(t, n);
            } else {
              Ut(t, n);
            }
          }
          return e || !r;
        },
      };
      var Jt = {
        get: function e(t, n) {
          if (typeof n === "string" && !(n in t)) {
            if (n in t.$data) {
              Kt(t, n);
            } else {
              Ut(t, n);
            }
          }
          return t[n];
        },
      };
      Bt = function e(t) {
        if (Wt) {
          var n = t.$options;
          var r = n.render && n.render._withStripped ? Jt : zt;
          t._renderProxy = new Proxy(t, r);
        } else {
          t._renderProxy = t;
        }
      };
    }
    var Gt = new me();
    function Zt(e) {
      Yt(e, Gt);
      Gt.clear();
    }
    function Yt(e, t) {
      var n, r;
      var i = Array.isArray(e);
      if ((!i && !o(e)) || Object.isFrozen(e) || e instanceof Me) {
        return;
      }
      if (e.__ob__) {
        var a = e.__ob__.dep.id;
        if (t.has(a)) {
          return;
        }
        t.add(a);
      }
      if (i) {
        n = e.length;
        while (n--) {
          Yt(e[n], t);
        }
      } else {
        r = Object.keys(e);
        n = r.length;
        while (n--) {
          Yt(e[r[n]], t);
        }
      }
    }
    var Xt = w(function (e) {
      var t = e.charAt(0) === "&";
      e = t ? e.slice(1) : e;
      var n = e.charAt(0) === "~";
      e = n ? e.slice(1) : e;
      var r = e.charAt(0) === "!";
      e = r ? e.slice(1) : e;
      return { name: e, once: n, capture: r, passive: t };
    });
    function Qt(e, t) {
      function n() {
        var e = arguments;
        var r = n.fns;
        if (Array.isArray(r)) {
          var i = r.slice();
          for (var a = 0; a < i.length; a++) {
            St(i[a], null, e, t, "v-on handler");
          }
        } else {
          return St(r, null, arguments, t, "v-on handler");
        }
      }
      n.fns = e;
      return n;
    }
    function en(e, n, i, a, o, s) {
      var l, u, f, c, d;
      for (l in e) {
        u = f = e[l];
        c = n[l];
        d = Xt(l);
        if (t(f)) {
          ge('Invalid handler for event "' + d.name + '": got ' + String(f), s);
        } else if (t(c)) {
          if (t(f.fns)) {
            f = e[l] = Qt(f, s);
          }
          if (r(d.once)) {
            f = e[l] = o(d.name, f, d.capture);
          }
          i(d.name, f, d.capture, d.passive, d.params);
        } else if (f !== c) {
          c.fns = f;
          e[l] = c;
        }
      }
      for (l in n) {
        if (t(e[l])) {
          d = Xt(l);
          a(d.name, n[l], d.capture);
        }
      }
    }
    function tn(e, i, a) {
      if (e instanceof Me) {
        e = e.data.hook || (e.data.hook = {});
      }
      var o;
      var s = e[i];
      function l() {
        a.apply(this, arguments);
        y(o.fns, l);
      }
      if (t(s)) {
        o = Qt([l]);
      } else {
        if (n(s.fns) && r(s.merged)) {
          o = s;
          o.fns.push(l);
        } else {
          o = Qt([s, l]);
        }
      }
      o.merged = true;
      e[i] = o;
    }
    function nn(e, r, i) {
      var a = r.options.props;
      if (t(a)) {
        return;
      }
      var o = {};
      var s = e.attrs;
      var l = e.props;
      if (n(s) || n(l)) {
        for (var u in a) {
          var f = C(u);
          {
            var c = u.toLowerCase();
            if (u !== c && s && b(s, c)) {
              ye(
                'Prop "' +
                  c +
                  '" is passed to component ' +
                  be(i || r) +
                  ", but the declared prop name is" +
                  ' "' +
                  u +
                  '". ' +
                  "Note that HTML attributes are case-insensitive and camelCased " +
                  "props need to use their kebab-case equivalents when using in-DOM " +
                  'templates. You should probably use "' +
                  f +
                  '" instead of "' +
                  u +
                  '".'
              );
            }
          }
          rn(o, l, u, f, true) || rn(o, s, u, f, false);
        }
      }
      return o;
    }
    function rn(e, t, r, i, a) {
      if (n(t)) {
        if (b(t, r)) {
          e[r] = t[r];
          if (!a) {
            delete t[r];
          }
          return true;
        } else if (b(t, i)) {
          e[r] = t[i];
          if (!a) {
            delete t[i];
          }
          return true;
        }
      }
      return false;
    }
    function an(e) {
      for (var t = 0; t < e.length; t++) {
        if (Array.isArray(e[t])) {
          return Array.prototype.concat.apply([], e);
        }
      }
      return e;
    }
    function on(e) {
      return a(e) ? [Ee(e)] : Array.isArray(e) ? ln(e) : undefined;
    }
    function sn(e) {
      return n(e) && n(e.text) && i(e.isComment);
    }
    function ln(e, i) {
      var o = [];
      var s, l, u, f;
      for (s = 0; s < e.length; s++) {
        l = e[s];
        if (t(l) || typeof l === "boolean") {
          continue;
        }
        u = o.length - 1;
        f = o[u];
        if (Array.isArray(l)) {
          if (l.length > 0) {
            l = ln(l, (i || "") + "_" + s);
            if (sn(l[0]) && sn(f)) {
              o[u] = Ee(f.text + l[0].text);
              l.shift();
            }
            o.push.apply(o, l);
          }
        } else if (a(l)) {
          if (sn(f)) {
            o[u] = Ee(f.text + l);
          } else if (l !== "") {
            o.push(Ee(l));
          }
        } else {
          if (sn(l) && sn(f)) {
            o[u] = Ee(f.text + l.text);
          } else {
            if (r(e._isVList) && n(l.tag) && t(l.key) && n(i)) {
              l.key = "__vlist" + i + "_" + s + "__";
            }
            o.push(l);
          }
        }
      }
      return o;
    }
    function un(e) {
      var t = e.$options.provide;
      if (t) {
        e._provided = typeof t === "function" ? t.call(e) : t;
      }
    }
    function fn(e) {
      var t = cn(e.$options.inject, e);
      if (t) {
        Ve(false);
        Object.keys(t).forEach(function (n) {
          {
            We(e, n, t[n], function () {
              ge(
                "Avoid mutating an injected value directly since the changes will be " +
                  "overwritten whenever the provided component re-renders. " +
                  'injection being mutated: "' +
                  n +
                  '"',
                e
              );
            });
          }
        });
        Ve(true);
      }
    }
    function cn(e, t) {
      if (e) {
        var n = Object.create(null);
        var r = he ? Reflect.ownKeys(e) : Object.keys(e);
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          if (a === "__ob__") {
            continue;
          }
          var o = e[a].from;
          var s = t;
          while (s) {
            if (s._provided && b(s._provided, o)) {
              n[a] = s._provided[o];
              break;
            }
            s = s.$parent;
          }
          if (!s) {
            if ("default" in e[a]) {
              var l = e[a].default;
              n[a] = typeof l === "function" ? l.call(t) : l;
            } else {
              ge('Injection "' + a + '" not found', t);
            }
          }
        }
        return n;
      }
    }
    function dn(e, t) {
      if (!e || !e.length) {
        return {};
      }
      var n = {};
      for (var r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        var o = a.data;
        if (o && o.attrs && o.attrs.slot) {
          delete o.attrs.slot;
        }
        if ((a.context === t || a.fnContext === t) && o && o.slot != null) {
          var s = o.slot;
          var l = n[s] || (n[s] = []);
          if (a.tag === "template") {
            l.push.apply(l, a.children || []);
          } else {
            l.push(a);
          }
        } else {
          (n.default || (n.default = [])).push(a);
        }
      }
      for (var u in n) {
        if (n[u].every(vn)) {
          delete n[u];
        }
      }
      return n;
    }
    function vn(e) {
      return (e.isComment && !e.asyncFactory) || e.text === " ";
    }
    function pn(e) {
      return e.isComment && e.asyncFactory;
    }
    function hn(t, n, r) {
      var i;
      var a = Object.keys(n).length > 0;
      var o = t ? !!t.$stable : !a;
      var s = t && t.$key;
      if (!t) {
        i = {};
      } else if (t._normalized) {
        return t._normalized;
      } else if (o && r && r !== e && s === r.$key && !a && !r.$hasNormal) {
        return r;
      } else {
        i = {};
        for (var l in t) {
          if (t[l] && l[0] !== "$") {
            i[l] = mn(n, l, t[l]);
          }
        }
      }
      for (var u in n) {
        if (!(u in i)) {
          i[u] = gn(n, u);
        }
      }
      if (t && Object.isExtensible(t)) {
        t._normalized = i;
      }
      q(i, "$stable", o);
      q(i, "$key", s);
      q(i, "$hasNormal", a);
      return i;
    }
    function mn(e, t, n) {
      var r = function () {
        var e = arguments.length ? n.apply(null, arguments) : n({});
        e = e && typeof e === "object" && !Array.isArray(e) ? [e] : on(e);
        var t = e && e[0];
        return e && (!t || (e.length === 1 && t.isComment && !pn(t)))
          ? undefined
          : e;
      };
      if (n.proxy) {
        Object.defineProperty(e, t, {
          get: r,
          enumerable: true,
          configurable: true,
        });
      }
      return r;
    }
    function gn(e, t) {
      return function () {
        return e[t];
      };
    }
    function yn(e, t) {
      var r, i, a, s, l;
      if (Array.isArray(e) || typeof e === "string") {
        r = new Array(e.length);
        for (i = 0, a = e.length; i < a; i++) {
          r[i] = t(e[i], i);
        }
      } else if (typeof e === "number") {
        r = new Array(e);
        for (i = 0; i < e; i++) {
          r[i] = t(i + 1, i);
        }
      } else if (o(e)) {
        if (he && e[Symbol.iterator]) {
          r = [];
          var u = e[Symbol.iterator]();
          var f = u.next();
          while (!f.done) {
            r.push(t(f.value, r.length));
            f = u.next();
          }
        } else {
          s = Object.keys(e);
          r = new Array(s.length);
          for (i = 0, a = s.length; i < a; i++) {
            l = s[i];
            r[i] = t(e[l], l, i);
          }
        }
      }
      if (!n(r)) {
        r = [];
      }
      r._isVList = true;
      return r;
    }
    function _n(e, t, n, r) {
      var i = this.$scopedSlots[e];
      var a;
      if (i) {
        n = n || {};
        if (r) {
          if (!o(r)) {
            ge("slot v-bind without argument expects an Object", this);
          }
          n = L(L({}, r), n);
        }
        a = i(n) || (typeof t === "function" ? t() : t);
      } else {
        a = this.$slots[e] || (typeof t === "function" ? t() : t);
      }
      var s = n && n.slot;
      if (s) {
        return this.$createElement("template", { slot: s }, a);
      } else {
        return a;
      }
    }
    function bn(e) {
      return ut(this.$options, "filters", e, true) || P;
    }
    function wn(e, t) {
      if (Array.isArray(e)) {
        return e.indexOf(t) === -1;
      } else {
        return e !== t;
      }
    }
    function xn(e, t, n, r, i) {
      var a = U.keyCodes[t] || n;
      if (i && r && !U.keyCodes[t]) {
        return wn(i, r);
      } else if (a) {
        return wn(a, e);
      } else if (r) {
        return C(r) !== t;
      }
      return e === undefined;
    }
    function An(e, t, n, r, i) {
      if (n) {
        if (!o(n)) {
          ge("v-bind without argument expects an Object or Array value", this);
        } else {
          if (Array.isArray(n)) {
            n = N(n);
          }
          var a;
          var s = function (o) {
            if (o === "class" || o === "style" || g(o)) {
              a = e;
            } else {
              var s = e.attrs && e.attrs.type;
              a =
                r || U.mustUseProp(t, s, o)
                  ? e.domProps || (e.domProps = {})
                  : e.attrs || (e.attrs = {});
            }
            var l = A(o);
            var u = C(o);
            if (!(l in a) && !(u in a)) {
              a[o] = n[o];
              if (i) {
                var f = e.on || (e.on = {});
                f["update:" + o] = function (e) {
                  n[o] = e;
                };
              }
            }
          };
          for (var l in n) s(l);
        }
      }
      return e;
    }
    function kn(e, t) {
      var n = this._staticTrees || (this._staticTrees = []);
      var r = n[e];
      if (r && !t) {
        return r;
      }
      r = n[e] = this.$options.staticRenderFns[e].call(
        this._renderProxy,
        null,
        this
      );
      Cn(r, "__static__" + e, false);
      return r;
    }
    function Sn(e, t, n) {
      Cn(e, "__once__" + t + (n ? "_" + n : ""), true);
      return e;
    }
    function Cn(e, t, n) {
      if (Array.isArray(e)) {
        for (var r = 0; r < e.length; r++) {
          if (e[r] && typeof e[r] !== "string") {
            $n(e[r], t + "_" + r, n);
          }
        }
      } else {
        $n(e, t, n);
      }
    }
    function $n(e, t, n) {
      e.isStatic = true;
      e.key = t;
      e.isOnce = n;
    }
    function Tn(e, t) {
      if (t) {
        if (!u(t)) {
          ge("v-on without argument expects an Object value", this);
        } else {
          var n = (e.on = e.on ? L({}, e.on) : {});
          for (var r in t) {
            var i = n[r];
            var a = t[r];
            n[r] = i ? [].concat(i, a) : a;
          }
        }
      }
      return e;
    }
    function On(e, t, n, r) {
      t = t || { $stable: !n };
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (Array.isArray(a)) {
          On(a, t, n);
        } else if (a) {
          if (a.proxy) {
            a.fn.proxy = true;
          }
          t[a.key] = a.fn;
        }
      }
      if (r) {
        t.$key = r;
      }
      return t;
    }
    function Mn(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var r = t[n];
        if (typeof r === "string" && r) {
          e[t[n]] = t[n + 1];
        } else if (r !== "" && r !== null) {
          ge(
            "Invalid value for dynamic directive argument (expected string or null): " +
              r,
            this
          );
        }
      }
      return e;
    }
    function Ln(e, t) {
      return typeof e === "string" ? t + e : e;
    }
    function Nn(e) {
      e._o = Sn;
      e._n = p;
      e._s = v;
      e._l = yn;
      e._t = _n;
      e._q = j;
      e._i = R;
      e._m = kn;
      e._f = bn;
      e._k = xn;
      e._b = An;
      e._v = Ee;
      e._e = Ne;
      e._u = On;
      e._g = Tn;
      e._d = Mn;
      e._p = Ln;
    }
    function En(t, n, i, a, o) {
      var s = this;
      var l = o.options;
      var u;
      if (b(a, "_uid")) {
        u = Object.create(a);
        u._original = a;
      } else {
        u = a;
        a = a._original;
      }
      var f = r(l._compiled);
      var c = !f;
      this.data = t;
      this.props = n;
      this.children = i;
      this.parent = a;
      this.listeners = t.on || e;
      this.injections = cn(l.inject, a);
      this.slots = function () {
        if (!s.$slots) {
          hn(t.scopedSlots, (s.$slots = dn(i, a)));
        }
        return s.$slots;
      };
      Object.defineProperty(this, "scopedSlots", {
        enumerable: true,
        get: function e() {
          return hn(t.scopedSlots, this.slots());
        },
      });
      if (f) {
        this.$options = l;
        this.$slots = this.slots();
        this.$scopedSlots = hn(t.scopedSlots, this.$slots);
      }
      if (l._scopeId) {
        this._c = function (e, t, n, r) {
          var i = qn(u, e, t, n, r, c);
          if (i && !Array.isArray(i)) {
            i.fnScopeId = l._scopeId;
            i.fnContext = a;
          }
          return i;
        };
      } else {
        this._c = function (e, t, n, r) {
          return qn(u, e, t, n, r, c);
        };
      }
    }
    Nn(En.prototype);
    function In(t, r, i, a, o) {
      var s = t.options;
      var l = {};
      var u = s.props;
      if (n(u)) {
        for (var f in u) {
          l[f] = ft(f, u, r || e);
        }
      } else {
        if (n(i.attrs)) {
          Dn(l, i.attrs);
        }
        if (n(i.props)) {
          Dn(l, i.props);
        }
      }
      var c = new En(i, l, o, a, t);
      var d = s.render.call(null, c._c, c);
      if (d instanceof Me) {
        return Pn(d, i, c.parent, s, c);
      } else if (Array.isArray(d)) {
        var v = on(d) || [];
        var p = new Array(v.length);
        for (var h = 0; h < v.length; h++) {
          p[h] = Pn(v[h], i, c.parent, s, c);
        }
        return p;
      }
    }
    function Pn(e, t, n, r, i) {
      var a = Ie(e);
      a.fnContext = n;
      a.fnOptions = r;
      {
        (a.devtoolsMeta = a.devtoolsMeta || {}).renderContext = i;
      }
      if (t.slot) {
        (a.data || (a.data = {})).slot = t.slot;
      }
      return a;
    }
    function Dn(e, t) {
      for (var n in t) {
        e[A(n)] = t[n];
      }
    }
    var jn = {
      init: function e(t, n) {
        if (
          t.componentInstance &&
          !t.componentInstance._isDestroyed &&
          t.data.keepAlive
        ) {
          var r = t;
          jn.prepatch(r, r);
        } else {
          var i = (t.componentInstance = Vn(t, fr));
          i.$mount(n ? t.elm : undefined, n);
        }
      },
      prepatch: function e(t, n) {
        var r = n.componentOptions;
        var i = (n.componentInstance = t.componentInstance);
        mr(i, r.propsData, r.listeners, n, r.children);
      },
      insert: function e(t) {
        var n = t.context;
        var r = t.componentInstance;
        if (!r._isMounted) {
          r._isMounted = true;
          br(r, "mounted");
        }
        if (t.data.keepAlive) {
          if (n._isMounted) {
            Pr(r);
          } else {
            yr(r, true);
          }
        }
      },
      destroy: function e(t) {
        var n = t.componentInstance;
        if (!n._isDestroyed) {
          if (!t.data.keepAlive) {
            n.$destroy();
          } else {
            _r(n, true);
          }
        }
      },
    };
    var Rn = Object.keys(jn);
    function Fn(e, i, a, s, l) {
      if (t(e)) {
        return;
      }
      var u = a.$options._base;
      if (o(e)) {
        e = u.extend(e);
      }
      if (typeof e !== "function") {
        {
          ge("Invalid Component definition: " + String(e), a);
        }
        return;
      }
      var f;
      if (t(e.cid)) {
        f = e;
        e = tr(f, u);
        if (e === undefined) {
          return er(f, i, a, s, l);
        }
      }
      i = i || {};
      ii(e);
      if (n(i.model)) {
        Un(e.options, i);
      }
      var c = nn(i, e, l);
      if (r(e.options.functional)) {
        return In(e, c, i, a, s);
      }
      var d = i.on;
      i.on = i.nativeOn;
      if (r(e.options.abstract)) {
        var v = i.slot;
        i = {};
        if (v) {
          i.slot = v;
        }
      }
      Bn(i);
      var p = e.options.name || l;
      var h = new Me(
        "vue-component-" + e.cid + (p ? "-" + p : ""),
        i,
        undefined,
        undefined,
        undefined,
        a,
        { Ctor: e, propsData: c, listeners: d, tag: l, children: s },
        f
      );
      return h;
    }
    function Vn(e, t) {
      var r = { _isComponent: true, _parentVnode: e, parent: t };
      var i = e.data.inlineTemplate;
      if (n(i)) {
        r.render = i.render;
        r.staticRenderFns = i.staticRenderFns;
      }
      return new e.componentOptions.Ctor(r);
    }
    function Bn(e) {
      var t = e.hook || (e.hook = {});
      for (var n = 0; n < Rn.length; n++) {
        var r = Rn[n];
        var i = t[r];
        var a = jn[r];
        if (i !== a && !(i && i._merged)) {
          t[r] = i ? Hn(a, i) : a;
        }
      }
    }
    function Hn(e, t) {
      var n = function (n, r) {
        e(n, r);
        t(n, r);
      };
      n._merged = true;
      return n;
    }
    function Un(e, t) {
      var r = (e.model && e.model.prop) || "value";
      var i = (e.model && e.model.event) || "input";
      (t.attrs || (t.attrs = {}))[r] = t.model.value;
      var a = t.on || (t.on = {});
      var o = a[i];
      var s = t.model.callback;
      if (n(o)) {
        if (Array.isArray(o) ? o.indexOf(s) === -1 : o !== s) {
          a[i] = [s].concat(o);
        }
      } else {
        a[i] = s;
      }
    }
    var Kn = 1;
    var Wn = 2;
    function qn(e, t, n, i, o, s) {
      if (Array.isArray(n) || a(n)) {
        o = i;
        i = n;
        n = undefined;
      }
      if (r(s)) {
        o = Wn;
      }
      return zn(e, t, n, i, o);
    }
    function zn(e, t, r, i, o) {
      if (n(r) && n(r.__ob__)) {
        ge(
          "Avoid using observed data object as vnode data: " +
            JSON.stringify(r) +
            "\n" +
            "Always create fresh vnode data objects in each render!",
          e
        );
        return Ne();
      }
      if (n(r) && n(r.is)) {
        t = r.is;
      }
      if (!t) {
        return Ne();
      }
      if (n(r) && n(r.key) && !a(r.key)) {
        {
          ge(
            "Avoid using non-primitive value as key, " +
              "use string/number value instead.",
            e
          );
        }
      }
      if (Array.isArray(i) && typeof i[0] === "function") {
        r = r || {};
        r.scopedSlots = { default: i[0] };
        i.length = 0;
      }
      if (o === Wn) {
        i = on(i);
      } else if (o === Kn) {
        i = an(i);
      }
      var s, l;
      if (typeof t === "string") {
        var u;
        l = (e.$vnode && e.$vnode.ns) || U.getTagNamespace(t);
        if (U.isReservedTag(t)) {
          if (n(r) && n(r.nativeOn) && r.tag !== "component") {
            ge(
              "The .native modifier for v-on is only valid on components but it was used on <" +
                t +
                ">.",
              e
            );
          }
          s = new Me(U.parsePlatformTagName(t), r, i, undefined, undefined, e);
        } else if ((!r || !r.pre) && n((u = ut(e.$options, "components", t)))) {
          s = Fn(u, r, e, i, t);
        } else {
          s = new Me(t, r, i, undefined, undefined, e);
        }
      } else {
        s = Fn(t, r, e, i);
      }
      if (Array.isArray(s)) {
        return s;
      } else if (n(s)) {
        if (n(l)) {
          Jn(s, l);
        }
        if (n(r)) {
          Gn(r);
        }
        return s;
      } else {
        return Ne();
      }
    }
    function Jn(e, i, a) {
      e.ns = i;
      if (e.tag === "foreignObject") {
        i = undefined;
        a = true;
      }
      if (n(e.children)) {
        for (var o = 0, s = e.children.length; o < s; o++) {
          var l = e.children[o];
          if (n(l.tag) && (t(l.ns) || (r(a) && l.tag !== "svg"))) {
            Jn(l, i, a);
          }
        }
      }
    }
    function Gn(e) {
      if (o(e.style)) {
        Zt(e.style);
      }
      if (o(e.class)) {
        Zt(e.class);
      }
    }
    function Zn(t) {
      t._vnode = null;
      t._staticTrees = null;
      var n = t.$options;
      var r = (t.$vnode = n._parentVnode);
      var i = r && r.context;
      t.$slots = dn(n._renderChildren, i);
      t.$scopedSlots = e;
      t._c = function (e, n, r, i) {
        return qn(t, e, n, r, i, false);
      };
      t.$createElement = function (e, n, r, i) {
        return qn(t, e, n, r, i, true);
      };
      var a = r && r.data;
      {
        We(
          t,
          "$attrs",
          (a && a.attrs) || e,
          function () {
            !cr && ge("$attrs is readonly.", t);
          },
          true
        );
        We(
          t,
          "$listeners",
          n._parentListeners || e,
          function () {
            !cr && ge("$listeners is readonly.", t);
          },
          true
        );
      }
    }
    var Yn = null;
    function Xn(e) {
      Nn(e.prototype);
      e.prototype.$nextTick = function (e) {
        return jt(e, this);
      };
      e.prototype._render = function () {
        var e = this;
        var t = e.$options;
        var n = t.render;
        var r = t._parentVnode;
        if (r) {
          e.$scopedSlots = hn(r.data.scopedSlots, e.$slots, e.$scopedSlots);
        }
        e.$vnode = r;
        var i;
        try {
          Yn = e;
          i = n.call(e._renderProxy, e.$createElement);
        } catch (t) {
          kt(t, e, "render");
          if (e.$options.renderError) {
            try {
              i = e.$options.renderError.call(
                e._renderProxy,
                e.$createElement,
                t
              );
            } catch (t) {
              kt(t, e, "renderError");
              i = e._vnode;
            }
          } else {
            i = e._vnode;
          }
        } finally {
          Yn = null;
        }
        if (Array.isArray(i) && i.length === 1) {
          i = i[0];
        }
        if (!(i instanceof Me)) {
          if (Array.isArray(i)) {
            ge(
              "Multiple root nodes returned from render function. Render function " +
                "should return a single root node.",
              e
            );
          }
          i = Ne();
        }
        i.parent = r;
        return i;
      };
    }
    function Qn(e, t) {
      if (e.__esModule || (he && e[Symbol.toStringTag] === "Module")) {
        e = e.default;
      }
      return o(e) ? t.extend(e) : e;
    }
    function er(e, t, n, r, i) {
      var a = Ne();
      a.asyncFactory = e;
      a.asyncMeta = { data: t, context: n, children: r, tag: i };
      return a;
    }
    function tr(e, i) {
      if (r(e.error) && n(e.errorComp)) {
        return e.errorComp;
      }
      if (n(e.resolved)) {
        return e.resolved;
      }
      var a = Yn;
      if (a && n(e.owners) && e.owners.indexOf(a) === -1) {
        e.owners.push(a);
      }
      if (r(e.loading) && n(e.loadingComp)) {
        return e.loadingComp;
      }
      if (a && !n(e.owners)) {
        var s = (e.owners = [a]);
        var l = true;
        var u = null;
        var f = null;
        a.$on("hook:destroyed", function () {
          return y(s, a);
        });
        var c = function (e) {
          for (var t = 0, n = s.length; t < n; t++) {
            s[t].$forceUpdate();
          }
          if (e) {
            s.length = 0;
            if (u !== null) {
              clearTimeout(u);
              u = null;
            }
            if (f !== null) {
              clearTimeout(f);
              f = null;
            }
          }
        };
        var v = F(function (t) {
          e.resolved = Qn(t, i);
          if (!l) {
            c(true);
          } else {
            s.length = 0;
          }
        });
        var p = F(function (t) {
          ge(
            "Failed to resolve async component: " +
              String(e) +
              (t ? "\nReason: " + t : "")
          );
          if (n(e.errorComp)) {
            e.error = true;
            c(true);
          }
        });
        var h = e(v, p);
        if (o(h)) {
          if (d(h)) {
            if (t(e.resolved)) {
              h.then(v, p);
            }
          } else if (d(h.component)) {
            h.component.then(v, p);
            if (n(h.error)) {
              e.errorComp = Qn(h.error, i);
            }
            if (n(h.loading)) {
              e.loadingComp = Qn(h.loading, i);
              if (h.delay === 0) {
                e.loading = true;
              } else {
                u = setTimeout(function () {
                  u = null;
                  if (t(e.resolved) && t(e.error)) {
                    e.loading = true;
                    c(false);
                  }
                }, h.delay || 200);
              }
            }
            if (n(h.timeout)) {
              f = setTimeout(function () {
                f = null;
                if (t(e.resolved)) {
                  p("timeout (" + h.timeout + "ms)");
                }
              }, h.timeout);
            }
          }
        }
        l = false;
        return e.loading ? e.loadingComp : e.resolved;
      }
    }
    function nr(e) {
      if (Array.isArray(e)) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          if (n(r) && (n(r.componentOptions) || pn(r))) {
            return r;
          }
        }
      }
    }
    function rr(e) {
      e._events = Object.create(null);
      e._hasHookEvent = false;
      var t = e.$options._parentListeners;
      if (t) {
        lr(e, t);
      }
    }
    var ir;
    function ar(e, t) {
      ir.$on(e, t);
    }
    function or(e, t) {
      ir.$off(e, t);
    }
    function sr(e, t) {
      var n = ir;
      return function r() {
        var i = t.apply(null, arguments);
        if (i !== null) {
          n.$off(e, r);
        }
      };
    }
    function lr(e, t, n) {
      ir = e;
      en(t, n || {}, ar, or, sr, e);
      ir = undefined;
    }
    function ur(e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var r = this;
        if (Array.isArray(e)) {
          for (var i = 0, a = e.length; i < a; i++) {
            r.$on(e[i], n);
          }
        } else {
          (r._events[e] || (r._events[e] = [])).push(n);
          if (t.test(e)) {
            r._hasHookEvent = true;
          }
        }
        return r;
      };
      e.prototype.$once = function (e, t) {
        var n = this;
        function r() {
          n.$off(e, r);
          t.apply(n, arguments);
        }
        r.fn = t;
        n.$on(e, r);
        return n;
      };
      e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) {
          n._events = Object.create(null);
          return n;
        }
        if (Array.isArray(e)) {
          for (var r = 0, i = e.length; r < i; r++) {
            n.$off(e[r], t);
          }
          return n;
        }
        var a = n._events[e];
        if (!a) {
          return n;
        }
        if (!t) {
          n._events[e] = null;
          return n;
        }
        var o;
        var s = a.length;
        while (s--) {
          o = a[s];
          if (o === t || o.fn === t) {
            a.splice(s, 1);
            break;
          }
        }
        return n;
      };
      e.prototype.$emit = function (e) {
        var t = this;
        {
          var n = e.toLowerCase();
          if (n !== e && t._events[n]) {
            ye(
              'Event "' +
                n +
                '" is emitted in component ' +
                be(t) +
                ' but the handler is registered for "' +
                e +
                '". ' +
                "Note that HTML attributes are case-insensitive and you cannot use " +
                "v-on to listen to camelCase events when using in-DOM templates. " +
                'You should probably use "' +
                C(e) +
                '" instead of "' +
                e +
                '".'
            );
          }
        }
        var r = t._events[e];
        if (r) {
          r = r.length > 1 ? M(r) : r;
          var i = M(arguments, 1);
          var a = 'event handler for "' + e + '"';
          for (var o = 0, s = r.length; o < s; o++) {
            St(r[o], t, i, t, a);
          }
        }
        return t;
      };
    }
    var fr = null;
    var cr = false;
    function dr(e) {
      var t = fr;
      fr = e;
      return function () {
        fr = t;
      };
    }
    function vr(e) {
      var t = e.$options;
      var n = t.parent;
      if (n && !t.abstract) {
        while (n.$options.abstract && n.$parent) {
          n = n.$parent;
        }
        n.$children.push(e);
      }
      e.$parent = n;
      e.$root = n ? n.$root : e;
      e.$children = [];
      e.$refs = {};
      e._watcher = null;
      e._inactive = null;
      e._directInactive = false;
      e._isMounted = false;
      e._isDestroyed = false;
      e._isBeingDestroyed = false;
    }
    function pr(e) {
      e.prototype._update = function (e, t) {
        var n = this;
        var r = n.$el;
        var i = n._vnode;
        var a = dr(n);
        n._vnode = e;
        if (!i) {
          n.$el = n.__patch__(n.$el, e, t, false);
        } else {
          n.$el = n.__patch__(i, e);
        }
        a();
        if (r) {
          r.__vue__ = null;
        }
        if (n.$el) {
          n.$el.__vue__ = n;
        }
        if (n.$vnode && n.$parent && n.$vnode === n.$parent._vnode) {
          n.$parent.$el = n.$el;
        }
      };
      e.prototype.$forceUpdate = function () {
        var e = this;
        if (e._watcher) {
          e._watcher.update();
        }
      };
      e.prototype.$destroy = function () {
        var e = this;
        if (e._isBeingDestroyed) {
          return;
        }
        br(e, "beforeDestroy");
        e._isBeingDestroyed = true;
        var t = e.$parent;
        if (t && !t._isBeingDestroyed && !e.$options.abstract) {
          y(t.$children, e);
        }
        if (e._watcher) {
          e._watcher.teardown();
        }
        var n = e._watchers.length;
        while (n--) {
          e._watchers[n].teardown();
        }
        if (e._data.__ob__) {
          e._data.__ob__.vmCount--;
        }
        e._isDestroyed = true;
        e.__patch__(e._vnode, null);
        br(e, "destroyed");
        e.$off();
        if (e.$el) {
          e.$el.__vue__ = null;
        }
        if (e.$vnode) {
          e.$vnode.parent = null;
        }
      };
    }
    function hr(e, t, n) {
      e.$el = t;
      if (!e.$options.render) {
        e.$options.render = Ne;
        {
          if (
            (e.$options.template && e.$options.template.charAt(0) !== "#") ||
            e.$options.el ||
            t
          ) {
            ge(
              "You are using the runtime-only build of Vue where the template " +
                "compiler is not available. Either pre-compile the templates into " +
                "render functions, or use the compiler-included build.",
              e
            );
          } else {
            ge(
              "Failed to mount component: template or render function not defined.",
              e
            );
          }
        }
      }
      br(e, "beforeMount");
      var r;
      if (U.performance && Rt) {
        r = function () {
          var t = e._name;
          var r = e._uid;
          var i = "vue-perf-start:" + r;
          var a = "vue-perf-end:" + r;
          Rt(i);
          var o = e._render();
          Rt(a);
          Ft("vue " + t + " render", i, a);
          Rt(i);
          e._update(o, n);
          Rt(a);
          Ft("vue " + t + " patch", i, a);
        };
      } else {
        r = function () {
          e._update(e._render(), n);
        };
      }
      new Fr(
        e,
        r,
        E,
        {
          before: function t() {
            if (e._isMounted && !e._isDestroyed) {
              br(e, "beforeUpdate");
            }
          },
        },
        true
      );
      n = false;
      if (e.$vnode == null) {
        e._isMounted = true;
        br(e, "mounted");
      }
      return e;
    }
    function mr(t, n, r, i, a) {
      {
        cr = true;
      }
      var o = i.data.scopedSlots;
      var s = t.$scopedSlots;
      var l = !!(
        (o && !o.$stable) ||
        (s !== e && !s.$stable) ||
        (o && t.$scopedSlots.$key !== o.$key) ||
        (!o && t.$scopedSlots.$key)
      );
      var u = !!(a || t.$options._renderChildren || l);
      t.$options._parentVnode = i;
      t.$vnode = i;
      if (t._vnode) {
        t._vnode.parent = i;
      }
      t.$options._renderChildren = a;
      t.$attrs = i.data.attrs || e;
      t.$listeners = r || e;
      if (n && t.$options.props) {
        Ve(false);
        var f = t._props;
        var c = t.$options._propKeys || [];
        for (var d = 0; d < c.length; d++) {
          var v = c[d];
          var p = t.$options.props;
          f[v] = ft(v, p, n, t);
        }
        Ve(true);
        t.$options.propsData = n;
      }
      r = r || e;
      var h = t.$options._parentListeners;
      t.$options._parentListeners = r;
      lr(t, r, h);
      if (u) {
        t.$slots = dn(a, i.context);
        t.$forceUpdate();
      }
      {
        cr = false;
      }
    }
    function gr(e) {
      while (e && (e = e.$parent)) {
        if (e._inactive) {
          return true;
        }
      }
      return false;
    }
    function yr(e, t) {
      if (t) {
        e._directInactive = false;
        if (gr(e)) {
          return;
        }
      } else if (e._directInactive) {
        return;
      }
      if (e._inactive || e._inactive === null) {
        e._inactive = false;
        for (var n = 0; n < e.$children.length; n++) {
          yr(e.$children[n]);
        }
        br(e, "activated");
      }
    }
    function _r(e, t) {
      if (t) {
        e._directInactive = true;
        if (gr(e)) {
          return;
        }
      }
      if (!e._inactive) {
        e._inactive = true;
        for (var n = 0; n < e.$children.length; n++) {
          _r(e.$children[n]);
        }
        br(e, "deactivated");
      }
    }
    function br(e, t) {
      Te();
      var n = e.$options[t];
      var r = t + " hook";
      if (n) {
        for (var i = 0, a = n.length; i < a; i++) {
          St(n[i], e, null, e, r);
        }
      }
      if (e._hasHookEvent) {
        e.$emit("hook:" + t);
      }
      Oe();
    }
    var wr = 100;
    var xr = [];
    var Ar = [];
    var kr = {};
    var Sr = {};
    var Cr = false;
    var $r = false;
    var Tr = 0;
    function Or() {
      Tr = xr.length = Ar.length = 0;
      kr = {};
      {
        Sr = {};
      }
      Cr = $r = false;
    }
    var Mr = 0;
    var Lr = Date.now;
    if (Z && !ee) {
      var Nr = window.performance;
      if (
        Nr &&
        typeof Nr.now === "function" &&
        Lr() > document.createEvent("Event").timeStamp
      ) {
        Lr = function () {
          return Nr.now();
        };
      }
    }
    function Er() {
      Mr = Lr();
      $r = true;
      var e, t;
      xr.sort(function (e, t) {
        return e.id - t.id;
      });
      for (Tr = 0; Tr < xr.length; Tr++) {
        e = xr[Tr];
        if (e.before) {
          e.before();
        }
        t = e.id;
        kr[t] = null;
        e.run();
        if (kr[t] != null) {
          Sr[t] = (Sr[t] || 0) + 1;
          if (Sr[t] > wr) {
            ge(
              "You may have an infinite update loop " +
                (e.user
                  ? 'in watcher with expression "' + e.expression + '"'
                  : "in a component render function."),
              e.vm
            );
            break;
          }
        }
      }
      var n = Ar.slice();
      var r = xr.slice();
      Or();
      Dr(n);
      Ir(r);
      if (ve && U.devtools) {
        ve.emit("flush");
      }
    }
    function Ir(e) {
      var t = e.length;
      while (t--) {
        var n = e[t];
        var r = n.vm;
        if (r._watcher === n && r._isMounted && !r._isDestroyed) {
          br(r, "updated");
        }
      }
    }
    function Pr(e) {
      e._inactive = false;
      Ar.push(e);
    }
    function Dr(e) {
      for (var t = 0; t < e.length; t++) {
        e[t]._inactive = true;
        yr(e[t], true);
      }
    }
    function jr(e) {
      var t = e.id;
      if (kr[t] == null) {
        kr[t] = true;
        if (!$r) {
          xr.push(e);
        } else {
          var n = xr.length - 1;
          while (n > Tr && xr[n].id > e.id) {
            n--;
          }
          xr.splice(n + 1, 0, e);
        }
        if (!Cr) {
          Cr = true;
          if (!U.async) {
            Er();
            return;
          }
          jt(Er);
        }
      }
    }
    var Rr = 0;
    var Fr = function e(t, n, r, i, a) {
      this.vm = t;
      if (a) {
        t._watcher = this;
      }
      t._watchers.push(this);
      if (i) {
        this.deep = !!i.deep;
        this.user = !!i.user;
        this.lazy = !!i.lazy;
        this.sync = !!i.sync;
        this.before = i.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = r;
      this.id = ++Rr;
      this.active = true;
      this.dirty = this.lazy;
      this.deps = [];
      this.newDeps = [];
      this.depIds = new me();
      this.newDepIds = new me();
      this.expression = n.toString();
      if (typeof n === "function") {
        this.getter = n;
      } else {
        this.getter = J(n);
        if (!this.getter) {
          this.getter = E;
          ge(
            'Failed watching path: "' +
              n +
              '" ' +
              "Watcher only accepts simple dot-delimited paths. " +
              "For full control, use a function instead.",
            t
          );
        }
      }
      this.value = this.lazy ? undefined : this.get();
    };
    Fr.prototype.get = function e() {
      Te(this);
      var t;
      var n = this.vm;
      try {
        t = this.getter.call(n, n);
      } catch (e) {
        if (this.user) {
          kt(e, n, 'getter for watcher "' + this.expression + '"');
        } else {
          throw e;
        }
      } finally {
        if (this.deep) {
          Zt(t);
        }
        Oe();
        this.cleanupDeps();
      }
      return t;
    };
    Fr.prototype.addDep = function e(t) {
      var n = t.id;
      if (!this.newDepIds.has(n)) {
        this.newDepIds.add(n);
        this.newDeps.push(t);
        if (!this.depIds.has(n)) {
          t.addSub(this);
        }
      }
    };
    Fr.prototype.cleanupDeps = function e() {
      var t = this.deps.length;
      while (t--) {
        var n = this.deps[t];
        if (!this.newDepIds.has(n.id)) {
          n.removeSub(this);
        }
      }
      var r = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = r;
      this.newDepIds.clear();
      r = this.deps;
      this.deps = this.newDeps;
      this.newDeps = r;
      this.newDeps.length = 0;
    };
    Fr.prototype.update = function e() {
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        jr(this);
      }
    };
    Fr.prototype.run = function e() {
      if (this.active) {
        var t = this.get();
        if (t !== this.value || o(t) || this.deep) {
          var n = this.value;
          this.value = t;
          if (this.user) {
            var r = 'callback for watcher "' + this.expression + '"';
            St(this.cb, this.vm, [t, n], this.vm, r);
          } else {
            this.cb.call(this.vm, t, n);
          }
        }
      }
    };
    Fr.prototype.evaluate = function e() {
      this.value = this.get();
      this.dirty = false;
    };
    Fr.prototype.depend = function e() {
      var t = this.deps.length;
      while (t--) {
        this.deps[t].depend();
      }
    };
    Fr.prototype.teardown = function e() {
      if (this.active) {
        if (!this.vm._isBeingDestroyed) {
          y(this.vm._watchers, this);
        }
        var t = this.deps.length;
        while (t--) {
          this.deps[t].removeSub(this);
        }
        this.active = false;
      }
    };
    var Vr = { enumerable: true, configurable: true, get: E, set: E };
    function Br(e, t, n) {
      Vr.get = function e() {
        return this[t][n];
      };
      Vr.set = function e(r) {
        this[t][n] = r;
      };
      Object.defineProperty(e, n, Vr);
    }
    function Hr(e) {
      e._watchers = [];
      var t = e.$options;
      if (t.props) {
        Ur(e, t.props);
      }
      if (t.methods) {
        Yr(e, t.methods);
      }
      if (t.data) {
        Kr(e);
      } else {
        Ke((e._data = {}), true);
      }
      if (t.computed) {
        zr(e, t.computed);
      }
      if (t.watch && t.watch !== le) {
        Xr(e, t.watch);
      }
    }
    function Ur(e, t) {
      var n = e.$options.propsData || {};
      var r = (e._props = {});
      var i = (e.$options._propKeys = []);
      var a = !e.$parent;
      if (!a) {
        Ve(false);
      }
      var o = function (o) {
        i.push(o);
        var s = ft(o, t, n, e);
        {
          var l = C(o);
          if (g(l) || U.isReservedAttr(l)) {
            ge(
              '"' +
                l +
                '" is a reserved attribute and cannot be used as component prop.',
              e
            );
          }
          We(r, o, s, function () {
            if (!a && !cr) {
              ge(
                "Avoid mutating a prop directly since the value will be " +
                  "overwritten whenever the parent component re-renders. " +
                  "Instead, use a data or computed property based on the prop's " +
                  'value. Prop being mutated: "' +
                  o +
                  '"',
                e
              );
            }
          });
        }
        if (!(o in e)) {
          Br(e, "_props", o);
        }
      };
      for (var s in t) o(s);
      Ve(true);
    }
    function Kr(e) {
      var t = e.$options.data;
      t = e._data = typeof t === "function" ? Wr(t, e) : t || {};
      if (!u(t)) {
        t = {};
        ge(
          "data functions should return an object:\n" +
            "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
          e
        );
      }
      var n = Object.keys(t);
      var r = e.$options.props;
      var i = e.$options.methods;
      var a = n.length;
      while (a--) {
        var o = n[a];
        {
          if (i && b(i, o)) {
            ge(
              'Method "' + o + '" has already been defined as a data property.',
              e
            );
          }
        }
        if (r && b(r, o)) {
          ge(
            'The data property "' +
              o +
              '" is already declared as a prop. ' +
              "Use prop default value instead.",
            e
          );
        } else if (!W(o)) {
          Br(e, "_data", o);
        }
      }
      Ke(t, true);
    }
    function Wr(e, t) {
      Te();
      try {
        return e.call(t, t);
      } catch (e) {
        kt(e, t, "data()");
        return {};
      } finally {
        Oe();
      }
    }
    var qr = { lazy: true };
    function zr(e, t) {
      var n = (e._computedWatchers = Object.create(null));
      var r = de();
      for (var i in t) {
        var a = t[i];
        var o = typeof a === "function" ? a : a.get;
        if (o == null) {
          ge('Getter is missing for computed property "' + i + '".', e);
        }
        if (!r) {
          n[i] = new Fr(e, o || E, E, qr);
        }
        if (!(i in e)) {
          Jr(e, i, a);
        } else {
          if (i in e.$data) {
            ge(
              'The computed property "' + i + '" is already defined in data.',
              e
            );
          } else if (e.$options.props && i in e.$options.props) {
            ge(
              'The computed property "' + i + '" is already defined as a prop.',
              e
            );
          } else if (e.$options.methods && i in e.$options.methods) {
            ge(
              'The computed property "' +
                i +
                '" is already defined as a method.',
              e
            );
          }
        }
      }
    }
    function Jr(e, t, n) {
      var r = !de();
      if (typeof n === "function") {
        Vr.get = r ? Gr(t) : Zr(n);
        Vr.set = E;
      } else {
        Vr.get = n.get ? (r && n.cache !== false ? Gr(t) : Zr(n.get)) : E;
        Vr.set = n.set || E;
      }
      if (Vr.set === E) {
        Vr.set = function () {
          ge(
            'Computed property "' +
              t +
              '" was assigned to but it has no setter.',
            this
          );
        };
      }
      Object.defineProperty(e, t, Vr);
    }
    function Gr(e) {
      return function t() {
        var n = this._computedWatchers && this._computedWatchers[e];
        if (n) {
          if (n.dirty) {
            n.evaluate();
          }
          if (Ce.target) {
            n.depend();
          }
          return n.value;
        }
      };
    }
    function Zr(e) {
      return function t() {
        return e.call(this, this);
      };
    }
    function Yr(e, t) {
      var n = e.$options.props;
      for (var r in t) {
        {
          if (typeof t[r] !== "function") {
            ge(
              'Method "' +
                r +
                '" has type "' +
                typeof t[r] +
                '" in the component definition. ' +
                "Did you reference the function correctly?",
              e
            );
          }
          if (n && b(n, r)) {
            ge('Method "' + r + '" has already been defined as a prop.', e);
          }
          if (r in e && W(r)) {
            ge(
              'Method "' +
                r +
                '" conflicts with an existing Vue instance method. ' +
                "Avoid defining component methods that start with _ or $."
            );
          }
        }
        e[r] = typeof t[r] !== "function" ? E : O(t[r], e);
      }
    }
    function Xr(e, t) {
      for (var n in t) {
        var r = t[n];
        if (Array.isArray(r)) {
          for (var i = 0; i < r.length; i++) {
            Qr(e, n, r[i]);
          }
        } else {
          Qr(e, n, r);
        }
      }
    }
    function Qr(e, t, n, r) {
      if (u(n)) {
        r = n;
        n = n.handler;
      }
      if (typeof n === "string") {
        n = e[n];
      }
      return e.$watch(t, n, r);
    }
    function ei(e) {
      var t = {};
      t.get = function () {
        return this._data;
      };
      var n = {};
      n.get = function () {
        return this._props;
      };
      {
        t.set = function () {
          ge(
            "Avoid replacing instance root $data. " +
              "Use nested data properties instead.",
            this
          );
        };
        n.set = function () {
          ge("$props is readonly.", this);
        };
      }
      Object.defineProperty(e.prototype, "$data", t);
      Object.defineProperty(e.prototype, "$props", n);
      e.prototype.$set = qe;
      e.prototype.$delete = ze;
      e.prototype.$watch = function (e, t, n) {
        var r = this;
        if (u(t)) {
          return Qr(r, e, t, n);
        }
        n = n || {};
        n.user = true;
        var i = new Fr(r, e, t, n);
        if (n.immediate) {
          var a = 'callback for immediate watcher "' + i.expression + '"';
          Te();
          St(t, r, [i.value], r, a);
          Oe();
        }
        return function e() {
          i.teardown();
        };
      };
    }
    var ti = 0;
    function ni(e) {
      e.prototype._init = function (e) {
        var t = this;
        t._uid = ti++;
        var n, r;
        if (U.performance && Rt) {
          n = "vue-perf-start:" + t._uid;
          r = "vue-perf-end:" + t._uid;
          Rt(n);
        }
        t._isVue = true;
        if (e && e._isComponent) {
          ri(t, e);
        } else {
          t.$options = lt(ii(t.constructor), e || {}, t);
        }
        {
          Bt(t);
        }
        t._self = t;
        vr(t);
        rr(t);
        Zn(t);
        br(t, "beforeCreate");
        fn(t);
        Hr(t);
        un(t);
        br(t, "created");
        if (U.performance && Rt) {
          t._name = be(t, false);
          Rt(r);
          Ft("vue " + t._name + " init", n, r);
        }
        if (t.$options.el) {
          t.$mount(t.$options.el);
        }
      };
    }
    function ri(e, t) {
      var n = (e.$options = Object.create(e.constructor.options));
      var r = t._parentVnode;
      n.parent = t.parent;
      n._parentVnode = r;
      var i = r.componentOptions;
      n.propsData = i.propsData;
      n._parentListeners = i.listeners;
      n._renderChildren = i.children;
      n._componentTag = i.tag;
      if (t.render) {
        n.render = t.render;
        n.staticRenderFns = t.staticRenderFns;
      }
    }
    function ii(e) {
      var t = e.options;
      if (e.super) {
        var n = ii(e.super);
        var r = e.superOptions;
        if (n !== r) {
          e.superOptions = n;
          var i = ai(e);
          if (i) {
            L(e.extendOptions, i);
          }
          t = e.options = lt(n, e.extendOptions);
          if (t.name) {
            t.components[t.name] = e;
          }
        }
      }
      return t;
    }
    function ai(e) {
      var t;
      var n = e.options;
      var r = e.sealedOptions;
      for (var i in n) {
        if (n[i] !== r[i]) {
          if (!t) {
            t = {};
          }
          t[i] = n[i];
        }
      }
      return t;
    }
    function oi(e) {
      if (!(this instanceof oi)) {
        ge("Vue is a constructor and should be called with the `new` keyword");
      }
      this._init(e);
    }
    ni(oi);
    ei(oi);
    ur(oi);
    pr(oi);
    Xn(oi);
    function si(e) {
      e.use = function (e) {
        var t = this._installedPlugins || (this._installedPlugins = []);
        if (t.indexOf(e) > -1) {
          return this;
        }
        var n = M(arguments, 1);
        n.unshift(this);
        if (typeof e.install === "function") {
          e.install.apply(e, n);
        } else if (typeof e === "function") {
          e.apply(null, n);
        }
        t.push(e);
        return this;
      };
    }
    function li(e) {
      e.mixin = function (e) {
        this.options = lt(this.options, e);
        return this;
      };
    }
    function ui(e) {
      e.cid = 0;
      var t = 1;
      e.extend = function (e) {
        e = e || {};
        var n = this;
        var r = n.cid;
        var i = e._Ctor || (e._Ctor = {});
        if (i[r]) {
          return i[r];
        }
        var a = e.name || n.options.name;
        if (a) {
          rt(a);
        }
        var o = function e(t) {
          this._init(t);
        };
        o.prototype = Object.create(n.prototype);
        o.prototype.constructor = o;
        o.cid = t++;
        o.options = lt(n.options, e);
        o["super"] = n;
        if (o.options.props) {
          fi(o);
        }
        if (o.options.computed) {
          ci(o);
        }
        o.extend = n.extend;
        o.mixin = n.mixin;
        o.use = n.use;
        B.forEach(function (e) {
          o[e] = n[e];
        });
        if (a) {
          o.options.components[a] = o;
        }
        o.superOptions = n.options;
        o.extendOptions = e;
        o.sealedOptions = L({}, o.options);
        i[r] = o;
        return o;
      };
    }
    function fi(e) {
      var t = e.options.props;
      for (var n in t) {
        Br(e.prototype, "_props", n);
      }
    }
    function ci(e) {
      var t = e.options.computed;
      for (var n in t) {
        Jr(e.prototype, n, t[n]);
      }
    }
    function di(e) {
      B.forEach(function (t) {
        e[t] = function (e, n) {
          if (!n) {
            return this.options[t + "s"][e];
          } else {
            if (t === "component") {
              rt(e);
            }
            if (t === "component" && u(n)) {
              n.name = n.name || e;
              n = this.options._base.extend(n);
            }
            if (t === "directive" && typeof n === "function") {
              n = { bind: n, update: n };
            }
            this.options[t + "s"][e] = n;
            return n;
          }
        };
      });
    }
    function vi(e) {
      return e && (e.Ctor.options.name || e.tag);
    }
    function pi(e, t) {
      if (Array.isArray(e)) {
        return e.indexOf(t) > -1;
      } else if (typeof e === "string") {
        return e.split(",").indexOf(t) > -1;
      } else if (f(e)) {
        return e.test(t);
      }
      return false;
    }
    function hi(e, t) {
      var n = e.cache;
      var r = e.keys;
      var i = e._vnode;
      for (var a in n) {
        var o = n[a];
        if (o) {
          var s = o.name;
          if (s && !t(s)) {
            mi(n, a, r, i);
          }
        }
      }
    }
    function mi(e, t, n, r) {
      var i = e[t];
      if (i && (!r || i.tag !== r.tag)) {
        i.componentInstance.$destroy();
      }
      e[t] = null;
      y(n, t);
    }
    var gi = [String, RegExp, Array];
    var yi = {
      name: "keep-alive",
      abstract: true,
      props: { include: gi, exclude: gi, max: [String, Number] },
      methods: {
        cacheVNode: function e() {
          var t = this;
          var n = t.cache;
          var r = t.keys;
          var i = t.vnodeToCache;
          var a = t.keyToCache;
          if (i) {
            var o = i.tag;
            var s = i.componentInstance;
            var l = i.componentOptions;
            n[a] = { name: vi(l), tag: o, componentInstance: s };
            r.push(a);
            if (this.max && r.length > parseInt(this.max)) {
              mi(n, r[0], r, this._vnode);
            }
            this.vnodeToCache = null;
          }
        },
      },
      created: function e() {
        this.cache = Object.create(null);
        this.keys = [];
      },
      destroyed: function e() {
        for (var t in this.cache) {
          mi(this.cache, t, this.keys);
        }
      },
      mounted: function e() {
        var t = this;
        this.cacheVNode();
        this.$watch("include", function (e) {
          hi(t, function (t) {
            return pi(e, t);
          });
        });
        this.$watch("exclude", function (e) {
          hi(t, function (t) {
            return !pi(e, t);
          });
        });
      },
      updated: function e() {
        this.cacheVNode();
      },
      render: function e() {
        var t = this.$slots.default;
        var n = nr(t);
        var r = n && n.componentOptions;
        if (r) {
          var i = vi(r);
          var a = this;
          var o = a.include;
          var s = a.exclude;
          if ((o && (!i || !pi(o, i))) || (s && i && pi(s, i))) {
            return n;
          }
          var l = this;
          var u = l.cache;
          var f = l.keys;
          var c =
            n.key == null ? r.Ctor.cid + (r.tag ? "::" + r.tag : "") : n.key;
          if (u[c]) {
            n.componentInstance = u[c].componentInstance;
            y(f, c);
            f.push(c);
          } else {
            this.vnodeToCache = n;
            this.keyToCache = c;
          }
          n.data.keepAlive = true;
        }
        return n || (t && t[0]);
      },
    };
    var _i = { KeepAlive: yi };
    function bi(e) {
      var t = {};
      t.get = function () {
        return U;
      };
      {
        t.set = function () {
          ge(
            "Do not replace the Vue.config object, set individual fields instead."
          );
        };
      }
      Object.defineProperty(e, "config", t);
      e.util = { warn: ge, extend: L, mergeOptions: lt, defineReactive: We };
      e.set = qe;
      e.delete = ze;
      e.nextTick = jt;
      e.observable = function (e) {
        Ke(e);
        return e;
      };
      e.options = Object.create(null);
      B.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      });
      e.options._base = e;
      L(e.options.components, _i);
      si(e);
      li(e);
      ui(e);
      di(e);
    }
    bi(oi);
    Object.defineProperty(oi.prototype, "$isServer", { get: de });
    Object.defineProperty(oi.prototype, "$ssrContext", {
      get: function e() {
        return this.$vnode && this.$vnode.ssrContext;
      },
    });
    Object.defineProperty(oi, "FunctionalRenderContext", { value: En });
    oi.version = "2.6.14";
    var wi = h("style,class");
    var xi = h("input,textarea,option,select,progress");
    var Ai = function (e, t, n) {
      return (
        (n === "value" && xi(e) && t !== "button") ||
        (n === "selected" && e === "option") ||
        (n === "checked" && e === "input") ||
        (n === "muted" && e === "video")
      );
    };
    var ki = h("contenteditable,draggable,spellcheck");
    var Si = h("events,caret,typing,plaintext-only");
    var Ci = function (e, t) {
      return Li(t) || t === "false"
        ? "false"
        : e === "contenteditable" && Si(t)
        ? t
        : "true";
    };
    var $i = h(
      "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," +
        "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," +
        "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," +
        "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," +
        "required,reversed,scoped,seamless,selected,sortable," +
        "truespeed,typemustmatch,visible"
    );
    var Ti = "http://www.w3.org/1999/xlink";
    var Oi = function (e) {
      return e.charAt(5) === ":" && e.slice(0, 5) === "xlink";
    };
    var Mi = function (e) {
      return Oi(e) ? e.slice(6, e.length) : "";
    };
    var Li = function (e) {
      return e == null || e === false;
    };
    function Ni(e) {
      var t = e.data;
      var r = e;
      var i = e;
      while (n(i.componentInstance)) {
        i = i.componentInstance._vnode;
        if (i && i.data) {
          t = Ei(i.data, t);
        }
      }
      while (n((r = r.parent))) {
        if (r && r.data) {
          t = Ei(t, r.data);
        }
      }
      return Ii(t.staticClass, t.class);
    }
    function Ei(e, t) {
      return {
        staticClass: Pi(e.staticClass, t.staticClass),
        class: n(e.class) ? [e.class, t.class] : t.class,
      };
    }
    function Ii(e, t) {
      if (n(e) || n(t)) {
        return Pi(e, Di(t));
      }
      return "";
    }
    function Pi(e, t) {
      return e ? (t ? e + " " + t : e) : t || "";
    }
    function Di(e) {
      if (Array.isArray(e)) {
        return ji(e);
      }
      if (o(e)) {
        return Ri(e);
      }
      if (typeof e === "string") {
        return e;
      }
      return "";
    }
    function ji(e) {
      var t = "";
      var r;
      for (var i = 0, a = e.length; i < a; i++) {
        if (n((r = Di(e[i]))) && r !== "") {
          if (t) {
            t += " ";
          }
          t += r;
        }
      }
      return t;
    }
    function Ri(e) {
      var t = "";
      for (var n in e) {
        if (e[n]) {
          if (t) {
            t += " ";
          }
          t += n;
        }
      }
      return t;
    }
    var Fi = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML",
    };
    var Vi = h(
      "html,body,base,head,link,meta,style,title," +
        "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," +
        "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," +
        "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," +
        "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," +
        "embed,object,param,source,canvas,script,noscript,del,ins," +
        "caption,col,colgroup,table,thead,tbody,td,th,tr," +
        "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," +
        "output,progress,select,textarea," +
        "details,dialog,menu,menuitem,summary," +
        "content,element,shadow,template,blockquote,iframe,tfoot"
    );
    var Bi = h(
      "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," +
        "foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," +
        "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
      true
    );
    var Hi = function (e) {
      return e === "pre";
    };
    var Ui = function (e) {
      return Vi(e) || Bi(e);
    };
    function Ki(e) {
      if (Bi(e)) {
        return "svg";
      }
      if (e === "math") {
        return "math";
      }
    }
    var Wi = Object.create(null);
    function qi(e) {
      if (!Z) {
        return true;
      }
      if (Ui(e)) {
        return false;
      }
      e = e.toLowerCase();
      if (Wi[e] != null) {
        return Wi[e];
      }
      var t = document.createElement(e);
      if (e.indexOf("-") > -1) {
        return (Wi[e] =
          t.constructor === window.HTMLUnknownElement ||
          t.constructor === window.HTMLElement);
      } else {
        return (Wi[e] = /HTMLUnknownElement/.test(t.toString()));
      }
    }
    var zi = h("text,number,password,search,email,tel,url");
    function Ji(e) {
      if (typeof e === "string") {
        var t = document.querySelector(e);
        if (!t) {
          ge("Cannot find element: " + e);
          return document.createElement("div");
        }
        return t;
      } else {
        return e;
      }
    }
    function Gi(e, t) {
      var n = document.createElement(e);
      if (e !== "select") {
        return n;
      }
      if (t.data && t.data.attrs && t.data.attrs.multiple !== undefined) {
        n.setAttribute("multiple", "multiple");
      }
      return n;
    }
    function Zi(e, t) {
      return document.createElementNS(Fi[e], t);
    }
    function Yi(e) {
      return document.createTextNode(e);
    }
    function Xi(e) {
      return document.createComment(e);
    }
    function Qi(e, t, n) {
      e.insertBefore(t, n);
    }
    function ea(e, t) {
      e.removeChild(t);
    }
    function ta(e, t) {
      e.appendChild(t);
    }
    function na(e) {
      return e.parentNode;
    }
    function ra(e) {
      return e.nextSibling;
    }
    function ia(e) {
      return e.tagName;
    }
    function aa(e, t) {
      e.textContent = t;
    }
    function oa(e, t) {
      e.setAttribute(t, "");
    }
    var sa = Object.freeze({
      createElement: Gi,
      createElementNS: Zi,
      createTextNode: Yi,
      createComment: Xi,
      insertBefore: Qi,
      removeChild: ea,
      appendChild: ta,
      parentNode: na,
      nextSibling: ra,
      tagName: ia,
      setTextContent: aa,
      setStyleScope: oa,
    });
    var la = {
      create: function e(t, n) {
        ua(n);
      },
      update: function e(t, n) {
        if (t.data.ref !== n.data.ref) {
          ua(t, true);
          ua(n);
        }
      },
      destroy: function e(t) {
        ua(t, true);
      },
    };
    function ua(e, t) {
      var r = e.data.ref;
      if (!n(r)) {
        return;
      }
      var i = e.context;
      var a = e.componentInstance || e.elm;
      var o = i.$refs;
      if (t) {
        if (Array.isArray(o[r])) {
          y(o[r], a);
        } else if (o[r] === a) {
          o[r] = undefined;
        }
      } else {
        if (e.data.refInFor) {
          if (!Array.isArray(o[r])) {
            o[r] = [a];
          } else if (o[r].indexOf(a) < 0) {
            o[r].push(a);
          }
        } else {
          o[r] = a;
        }
      }
    }
    var fa = new Me("", {}, []);
    var ca = ["create", "activate", "update", "remove", "destroy"];
    function da(e, i) {
      return (
        e.key === i.key &&
        e.asyncFactory === i.asyncFactory &&
        ((e.tag === i.tag &&
          e.isComment === i.isComment &&
          n(e.data) === n(i.data) &&
          va(e, i)) ||
          (r(e.isAsyncPlaceholder) && t(i.asyncFactory.error)))
      );
    }
    function va(e, t) {
      if (e.tag !== "input") {
        return true;
      }
      var r;
      var i = n((r = e.data)) && n((r = r.attrs)) && r.type;
      var a = n((r = t.data)) && n((r = r.attrs)) && r.type;
      return i === a || (zi(i) && zi(a));
    }
    function pa(e, t, r) {
      var i, a;
      var o = {};
      for (i = t; i <= r; ++i) {
        a = e[i].key;
        if (n(a)) {
          o[a] = i;
        }
      }
      return o;
    }
    function ha(e) {
      var i, o;
      var s = {};
      var l = e.modules;
      var u = e.nodeOps;
      for (i = 0; i < ca.length; ++i) {
        s[ca[i]] = [];
        for (o = 0; o < l.length; ++o) {
          if (n(l[o][ca[i]])) {
            s[ca[i]].push(l[o][ca[i]]);
          }
        }
      }
      function c(e) {
        return new Me(u.tagName(e).toLowerCase(), {}, [], undefined, e);
      }
      function d(e, t) {
        function n() {
          if (--n.listeners === 0) {
            v(e);
          }
        }
        n.listeners = t;
        return n;
      }
      function v(e) {
        var t = u.parentNode(e);
        if (n(t)) {
          u.removeChild(t, e);
        }
      }
      function p(e, t) {
        return (
          !t &&
          !e.ns &&
          !(
            U.ignoredElements.length &&
            U.ignoredElements.some(function (t) {
              return f(t) ? t.test(e.tag) : t === e.tag;
            })
          ) &&
          U.isUnknownElement(e.tag)
        );
      }
      var m = 0;
      function g(e, t, i, a, o, s, l) {
        if (n(e.elm) && n(s)) {
          e = s[l] = Ie(e);
        }
        e.isRootInsert = !o;
        if (y(e, t, i, a)) {
          return;
        }
        var f = e.data;
        var c = e.children;
        var d = e.tag;
        if (n(d)) {
          {
            if (f && f.pre) {
              m++;
            }
            if (p(e, m)) {
              ge(
                "Unknown custom element: <" +
                  d +
                  "> - did you " +
                  "register the component correctly? For recursive components, " +
                  'make sure to provide the "name" option.',
                e.context
              );
            }
          }
          e.elm = e.ns ? u.createElementNS(e.ns, d) : u.createElement(d, e);
          S(e);
          {
            x(e, c, t);
            if (n(f)) {
              k(e, t);
            }
            w(i, e.elm, a);
          }
          if (f && f.pre) {
            m--;
          }
        } else if (r(e.isComment)) {
          e.elm = u.createComment(e.text);
          w(i, e.elm, a);
        } else {
          e.elm = u.createTextNode(e.text);
          w(i, e.elm, a);
        }
      }
      function y(e, t, i, a) {
        var o = e.data;
        if (n(o)) {
          var s = n(e.componentInstance) && o.keepAlive;
          if (n((o = o.hook)) && n((o = o.init))) {
            o(e, false);
          }
          if (n(e.componentInstance)) {
            _(e, t);
            w(i, e.elm, a);
            if (r(s)) {
              b(e, t, i, a);
            }
            return true;
          }
        }
      }
      function _(e, t) {
        if (n(e.data.pendingInsert)) {
          t.push.apply(t, e.data.pendingInsert);
          e.data.pendingInsert = null;
        }
        e.elm = e.componentInstance.$el;
        if (A(e)) {
          k(e, t);
          S(e);
        } else {
          ua(e);
          t.push(e);
        }
      }
      function b(e, t, r, i) {
        var a;
        var o = e;
        while (o.componentInstance) {
          o = o.componentInstance._vnode;
          if (n((a = o.data)) && n((a = a.transition))) {
            for (a = 0; a < s.activate.length; ++a) {
              s.activate[a](fa, o);
            }
            t.push(o);
            break;
          }
        }
        w(r, e.elm, i);
      }
      function w(e, t, r) {
        if (n(e)) {
          if (n(r)) {
            if (u.parentNode(r) === e) {
              u.insertBefore(e, t, r);
            }
          } else {
            u.appendChild(e, t);
          }
        }
      }
      function x(e, t, n) {
        if (Array.isArray(t)) {
          {
            L(t);
          }
          for (var r = 0; r < t.length; ++r) {
            g(t[r], n, e.elm, null, true, t, r);
          }
        } else if (a(e.text)) {
          u.appendChild(e.elm, u.createTextNode(String(e.text)));
        }
      }
      function A(e) {
        while (e.componentInstance) {
          e = e.componentInstance._vnode;
        }
        return n(e.tag);
      }
      function k(e, t) {
        for (var r = 0; r < s.create.length; ++r) {
          s.create[r](fa, e);
        }
        i = e.data.hook;
        if (n(i)) {
          if (n(i.create)) {
            i.create(fa, e);
          }
          if (n(i.insert)) {
            t.push(e);
          }
        }
      }
      function S(e) {
        var t;
        if (n((t = e.fnScopeId))) {
          u.setStyleScope(e.elm, t);
        } else {
          var r = e;
          while (r) {
            if (n((t = r.context)) && n((t = t.$options._scopeId))) {
              u.setStyleScope(e.elm, t);
            }
            r = r.parent;
          }
        }
        if (
          n((t = fr)) &&
          t !== e.context &&
          t !== e.fnContext &&
          n((t = t.$options._scopeId))
        ) {
          u.setStyleScope(e.elm, t);
        }
      }
      function C(e, t, n, r, i, a) {
        for (; r <= i; ++r) {
          g(n[r], a, e, t, false, n, r);
        }
      }
      function $(e) {
        var t, r;
        var i = e.data;
        if (n(i)) {
          if (n((t = i.hook)) && n((t = t.destroy))) {
            t(e);
          }
          for (t = 0; t < s.destroy.length; ++t) {
            s.destroy[t](e);
          }
        }
        if (n((t = e.children))) {
          for (r = 0; r < e.children.length; ++r) {
            $(e.children[r]);
          }
        }
      }
      function T(e, t, r) {
        for (; t <= r; ++t) {
          var i = e[t];
          if (n(i)) {
            if (n(i.tag)) {
              O(i);
              $(i);
            } else {
              v(i.elm);
            }
          }
        }
      }
      function O(e, t) {
        if (n(t) || n(e.data)) {
          var r;
          var i = s.remove.length + 1;
          if (n(t)) {
            t.listeners += i;
          } else {
            t = d(e.elm, i);
          }
          if (n((r = e.componentInstance)) && n((r = r._vnode)) && n(r.data)) {
            O(r, t);
          }
          for (r = 0; r < s.remove.length; ++r) {
            s.remove[r](e, t);
          }
          if (n((r = e.data.hook)) && n((r = r.remove))) {
            r(e, t);
          } else {
            t();
          }
        } else {
          v(e.elm);
        }
      }
      function M(e, r, i, a, o) {
        var s = 0;
        var l = 0;
        var f = r.length - 1;
        var c = r[0];
        var d = r[f];
        var v = i.length - 1;
        var p = i[0];
        var h = i[v];
        var m, y, _, b;
        var w = !o;
        {
          L(i);
        }
        while (s <= f && l <= v) {
          if (t(c)) {
            c = r[++s];
          } else if (t(d)) {
            d = r[--f];
          } else if (da(c, p)) {
            E(c, p, a, i, l);
            c = r[++s];
            p = i[++l];
          } else if (da(d, h)) {
            E(d, h, a, i, v);
            d = r[--f];
            h = i[--v];
          } else if (da(c, h)) {
            E(c, h, a, i, v);
            w && u.insertBefore(e, c.elm, u.nextSibling(d.elm));
            c = r[++s];
            h = i[--v];
          } else if (da(d, p)) {
            E(d, p, a, i, l);
            w && u.insertBefore(e, d.elm, c.elm);
            d = r[--f];
            p = i[++l];
          } else {
            if (t(m)) {
              m = pa(r, s, f);
            }
            y = n(p.key) ? m[p.key] : N(p, r, s, f);
            if (t(y)) {
              g(p, a, e, c.elm, false, i, l);
            } else {
              _ = r[y];
              if (da(_, p)) {
                E(_, p, a, i, l);
                r[y] = undefined;
                w && u.insertBefore(e, _.elm, c.elm);
              } else {
                g(p, a, e, c.elm, false, i, l);
              }
            }
            p = i[++l];
          }
        }
        if (s > f) {
          b = t(i[v + 1]) ? null : i[v + 1].elm;
          C(e, b, i, l, v, a);
        } else if (l > v) {
          T(r, s, f);
        }
      }
      function L(e) {
        var t = {};
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          var a = i.key;
          if (n(a)) {
            if (t[a]) {
              ge(
                "Duplicate keys detected: '" +
                  a +
                  "'. This may cause an update error.",
                i.context
              );
            } else {
              t[a] = true;
            }
          }
        }
      }
      function N(e, t, r, i) {
        for (var a = r; a < i; a++) {
          var o = t[a];
          if (n(o) && da(e, o)) {
            return a;
          }
        }
      }
      function E(e, i, a, o, l, f) {
        if (e === i) {
          return;
        }
        if (n(i.elm) && n(o)) {
          i = o[l] = Ie(i);
        }
        var c = (i.elm = e.elm);
        if (r(e.isAsyncPlaceholder)) {
          if (n(i.asyncFactory.resolved)) {
            j(e.elm, i, a);
          } else {
            i.isAsyncPlaceholder = true;
          }
          return;
        }
        if (
          r(i.isStatic) &&
          r(e.isStatic) &&
          i.key === e.key &&
          (r(i.isCloned) || r(i.isOnce))
        ) {
          i.componentInstance = e.componentInstance;
          return;
        }
        var d;
        var v = i.data;
        if (n(v) && n((d = v.hook)) && n((d = d.prepatch))) {
          d(e, i);
        }
        var p = e.children;
        var h = i.children;
        if (n(v) && A(i)) {
          for (d = 0; d < s.update.length; ++d) {
            s.update[d](e, i);
          }
          if (n((d = v.hook)) && n((d = d.update))) {
            d(e, i);
          }
        }
        if (t(i.text)) {
          if (n(p) && n(h)) {
            if (p !== h) {
              M(c, p, h, a, f);
            }
          } else if (n(h)) {
            {
              L(h);
            }
            if (n(e.text)) {
              u.setTextContent(c, "");
            }
            C(c, null, h, 0, h.length - 1, a);
          } else if (n(p)) {
            T(p, 0, p.length - 1);
          } else if (n(e.text)) {
            u.setTextContent(c, "");
          }
        } else if (e.text !== i.text) {
          u.setTextContent(c, i.text);
        }
        if (n(v)) {
          if (n((d = v.hook)) && n((d = d.postpatch))) {
            d(e, i);
          }
        }
      }
      function I(e, t, i) {
        if (r(i) && n(e.parent)) {
          e.parent.data.pendingInsert = t;
        } else {
          for (var a = 0; a < t.length; ++a) {
            t[a].data.hook.insert(t[a]);
          }
        }
      }
      var P = false;
      var D = h("attrs,class,staticClass,staticStyle,key");
      function j(e, t, i, a) {
        var o;
        var s = t.tag;
        var l = t.data;
        var u = t.children;
        a = a || (l && l.pre);
        t.elm = e;
        if (r(t.isComment) && n(t.asyncFactory)) {
          t.isAsyncPlaceholder = true;
          return true;
        }
        {
          if (!R(e, t, a)) {
            return false;
          }
        }
        if (n(l)) {
          if (n((o = l.hook)) && n((o = o.init))) {
            o(t, true);
          }
          if (n((o = t.componentInstance))) {
            _(t, i);
            return true;
          }
        }
        if (n(s)) {
          if (n(u)) {
            if (!e.hasChildNodes()) {
              x(t, u, i);
            } else {
              if (n((o = l)) && n((o = o.domProps)) && n((o = o.innerHTML))) {
                if (o !== e.innerHTML) {
                  if (typeof console !== "undefined" && !P) {
                    P = true;
                    console.warn("Parent: ", e);
                    console.warn("server innerHTML: ", o);
                    console.warn("client innerHTML: ", e.innerHTML);
                  }
                  return false;
                }
              } else {
                var f = true;
                var c = e.firstChild;
                for (var d = 0; d < u.length; d++) {
                  if (!c || !j(c, u[d], i, a)) {
                    f = false;
                    break;
                  }
                  c = c.nextSibling;
                }
                if (!f || c) {
                  if (typeof console !== "undefined" && !P) {
                    P = true;
                    console.warn("Parent: ", e);
                    console.warn(
                      "Mismatching childNodes vs. VNodes: ",
                      e.childNodes,
                      u
                    );
                  }
                  return false;
                }
              }
            }
          }
          if (n(l)) {
            var v = false;
            for (var p in l) {
              if (!D(p)) {
                v = true;
                k(t, i);
                break;
              }
            }
            if (!v && l["class"]) {
              Zt(l["class"]);
            }
          }
        } else if (e.data !== t.text) {
          e.data = t.text;
        }
        return true;
      }
      function R(e, t, r) {
        if (n(t.tag)) {
          return (
            t.tag.indexOf("vue-component") === 0 ||
            (!p(t, r) &&
              t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()))
          );
        } else {
          return e.nodeType === (t.isComment ? 8 : 3);
        }
      }
      return function e(i, a, o, l) {
        if (t(a)) {
          if (n(i)) {
            $(i);
          }
          return;
        }
        var f = false;
        var d = [];
        if (t(i)) {
          f = true;
          g(a, d);
        } else {
          var v = n(i.nodeType);
          if (!v && da(i, a)) {
            E(i, a, d, null, null, l);
          } else {
            if (v) {
              if (i.nodeType === 1 && i.hasAttribute(V)) {
                i.removeAttribute(V);
                o = true;
              }
              if (r(o)) {
                if (j(i, a, d)) {
                  I(a, d, true);
                  return i;
                } else {
                  ge(
                    "The client-side rendered virtual DOM tree is not matching " +
                      "server-rendered content. This is likely caused by incorrect " +
                      "HTML markup, for example nesting block-level elements inside " +
                      "<p>, or missing <tbody>. Bailing hydration and performing " +
                      "full client-side render."
                  );
                }
              }
              i = c(i);
            }
            var p = i.elm;
            var h = u.parentNode(p);
            g(a, d, p._leaveCb ? null : h, u.nextSibling(p));
            if (n(a.parent)) {
              var m = a.parent;
              var y = A(a);
              while (m) {
                for (var _ = 0; _ < s.destroy.length; ++_) {
                  s.destroy[_](m);
                }
                m.elm = a.elm;
                if (y) {
                  for (var b = 0; b < s.create.length; ++b) {
                    s.create[b](fa, m);
                  }
                  var w = m.data.hook.insert;
                  if (w.merged) {
                    for (var x = 1; x < w.fns.length; x++) {
                      w.fns[x]();
                    }
                  }
                } else {
                  ua(m);
                }
                m = m.parent;
              }
            }
            if (n(h)) {
              T([i], 0, 0);
            } else if (n(i.tag)) {
              $(i);
            }
          }
        }
        I(a, d, f);
        return a.elm;
      };
    }
    var ma = {
      create: ga,
      update: ga,
      destroy: function e(t) {
        ga(t, fa);
      },
    };
    function ga(e, t) {
      if (e.data.directives || t.data.directives) {
        ya(e, t);
      }
    }
    function ya(e, t) {
      var n = e === fa;
      var r = t === fa;
      var i = ba(e.data.directives, e.context);
      var a = ba(t.data.directives, t.context);
      var o = [];
      var s = [];
      var l, u, f;
      for (l in a) {
        u = i[l];
        f = a[l];
        if (!u) {
          xa(f, "bind", t, e);
          if (f.def && f.def.inserted) {
            o.push(f);
          }
        } else {
          f.oldValue = u.value;
          f.oldArg = u.arg;
          xa(f, "update", t, e);
          if (f.def && f.def.componentUpdated) {
            s.push(f);
          }
        }
      }
      if (o.length) {
        var c = function () {
          for (var n = 0; n < o.length; n++) {
            xa(o[n], "inserted", t, e);
          }
        };
        if (n) {
          tn(t, "insert", c);
        } else {
          c();
        }
      }
      if (s.length) {
        tn(t, "postpatch", function () {
          for (var n = 0; n < s.length; n++) {
            xa(s[n], "componentUpdated", t, e);
          }
        });
      }
      if (!n) {
        for (l in i) {
          if (!a[l]) {
            xa(i[l], "unbind", e, e, r);
          }
        }
      }
    }
    var _a = Object.create(null);
    function ba(e, t) {
      var n = Object.create(null);
      if (!e) {
        return n;
      }
      var r, i;
      for (r = 0; r < e.length; r++) {
        i = e[r];
        if (!i.modifiers) {
          i.modifiers = _a;
        }
        n[wa(i)] = i;
        i.def = ut(t.$options, "directives", i.name, true);
      }
      return n;
    }
    function wa(e) {
      return (
        e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
      );
    }
    function xa(e, t, n, r, i) {
      var a = e.def && e.def[t];
      if (a) {
        try {
          a(n.elm, e, n, r, i);
        } catch (r) {
          kt(r, n.context, "directive " + e.name + " " + t + " hook");
        }
      }
    }
    var Aa = [la, ma];
    function ka(e, r) {
      var i = r.componentOptions;
      if (n(i) && i.Ctor.options.inheritAttrs === false) {
        return;
      }
      if (t(e.data.attrs) && t(r.data.attrs)) {
        return;
      }
      var a, o, s;
      var l = r.elm;
      var u = e.data.attrs || {};
      var f = r.data.attrs || {};
      if (n(f.__ob__)) {
        f = r.data.attrs = L({}, f);
      }
      for (a in f) {
        o = f[a];
        s = u[a];
        if (s !== o) {
          Sa(l, a, o, r.data.pre);
        }
      }
      if ((ee || ne) && f.value !== u.value) {
        Sa(l, "value", f.value);
      }
      for (a in u) {
        if (t(f[a])) {
          if (Oi(a)) {
            l.removeAttributeNS(Ti, Mi(a));
          } else if (!ki(a)) {
            l.removeAttribute(a);
          }
        }
      }
    }
    function Sa(e, t, n, r) {
      if (r || e.tagName.indexOf("-") > -1) {
        Ca(e, t, n);
      } else if ($i(t)) {
        if (Li(n)) {
          e.removeAttribute(t);
        } else {
          n = t === "allowfullscreen" && e.tagName === "EMBED" ? "true" : t;
          e.setAttribute(t, n);
        }
      } else if (ki(t)) {
        e.setAttribute(t, Ci(t, n));
      } else if (Oi(t)) {
        if (Li(n)) {
          e.removeAttributeNS(Ti, Mi(t));
        } else {
          e.setAttributeNS(Ti, t, n);
        }
      } else {
        Ca(e, t, n);
      }
    }
    function Ca(e, t, n) {
      if (Li(n)) {
        e.removeAttribute(t);
      } else {
        if (
          ee &&
          !te &&
          e.tagName === "TEXTAREA" &&
          t === "placeholder" &&
          n !== "" &&
          !e.__ieph
        ) {
          var r = function (t) {
            t.stopImmediatePropagation();
            e.removeEventListener("input", r);
          };
          e.addEventListener("input", r);
          e.__ieph = true;
        }
        e.setAttribute(t, n);
      }
    }
    var $a = { create: ka, update: ka };
    function Ta(e, r) {
      var i = r.elm;
      var a = r.data;
      var o = e.data;
      if (
        t(a.staticClass) &&
        t(a.class) &&
        (t(o) || (t(o.staticClass) && t(o.class)))
      ) {
        return;
      }
      var s = Ni(r);
      var l = i._transitionClasses;
      if (n(l)) {
        s = Pi(s, Di(l));
      }
      if (s !== i._prevClass) {
        i.setAttribute("class", s);
        i._prevClass = s;
      }
    }
    var Oa = { create: Ta, update: Ta };
    var Ma = /[\w).+\-_$\]]/;
    function La(e) {
      var t = false;
      var n = false;
      var r = false;
      var i = false;
      var a = 0;
      var o = 0;
      var s = 0;
      var l = 0;
      var u, f, c, d, v;
      for (c = 0; c < e.length; c++) {
        f = u;
        u = e.charCodeAt(c);
        if (t) {
          if (u === 39 && f !== 92) {
            t = false;
          }
        } else if (n) {
          if (u === 34 && f !== 92) {
            n = false;
          }
        } else if (r) {
          if (u === 96 && f !== 92) {
            r = false;
          }
        } else if (i) {
          if (u === 47 && f !== 92) {
            i = false;
          }
        } else if (
          u === 124 &&
          e.charCodeAt(c + 1) !== 124 &&
          e.charCodeAt(c - 1) !== 124 &&
          !a &&
          !o &&
          !s
        ) {
          if (d === undefined) {
            l = c + 1;
            d = e.slice(0, c).trim();
          } else {
            m();
          }
        } else {
          switch (u) {
            case 34:
              n = true;
              break;
            case 39:
              t = true;
              break;
            case 96:
              r = true;
              break;
            case 40:
              s++;
              break;
            case 41:
              s--;
              break;
            case 91:
              o++;
              break;
            case 93:
              o--;
              break;
            case 123:
              a++;
              break;
            case 125:
              a--;
              break;
          }
          if (u === 47) {
            var p = c - 1;
            var h = void 0;
            for (; p >= 0; p--) {
              h = e.charAt(p);
              if (h !== " ") {
                break;
              }
            }
            if (!h || !Ma.test(h)) {
              i = true;
            }
          }
        }
      }
      if (d === undefined) {
        d = e.slice(0, c).trim();
      } else if (l !== 0) {
        m();
      }
      function m() {
        (v || (v = [])).push(e.slice(l, c).trim());
        l = c + 1;
      }
      if (v) {
        for (c = 0; c < v.length; c++) {
          d = Na(d, v[c]);
        }
      }
      return d;
    }
    function Na(e, t) {
      var n = t.indexOf("(");
      if (n < 0) {
        return '_f("' + t + '")(' + e + ")";
      } else {
        var r = t.slice(0, n);
        var i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (i !== ")" ? "," + i : i);
      }
    }
    function Ea(e, t) {
      console.error("[Vue compiler]: " + e);
    }
    function Ia(e, t) {
      return e
        ? e
            .map(function (e) {
              return e[t];
            })
            .filter(function (e) {
              return e;
            })
        : [];
    }
    function Pa(e, t, n, r, i) {
      (e.props || (e.props = [])).push(
        Wa({ name: t, value: n, dynamic: i }, r)
      );
      e.plain = false;
    }
    function Da(e, t, n, r, i) {
      var a = i
        ? e.dynamicAttrs || (e.dynamicAttrs = [])
        : e.attrs || (e.attrs = []);
      a.push(Wa({ name: t, value: n, dynamic: i }, r));
      e.plain = false;
    }
    function ja(e, t, n, r) {
      e.attrsMap[t] = n;
      e.attrsList.push(Wa({ name: t, value: n }, r));
    }
    function Ra(e, t, n, r, i, a, o, s) {
      (e.directives || (e.directives = [])).push(
        Wa(
          {
            name: t,
            rawName: n,
            value: r,
            arg: i,
            isDynamicArg: a,
            modifiers: o,
          },
          s
        )
      );
      e.plain = false;
    }
    function Fa(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }
    function Va(t, n, r, i, a, o, s, l) {
      i = i || e;
      if (o && i.prevent && i.passive) {
        o(
          "passive and prevent can't be used together. " +
            "Passive handler can't prevent default event.",
          s
        );
      }
      if (i.right) {
        if (l) {
          n = "(" + n + ")==='click'?'contextmenu':(" + n + ")";
        } else if (n === "click") {
          n = "contextmenu";
          delete i.right;
        }
      } else if (i.middle) {
        if (l) {
          n = "(" + n + ")==='click'?'mouseup':(" + n + ")";
        } else if (n === "click") {
          n = "mouseup";
        }
      }
      if (i.capture) {
        delete i.capture;
        n = Fa("!", n, l);
      }
      if (i.once) {
        delete i.once;
        n = Fa("~", n, l);
      }
      if (i.passive) {
        delete i.passive;
        n = Fa("&", n, l);
      }
      var u;
      if (i.native) {
        delete i.native;
        u = t.nativeEvents || (t.nativeEvents = {});
      } else {
        u = t.events || (t.events = {});
      }
      var f = Wa({ value: r.trim(), dynamic: l }, s);
      if (i !== e) {
        f.modifiers = i;
      }
      var c = u[n];
      if (Array.isArray(c)) {
        a ? c.unshift(f) : c.push(f);
      } else if (c) {
        u[n] = a ? [f, c] : [c, f];
      } else {
        u[n] = f;
      }
      t.plain = false;
    }
    function Ba(e, t) {
      return (
        e.rawAttrsMap[":" + t] ||
        e.rawAttrsMap["v-bind:" + t] ||
        e.rawAttrsMap[t]
      );
    }
    function Ha(e, t, n) {
      var r = Ua(e, ":" + t) || Ua(e, "v-bind:" + t);
      if (r != null) {
        return La(r);
      } else if (n !== false) {
        var i = Ua(e, t);
        if (i != null) {
          return JSON.stringify(i);
        }
      }
    }
    function Ua(e, t, n) {
      var r;
      if ((r = e.attrsMap[t]) != null) {
        var i = e.attrsList;
        for (var a = 0, o = i.length; a < o; a++) {
          if (i[a].name === t) {
            i.splice(a, 1);
            break;
          }
        }
      }
      if (n) {
        delete e.attrsMap[t];
      }
      return r;
    }
    function Ka(e, t) {
      var n = e.attrsList;
      for (var r = 0, i = n.length; r < i; r++) {
        var a = n[r];
        if (t.test(a.name)) {
          n.splice(r, 1);
          return a;
        }
      }
    }
    function Wa(e, t) {
      if (t) {
        if (t.start != null) {
          e.start = t.start;
        }
        if (t.end != null) {
          e.end = t.end;
        }
      }
      return e;
    }
    function qa(e, t, n) {
      var r = n || {};
      var i = r.number;
      var a = r.trim;
      var o = "$$v";
      var s = o;
      if (a) {
        s =
          "(typeof " +
          o +
          " === 'string'" +
          "? " +
          o +
          ".trim()" +
          ": " +
          o +
          ")";
      }
      if (i) {
        s = "_n(" + s + ")";
      }
      var l = za(t, s);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function (" + o + ") {" + l + "}",
      };
    }
    function za(e, t) {
      var n = eo(e);
      if (n.key === null) {
        return e + "=" + t;
      } else {
        return "$set(" + n.exp + ", " + n.key + ", " + t + ")";
      }
    }
    var Ja, Ga, Za, Ya, Xa, Qa;
    function eo(e) {
      e = e.trim();
      Ja = e.length;
      if (e.indexOf("[") < 0 || e.lastIndexOf("]") < Ja - 1) {
        Ya = e.lastIndexOf(".");
        if (Ya > -1) {
          return { exp: e.slice(0, Ya), key: '"' + e.slice(Ya + 1) + '"' };
        } else {
          return { exp: e, key: null };
        }
      }
      Ga = e;
      Ya = Xa = Qa = 0;
      while (!no()) {
        Za = to();
        if (ro(Za)) {
          ao(Za);
        } else if (Za === 91) {
          io(Za);
        }
      }
      return { exp: e.slice(0, Xa), key: e.slice(Xa + 1, Qa) };
    }
    function to() {
      return Ga.charCodeAt(++Ya);
    }
    function no() {
      return Ya >= Ja;
    }
    function ro(e) {
      return e === 34 || e === 39;
    }
    function io(e) {
      var t = 1;
      Xa = Ya;
      while (!no()) {
        e = to();
        if (ro(e)) {
          ao(e);
          continue;
        }
        if (e === 91) {
          t++;
        }
        if (e === 93) {
          t--;
        }
        if (t === 0) {
          Qa = Ya;
          break;
        }
      }
    }
    function ao(e) {
      var t = e;
      while (!no()) {
        e = to();
        if (e === t) {
          break;
        }
      }
    }
    var oo;
    var so = "__r";
    var lo = "__c";
    function uo(e, t, n) {
      oo = n;
      var r = t.value;
      var i = t.modifiers;
      var a = e.tag;
      var o = e.attrsMap.type;
      {
        if (a === "input" && o === "file") {
          oo(
            "<" +
              e.tag +
              ' v-model="' +
              r +
              '" type="file">:\n' +
              "File inputs are read only. Use a v-on:change listener instead.",
            e.rawAttrsMap["v-model"]
          );
        }
      }
      if (e.component) {
        qa(e, r, i);
        return false;
      } else if (a === "select") {
        vo(e, r, i);
      } else if (a === "input" && o === "checkbox") {
        fo(e, r, i);
      } else if (a === "input" && o === "radio") {
        co(e, r, i);
      } else if (a === "input" || a === "textarea") {
        po(e, r, i);
      } else if (!U.isReservedTag(a)) {
        qa(e, r, i);
        return false;
      } else {
        oo(
          "<" +
            e.tag +
            ' v-model="' +
            r +
            '">: ' +
            "v-model is not supported on this element type. " +
            "If you are working with contenteditable, it's recommended to " +
            "wrap a library dedicated for that purpose inside a custom component.",
          e.rawAttrsMap["v-model"]
        );
      }
      return true;
    }
    function fo(e, t, n) {
      var r = n && n.number;
      var i = Ha(e, "value") || "null";
      var a = Ha(e, "true-value") || "true";
      var o = Ha(e, "false-value") || "false";
      Pa(
        e,
        "checked",
        "Array.isArray(" +
          t +
          ")" +
          "?_i(" +
          t +
          "," +
          i +
          ")>-1" +
          (a === "true" ? ":(" + t + ")" : ":_q(" + t + "," + a + ")")
      );
      Va(
        e,
        "change",
        "var $$a=" +
          t +
          "," +
          "$$el=$event.target," +
          "$$c=$$el.checked?(" +
          a +
          "):(" +
          o +
          ");" +
          "if(Array.isArray($$a)){" +
          "var $$v=" +
          (r ? "_n(" + i + ")" : i) +
          "," +
          "$$i=_i($$a,$$v);" +
          "if($$el.checked){$$i<0&&(" +
          za(t, "$$a.concat([$$v])") +
          ")}" +
          "else{$$i>-1&&(" +
          za(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") +
          ")}" +
          "}else{" +
          za(t, "$$c") +
          "}",
        null,
        true
      );
    }
    function co(e, t, n) {
      var r = n && n.number;
      var i = Ha(e, "value") || "null";
      i = r ? "_n(" + i + ")" : i;
      Pa(e, "checked", "_q(" + t + "," + i + ")");
      Va(e, "change", za(t, i), null, true);
    }
    function vo(e, t, n) {
      var r = n && n.number;
      var i =
        "Array.prototype.filter" +
        ".call($event.target.options,function(o){return o.selected})" +
        '.map(function(o){var val = "_value" in o ? o._value : o.value;' +
        "return " +
        (r ? "_n(val)" : "val") +
        "})";
      var a = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
      var o = "var $$selectedVal = " + i + ";";
      o = o + " " + za(t, a);
      Va(e, "change", o, null, true);
    }
    function po(e, t, n) {
      var r = e.attrsMap.type;
      {
        var i = e.attrsMap["v-bind:value"] || e.attrsMap[":value"];
        var a = e.attrsMap["v-bind:type"] || e.attrsMap[":type"];
        if (i && !a) {
          var o = e.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
          oo(
            o +
              '="' +
              i +
              '" conflicts with v-model on the same element ' +
              "because the latter already expands to a value binding internally",
            e.rawAttrsMap[o]
          );
        }
      }
      var s = n || {};
      var l = s.lazy;
      var u = s.number;
      var f = s.trim;
      var c = !l && r !== "range";
      var d = l ? "change" : r === "range" ? so : "input";
      var v = "$event.target.value";
      if (f) {
        v = "$event.target.value.trim()";
      }
      if (u) {
        v = "_n(" + v + ")";
      }
      var p = za(t, v);
      if (c) {
        p = "if($event.target.composing)return;" + p;
      }
      Pa(e, "value", "(" + t + ")");
      Va(e, d, p, null, true);
      if (f || u) {
        Va(e, "blur", "$forceUpdate()");
      }
    }
    function ho(e) {
      if (n(e[so])) {
        var t = ee ? "change" : "input";
        e[t] = [].concat(e[so], e[t] || []);
        delete e[so];
      }
      if (n(e[lo])) {
        e.change = [].concat(e[lo], e.change || []);
        delete e[lo];
      }
    }
    var mo;
    function go(e, t, n) {
      var r = mo;
      return function i() {
        var a = t.apply(null, arguments);
        if (a !== null) {
          bo(e, i, n, r);
        }
      };
    }
    var yo = Tt && !(se && Number(se[1]) <= 53);
    function _o(e, t, n, r) {
      if (yo) {
        var i = Mr;
        var a = t;
        t = a._wrapper = function (e) {
          if (
            e.target === e.currentTarget ||
            e.timeStamp >= i ||
            e.timeStamp <= 0 ||
            e.target.ownerDocument !== document
          ) {
            return a.apply(this, arguments);
          }
        };
      }
      mo.addEventListener(e, t, ue ? { capture: n, passive: r } : n);
    }
    function bo(e, t, n, r) {
      (r || mo).removeEventListener(e, t._wrapper || t, n);
    }
    function wo(e, n) {
      if (t(e.data.on) && t(n.data.on)) {
        return;
      }
      var r = n.data.on || {};
      var i = e.data.on || {};
      mo = n.elm;
      ho(r);
      en(r, i, _o, bo, go, n.context);
      mo = undefined;
    }
    var xo = { create: wo, update: wo };
    var Ao;
    function ko(e, r) {
      if (t(e.data.domProps) && t(r.data.domProps)) {
        return;
      }
      var i, a;
      var o = r.elm;
      var s = e.data.domProps || {};
      var l = r.data.domProps || {};
      if (n(l.__ob__)) {
        l = r.data.domProps = L({}, l);
      }
      for (i in s) {
        if (!(i in l)) {
          o[i] = "";
        }
      }
      for (i in l) {
        a = l[i];
        if (i === "textContent" || i === "innerHTML") {
          if (r.children) {
            r.children.length = 0;
          }
          if (a === s[i]) {
            continue;
          }
          if (o.childNodes.length === 1) {
            o.removeChild(o.childNodes[0]);
          }
        }
        if (i === "value" && o.tagName !== "PROGRESS") {
          o._value = a;
          var u = t(a) ? "" : String(a);
          if (So(o, u)) {
            o.value = u;
          }
        } else if (i === "innerHTML" && Bi(o.tagName) && t(o.innerHTML)) {
          Ao = Ao || document.createElement("div");
          Ao.innerHTML = "<svg>" + a + "</svg>";
          var f = Ao.firstChild;
          while (o.firstChild) {
            o.removeChild(o.firstChild);
          }
          while (f.firstChild) {
            o.appendChild(f.firstChild);
          }
        } else if (a !== s[i]) {
          try {
            o[i] = a;
          } catch (e) {}
        }
      }
    }
    function So(e, t) {
      return !e.composing && (e.tagName === "OPTION" || Co(e, t) || $o(e, t));
    }
    function Co(e, t) {
      var n = true;
      try {
        n = document.activeElement !== e;
      } catch (e) {}
      return n && e.value !== t;
    }
    function $o(e, t) {
      var r = e.value;
      var i = e._vModifiers;
      if (n(i)) {
        if (i.number) {
          return p(r) !== p(t);
        }
        if (i.trim) {
          return r.trim() !== t.trim();
        }
      }
      return r !== t;
    }
    var To = { create: ko, update: ko };
    var Oo = w(function (e) {
      var t = {};
      var n = /;(?![^(]*\))/g;
      var r = /:(.+)/;
      e.split(n).forEach(function (e) {
        if (e) {
          var n = e.split(r);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      });
      return t;
    });
    function Mo(e) {
      var t = Lo(e.style);
      return e.staticStyle ? L(e.staticStyle, t) : t;
    }
    function Lo(e) {
      if (Array.isArray(e)) {
        return N(e);
      }
      if (typeof e === "string") {
        return Oo(e);
      }
      return e;
    }
    function No(e, t) {
      var n = {};
      var r;
      if (t) {
        var i = e;
        while (i.componentInstance) {
          i = i.componentInstance._vnode;
          if (i && i.data && (r = Mo(i.data))) {
            L(n, r);
          }
        }
      }
      if ((r = Mo(e.data))) {
        L(n, r);
      }
      var a = e;
      while ((a = a.parent)) {
        if (a.data && (r = Mo(a.data))) {
          L(n, r);
        }
      }
      return n;
    }
    var Eo = /^--/;
    var Io = /\s*!important$/;
    var Po = function (e, t, n) {
      if (Eo.test(t)) {
        e.style.setProperty(t, n);
      } else if (Io.test(n)) {
        e.style.setProperty(C(t), n.replace(Io, ""), "important");
      } else {
        var r = Ro(t);
        if (Array.isArray(n)) {
          for (var i = 0, a = n.length; i < a; i++) {
            e.style[r] = n[i];
          }
        } else {
          e.style[r] = n;
        }
      }
    };
    var Do = ["Webkit", "Moz", "ms"];
    var jo;
    var Ro = w(function (e) {
      jo = jo || document.createElement("div").style;
      e = A(e);
      if (e !== "filter" && e in jo) {
        return e;
      }
      var t = e.charAt(0).toUpperCase() + e.slice(1);
      for (var n = 0; n < Do.length; n++) {
        var r = Do[n] + t;
        if (r in jo) {
          return r;
        }
      }
    });
    function Fo(e, r) {
      var i = r.data;
      var a = e.data;
      if (t(i.staticStyle) && t(i.style) && t(a.staticStyle) && t(a.style)) {
        return;
      }
      var o, s;
      var l = r.elm;
      var u = a.staticStyle;
      var f = a.normalizedStyle || a.style || {};
      var c = u || f;
      var d = Lo(r.data.style) || {};
      r.data.normalizedStyle = n(d.__ob__) ? L({}, d) : d;
      var v = No(r, true);
      for (s in c) {
        if (t(v[s])) {
          Po(l, s, "");
        }
      }
      for (s in v) {
        o = v[s];
        if (o !== c[s]) {
          Po(l, s, o == null ? "" : o);
        }
      }
    }
    var Vo = { create: Fo, update: Fo };
    var Bo = /\s+/;
    function Ho(e, t) {
      if (!t || !(t = t.trim())) {
        return;
      }
      if (e.classList) {
        if (t.indexOf(" ") > -1) {
          t.split(Bo).forEach(function (t) {
            return e.classList.add(t);
          });
        } else {
          e.classList.add(t);
        }
      } else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        if (n.indexOf(" " + t + " ") < 0) {
          e.setAttribute("class", (n + t).trim());
        }
      }
    }
    function Uo(e, t) {
      if (!t || !(t = t.trim())) {
        return;
      }
      if (e.classList) {
        if (t.indexOf(" ") > -1) {
          t.split(Bo).forEach(function (t) {
            return e.classList.remove(t);
          });
        } else {
          e.classList.remove(t);
        }
        if (!e.classList.length) {
          e.removeAttribute("class");
        }
      } else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        var r = " " + t + " ";
        while (n.indexOf(r) >= 0) {
          n = n.replace(r, " ");
        }
        n = n.trim();
        if (n) {
          e.setAttribute("class", n);
        } else {
          e.removeAttribute("class");
        }
      }
    }
    function Ko(e) {
      if (!e) {
        return;
      }
      if (typeof e === "object") {
        var t = {};
        if (e.css !== false) {
          L(t, Wo(e.name || "v"));
        }
        L(t, e);
        return t;
      } else if (typeof e === "string") {
        return Wo(e);
      }
    }
    var Wo = w(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active",
      };
    });
    var qo = Z && !te;
    var zo = "transition";
    var Jo = "animation";
    var Go = "transition";
    var Zo = "transitionend";
    var Yo = "animation";
    var Xo = "animationend";
    if (qo) {
      if (
        window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined
      ) {
        Go = "WebkitTransition";
        Zo = "webkitTransitionEnd";
      }
      if (
        window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined
      ) {
        Yo = "WebkitAnimation";
        Xo = "webkitAnimationEnd";
      }
    }
    var Qo = Z
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
      : function (e) {
          return e();
        };
    function es(e) {
      Qo(function () {
        Qo(e);
      });
    }
    function ts(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      if (n.indexOf(t) < 0) {
        n.push(t);
        Ho(e, t);
      }
    }
    function ns(e, t) {
      if (e._transitionClasses) {
        y(e._transitionClasses, t);
      }
      Uo(e, t);
    }
    function rs(e, t, n) {
      var r = as(e, t);
      var i = r.type;
      var a = r.timeout;
      var o = r.propCount;
      if (!i) {
        return n();
      }
      var s = i === zo ? Zo : Xo;
      var l = 0;
      var u = function () {
        e.removeEventListener(s, f);
        n();
      };
      var f = function (t) {
        if (t.target === e) {
          if (++l >= o) {
            u();
          }
        }
      };
      setTimeout(function () {
        if (l < o) {
          u();
        }
      }, a + 1);
      e.addEventListener(s, f);
    }
    var is = /\b(transform|all)(,|$)/;
    function as(e, t) {
      var n = window.getComputedStyle(e);
      var r = (n[Go + "Delay"] || "").split(", ");
      var i = (n[Go + "Duration"] || "").split(", ");
      var a = os(r, i);
      var o = (n[Yo + "Delay"] || "").split(", ");
      var s = (n[Yo + "Duration"] || "").split(", ");
      var l = os(o, s);
      var u;
      var f = 0;
      var c = 0;
      if (t === zo) {
        if (a > 0) {
          u = zo;
          f = a;
          c = i.length;
        }
      } else if (t === Jo) {
        if (l > 0) {
          u = Jo;
          f = l;
          c = s.length;
        }
      } else {
        f = Math.max(a, l);
        u = f > 0 ? (a > l ? zo : Jo) : null;
        c = u ? (u === zo ? i.length : s.length) : 0;
      }
      var d = u === zo && is.test(n[Go + "Property"]);
      return { type: u, timeout: f, propCount: c, hasTransform: d };
    }
    function os(e, t) {
      while (e.length < t.length) {
        e = e.concat(e);
      }
      return Math.max.apply(
        null,
        t.map(function (t, n) {
          return ss(t) + ss(e[n]);
        })
      );
    }
    function ss(e) {
      return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
    }
    function ls(e, r) {
      var i = e.elm;
      if (n(i._leaveCb)) {
        i._leaveCb.cancelled = true;
        i._leaveCb();
      }
      var a = Ko(e.data.transition);
      if (t(a)) {
        return;
      }
      if (n(i._enterCb) || i.nodeType !== 1) {
        return;
      }
      var s = a.css;
      var l = a.type;
      var u = a.enterClass;
      var f = a.enterToClass;
      var c = a.enterActiveClass;
      var d = a.appearClass;
      var v = a.appearToClass;
      var h = a.appearActiveClass;
      var m = a.beforeEnter;
      var g = a.enter;
      var y = a.afterEnter;
      var _ = a.enterCancelled;
      var b = a.beforeAppear;
      var w = a.appear;
      var x = a.afterAppear;
      var A = a.appearCancelled;
      var k = a.duration;
      var S = fr;
      var C = fr.$vnode;
      while (C && C.parent) {
        S = C.context;
        C = C.parent;
      }
      var $ = !S._isMounted || !e.isRootInsert;
      if ($ && !w && w !== "") {
        return;
      }
      var T = $ && d ? d : u;
      var O = $ && h ? h : c;
      var M = $ && v ? v : f;
      var L = $ ? b || m : m;
      var N = $ ? (typeof w === "function" ? w : g) : g;
      var E = $ ? x || y : y;
      var I = $ ? A || _ : _;
      var P = p(o(k) ? k.enter : k);
      if (P != null) {
        fs(P, "enter", e);
      }
      var D = s !== false && !te;
      var j = ds(N);
      var R = (i._enterCb = F(function () {
        if (D) {
          ns(i, M);
          ns(i, O);
        }
        if (R.cancelled) {
          if (D) {
            ns(i, T);
          }
          I && I(i);
        } else {
          E && E(i);
        }
        i._enterCb = null;
      }));
      if (!e.data.show) {
        tn(e, "insert", function () {
          var t = i.parentNode;
          var n = t && t._pending && t._pending[e.key];
          if (n && n.tag === e.tag && n.elm._leaveCb) {
            n.elm._leaveCb();
          }
          N && N(i, R);
        });
      }
      L && L(i);
      if (D) {
        ts(i, T);
        ts(i, O);
        es(function () {
          ns(i, T);
          if (!R.cancelled) {
            ts(i, M);
            if (!j) {
              if (cs(P)) {
                setTimeout(R, P);
              } else {
                rs(i, l, R);
              }
            }
          }
        });
      }
      if (e.data.show) {
        r && r();
        N && N(i, R);
      }
      if (!D && !j) {
        R();
      }
    }
    function us(e, r) {
      var i = e.elm;
      if (n(i._enterCb)) {
        i._enterCb.cancelled = true;
        i._enterCb();
      }
      var a = Ko(e.data.transition);
      if (t(a) || i.nodeType !== 1) {
        return r();
      }
      if (n(i._leaveCb)) {
        return;
      }
      var s = a.css;
      var l = a.type;
      var u = a.leaveClass;
      var f = a.leaveToClass;
      var c = a.leaveActiveClass;
      var d = a.beforeLeave;
      var v = a.leave;
      var h = a.afterLeave;
      var m = a.leaveCancelled;
      var g = a.delayLeave;
      var y = a.duration;
      var _ = s !== false && !te;
      var b = ds(v);
      var w = p(o(y) ? y.leave : y);
      if (n(w)) {
        fs(w, "leave", e);
      }
      var x = (i._leaveCb = F(function () {
        if (i.parentNode && i.parentNode._pending) {
          i.parentNode._pending[e.key] = null;
        }
        if (_) {
          ns(i, f);
          ns(i, c);
        }
        if (x.cancelled) {
          if (_) {
            ns(i, u);
          }
          m && m(i);
        } else {
          r();
          h && h(i);
        }
        i._leaveCb = null;
      }));
      if (g) {
        g(A);
      } else {
        A();
      }
      function A() {
        if (x.cancelled) {
          return;
        }
        if (!e.data.show && i.parentNode) {
          (i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e;
        }
        d && d(i);
        if (_) {
          ts(i, u);
          ts(i, c);
          es(function () {
            ns(i, u);
            if (!x.cancelled) {
              ts(i, f);
              if (!b) {
                if (cs(w)) {
                  setTimeout(x, w);
                } else {
                  rs(i, l, x);
                }
              }
            }
          });
        }
        v && v(i, x);
        if (!_ && !b) {
          x();
        }
      }
    }
    function fs(e, t, n) {
      if (typeof e !== "number") {
        ge(
          "<transition> explicit " +
            t +
            " duration is not a valid number - " +
            "got " +
            JSON.stringify(e) +
            ".",
          n.context
        );
      } else if (isNaN(e)) {
        ge(
          "<transition> explicit " +
            t +
            " duration is NaN - " +
            "the duration expression might be incorrect.",
          n.context
        );
      }
    }
    function cs(e) {
      return typeof e === "number" && !isNaN(e);
    }
    function ds(e) {
      if (t(e)) {
        return false;
      }
      var r = e.fns;
      if (n(r)) {
        return ds(Array.isArray(r) ? r[0] : r);
      } else {
        return (e._length || e.length) > 1;
      }
    }
    function vs(e, t) {
      if (t.data.show !== true) {
        ls(t);
      }
    }
    var ps = Z
      ? {
          create: vs,
          activate: vs,
          remove: function e(t, n) {
            if (t.data.show !== true) {
              us(t, n);
            } else {
              n();
            }
          },
        }
      : {};
    var hs = [$a, Oa, xo, To, Vo, ps];
    var ms = hs.concat(Aa);
    var gs = ha({ nodeOps: sa, modules: ms });
    if (te) {
      document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        if (e && e.vmodel) {
          Ss(e, "input");
        }
      });
    }
    var ys = {
      inserted: function e(t, n, r, i) {
        if (r.tag === "select") {
          if (i.elm && !i.elm._vOptions) {
            tn(r, "postpatch", function () {
              ys.componentUpdated(t, n, r);
            });
          } else {
            _s(t, n, r.context);
          }
          t._vOptions = [].map.call(t.options, xs);
        } else if (r.tag === "textarea" || zi(t.type)) {
          t._vModifiers = n.modifiers;
          if (!n.modifiers.lazy) {
            t.addEventListener("compositionstart", As);
            t.addEventListener("compositionend", ks);
            t.addEventListener("change", ks);
            if (te) {
              t.vmodel = true;
            }
          }
        }
      },
      componentUpdated: function e(t, n, r) {
        if (r.tag === "select") {
          _s(t, n, r.context);
          var i = t._vOptions;
          var a = (t._vOptions = [].map.call(t.options, xs));
          if (
            a.some(function (e, t) {
              return !j(e, i[t]);
            })
          ) {
            var o = t.multiple
              ? n.value.some(function (e) {
                  return ws(e, a);
                })
              : n.value !== n.oldValue && ws(n.value, a);
            if (o) {
              Ss(t, "change");
            }
          }
        }
      },
    };
    function _s(e, t, n) {
      bs(e, t, n);
      if (ee || ne) {
        setTimeout(function () {
          bs(e, t, n);
        }, 0);
      }
    }
    function bs(e, t, n) {
      var r = t.value;
      var i = e.multiple;
      if (i && !Array.isArray(r)) {
        ge(
          '<select multiple v-model="' +
            t.expression +
            '"> ' +
            "expects an Array value for its binding, but got " +
            Object.prototype.toString.call(r).slice(8, -1),
          n
        );
        return;
      }
      var a, o;
      for (var s = 0, l = e.options.length; s < l; s++) {
        o = e.options[s];
        if (i) {
          a = R(r, xs(o)) > -1;
          if (o.selected !== a) {
            o.selected = a;
          }
        } else {
          if (j(xs(o), r)) {
            if (e.selectedIndex !== s) {
              e.selectedIndex = s;
            }
            return;
          }
        }
      }
      if (!i) {
        e.selectedIndex = -1;
      }
    }
    function ws(e, t) {
      return t.every(function (t) {
        return !j(t, e);
      });
    }
    function xs(e) {
      return "_value" in e ? e._value : e.value;
    }
    function As(e) {
      e.target.composing = true;
    }
    function ks(e) {
      if (!e.target.composing) {
        return;
      }
      e.target.composing = false;
      Ss(e.target, "input");
    }
    function Ss(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, true, true);
      e.dispatchEvent(n);
    }
    function Cs(e) {
      return e.componentInstance && (!e.data || !e.data.transition)
        ? Cs(e.componentInstance._vnode)
        : e;
    }
    var $s = {
      bind: function e(t, n, r) {
        var i = n.value;
        r = Cs(r);
        var a = r.data && r.data.transition;
        var o = (t.__vOriginalDisplay =
          t.style.display === "none" ? "" : t.style.display);
        if (i && a) {
          r.data.show = true;
          ls(r, function () {
            t.style.display = o;
          });
        } else {
          t.style.display = i ? o : "none";
        }
      },
      update: function e(t, n, r) {
        var i = n.value;
        var a = n.oldValue;
        if (!i === !a) {
          return;
        }
        r = Cs(r);
        var o = r.data && r.data.transition;
        if (o) {
          r.data.show = true;
          if (i) {
            ls(r, function () {
              t.style.display = t.__vOriginalDisplay;
            });
          } else {
            us(r, function () {
              t.style.display = "none";
            });
          }
        } else {
          t.style.display = i ? t.__vOriginalDisplay : "none";
        }
      },
      unbind: function e(t, n, r, i, a) {
        if (!a) {
          t.style.display = t.__vOriginalDisplay;
        }
      },
    };
    var Ts = { model: ys, show: $s };
    var Os = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object],
    };
    function Ms(e) {
      var t = e && e.componentOptions;
      if (t && t.Ctor.options.abstract) {
        return Ms(nr(t.children));
      } else {
        return e;
      }
    }
    function Ls(e) {
      var t = {};
      var n = e.$options;
      for (var r in n.propsData) {
        t[r] = e[r];
      }
      var i = n._parentListeners;
      for (var a in i) {
        t[A(a)] = i[a];
      }
      return t;
    }
    function Ns(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) {
        return e("keep-alive", { props: t.componentOptions.propsData });
      }
    }
    function Es(e) {
      while ((e = e.parent)) {
        if (e.data.transition) {
          return true;
        }
      }
    }
    function Is(e, t) {
      return t.key === e.key && t.tag === e.tag;
    }
    var Ps = function (e) {
      return e.tag || pn(e);
    };
    var Ds = function (e) {
      return e.name === "show";
    };
    var js = {
      name: "transition",
      props: Os,
      abstract: true,
      render: function e(t) {
        var n = this;
        var r = this.$slots.default;
        if (!r) {
          return;
        }
        r = r.filter(Ps);
        if (!r.length) {
          return;
        }
        if (r.length > 1) {
          ge(
            "<transition> can only be used on a single element. Use " +
              "<transition-group> for lists.",
            this.$parent
          );
        }
        var i = this.mode;
        if (i && i !== "in-out" && i !== "out-in") {
          ge("invalid <transition> mode: " + i, this.$parent);
        }
        var o = r[0];
        if (Es(this.$vnode)) {
          return o;
        }
        var s = Ms(o);
        if (!s) {
          return o;
        }
        if (this._leaving) {
          return Ns(t, o);
        }
        var l = "__transition-" + this._uid + "-";
        s.key =
          s.key == null
            ? s.isComment
              ? l + "comment"
              : l + s.tag
            : a(s.key)
            ? String(s.key).indexOf(l) === 0
              ? s.key
              : l + s.key
            : s.key;
        var u = ((s.data || (s.data = {})).transition = Ls(this));
        var f = this._vnode;
        var c = Ms(f);
        if (s.data.directives && s.data.directives.some(Ds)) {
          s.data.show = true;
        }
        if (
          c &&
          c.data &&
          !Is(s, c) &&
          !pn(c) &&
          !(c.componentInstance && c.componentInstance._vnode.isComment)
        ) {
          var d = (c.data.transition = L({}, u));
          if (i === "out-in") {
            this._leaving = true;
            tn(d, "afterLeave", function () {
              n._leaving = false;
              n.$forceUpdate();
            });
            return Ns(t, o);
          } else if (i === "in-out") {
            if (pn(s)) {
              return f;
            }
            var v;
            var p = function () {
              v();
            };
            tn(u, "afterEnter", p);
            tn(u, "enterCancelled", p);
            tn(d, "delayLeave", function (e) {
              v = e;
            });
          }
        }
        return o;
      },
    };
    var Rs = L({ tag: String, moveClass: String }, Os);
    delete Rs.mode;
    var Fs = {
      props: Rs,
      beforeMount: function e() {
        var t = this;
        var n = this._update;
        this._update = function (e, r) {
          var i = dr(t);
          t.__patch__(t._vnode, t.kept, false, true);
          t._vnode = t.kept;
          i();
          n.call(t, e, r);
        };
      },
      render: function e(t) {
        var n = this.tag || this.$vnode.data.tag || "span";
        var r = Object.create(null);
        var i = (this.prevChildren = this.children);
        var a = this.$slots.default || [];
        var o = (this.children = []);
        var s = Ls(this);
        for (var l = 0; l < a.length; l++) {
          var u = a[l];
          if (u.tag) {
            if (u.key != null && String(u.key).indexOf("__vlist") !== 0) {
              o.push(u);
              r[u.key] = u;
              (u.data || (u.data = {})).transition = s;
            } else {
              var f = u.componentOptions;
              var c = f ? f.Ctor.options.name || f.tag || "" : u.tag;
              ge("<transition-group> children must be keyed: <" + c + ">");
            }
          }
        }
        if (i) {
          var d = [];
          var v = [];
          for (var p = 0; p < i.length; p++) {
            var h = i[p];
            h.data.transition = s;
            h.data.pos = h.elm.getBoundingClientRect();
            if (r[h.key]) {
              d.push(h);
            } else {
              v.push(h);
            }
          }
          this.kept = t(n, null, d);
          this.removed = v;
        }
        return t(n, null, o);
      },
      updated: function e() {
        var t = this.prevChildren;
        var n = this.moveClass || (this.name || "v") + "-move";
        if (!t.length || !this.hasMove(t[0].elm, n)) {
          return;
        }
        t.forEach(Vs);
        t.forEach(Bs);
        t.forEach(Hs);
        this._reflow = document.body.offsetHeight;
        t.forEach(function (e) {
          if (e.data.moved) {
            var t = e.elm;
            var r = t.style;
            ts(t, n);
            r.transform = r.WebkitTransform = r.transitionDuration = "";
            t.addEventListener(
              Zo,
              (t._moveCb = function e(r) {
                if (r && r.target !== t) {
                  return;
                }
                if (!r || /transform$/.test(r.propertyName)) {
                  t.removeEventListener(Zo, e);
                  t._moveCb = null;
                  ns(t, n);
                }
              })
            );
          }
        });
      },
      methods: {
        hasMove: function e(t, n) {
          if (!qo) {
            return false;
          }
          if (this._hasMove) {
            return this._hasMove;
          }
          var r = t.cloneNode();
          if (t._transitionClasses) {
            t._transitionClasses.forEach(function (e) {
              Uo(r, e);
            });
          }
          Ho(r, n);
          r.style.display = "none";
          this.$el.appendChild(r);
          var i = as(r);
          this.$el.removeChild(r);
          return (this._hasMove = i.hasTransform);
        },
      },
    };
    function Vs(e) {
      if (e.elm._moveCb) {
        e.elm._moveCb();
      }
      if (e.elm._enterCb) {
        e.elm._enterCb();
      }
    }
    function Bs(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }
    function Hs(e) {
      var t = e.data.pos;
      var n = e.data.newPos;
      var r = t.left - n.left;
      var i = t.top - n.top;
      if (r || i) {
        e.data.moved = true;
        var a = e.elm.style;
        a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)";
        a.transitionDuration = "0s";
      }
    }
    var Us = { Transition: js, TransitionGroup: Fs };
    oi.config.mustUseProp = Ai;
    oi.config.isReservedTag = Ui;
    oi.config.isReservedAttr = wi;
    oi.config.getTagNamespace = Ki;
    oi.config.isUnknownElement = qi;
    L(oi.options.directives, Ts);
    L(oi.options.components, Us);
    oi.prototype.__patch__ = Z ? gs : E;
    oi.prototype.$mount = function (e, t) {
      e = e && Z ? Ji(e) : undefined;
      return hr(this, e, t);
    };
    if (Z) {
      setTimeout(function () {
        if (U.devtools) {
          if (ve) {
            ve.emit("init", oi);
          } else {
            console[console.info ? "info" : "log"](
              "Download the Vue Devtools extension for a better development experience:\n" +
                "https://github.com/vuejs/vue-devtools"
            );
          }
        }
        if (U.productionTip !== false && typeof console !== "undefined") {
          console[console.info ? "info" : "log"](
            "You are running Vue in development mode.\n" +
              "Make sure to turn on production mode when deploying for production.\n" +
              "See more tips at https://vuejs.org/guide/deployment.html"
          );
        }
      }, 0);
    }
    var Ks = /\{\{((?:.|\r?\n)+?)\}\}/g;
    var Ws = /[-.*+?^${}()|[\]\/\\]/g;
    var qs = w(function (e) {
      var t = e[0].replace(Ws, "\\$&");
      var n = e[1].replace(Ws, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    });
    function zs(e, t) {
      var n = t ? qs(t) : Ks;
      if (!n.test(e)) {
        return;
      }
      var r = [];
      var i = [];
      var a = (n.lastIndex = 0);
      var o, s, l;
      while ((o = n.exec(e))) {
        s = o.index;
        if (s > a) {
          i.push((l = e.slice(a, s)));
          r.push(JSON.stringify(l));
        }
        var u = La(o[1].trim());
        r.push("_s(" + u + ")");
        i.push({ "@binding": u });
        a = s + o[0].length;
      }
      if (a < e.length) {
        i.push((l = e.slice(a)));
        r.push(JSON.stringify(l));
      }
      return { expression: r.join("+"), tokens: i };
    }
    function Js(e, t) {
      var n = t.warn || Ea;
      var r = Ua(e, "class");
      if (r) {
        var i = zs(r, t.delimiters);
        if (i) {
          n(
            'class="' +
              r +
              '": ' +
              "Interpolation inside attributes has been removed. " +
              "Use v-bind or the colon shorthand instead. For example, " +
              'instead of <div class="{{ val }}">, use <div :class="val">.',
            e.rawAttrsMap["class"]
          );
        }
      }
      if (r) {
        e.staticClass = JSON.stringify(r);
      }
      var a = Ha(e, "class", false);
      if (a) {
        e.classBinding = a;
      }
    }
    function Gs(e) {
      var t = "";
      if (e.staticClass) {
        t += "staticClass:" + e.staticClass + ",";
      }
      if (e.classBinding) {
        t += "class:" + e.classBinding + ",";
      }
      return t;
    }
    var Zs = { staticKeys: ["staticClass"], transformNode: Js, genData: Gs };
    function Ys(e, t) {
      var n = t.warn || Ea;
      var r = Ua(e, "style");
      if (r) {
        {
          var i = zs(r, t.delimiters);
          if (i) {
            n(
              'style="' +
                r +
                '": ' +
                "Interpolation inside attributes has been removed. " +
                "Use v-bind or the colon shorthand instead. For example, " +
                'instead of <div style="{{ val }}">, use <div :style="val">.',
              e.rawAttrsMap["style"]
            );
          }
        }
        e.staticStyle = JSON.stringify(Oo(r));
      }
      var a = Ha(e, "style", false);
      if (a) {
        e.styleBinding = a;
      }
    }
    function Xs(e) {
      var t = "";
      if (e.staticStyle) {
        t += "staticStyle:" + e.staticStyle + ",";
      }
      if (e.styleBinding) {
        t += "style:(" + e.styleBinding + "),";
      }
      return t;
    }
    var Qs = { staticKeys: ["staticStyle"], transformNode: Ys, genData: Xs };
    var el;
    var tl = {
      decode: function e(t) {
        el = el || document.createElement("div");
        el.innerHTML = t;
        return el.textContent;
      },
    };
    var nl = h(
      "area,base,br,col,embed,frame,hr,img,input,isindex,keygen," +
        "link,meta,param,source,track,wbr"
    );
    var rl = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
    var il = h(
      "address,article,aside,base,blockquote,body,caption,col,colgroup,dd," +
        "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," +
        "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," +
        "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," +
        "title,tr,track"
    );
    var al =
      /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    var ol =
      /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    var sl = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + K.source + "]*";
    var ll = "((?:" + sl + "\\:)?" + sl + ")";
    var ul = new RegExp("^<" + ll);
    var fl = /^\s*(\/?)>/;
    var cl = new RegExp("^<\\/" + ll + "[^>]*>");
    var dl = /^<!DOCTYPE [^>]+>/i;
    var vl = /^<!\--/;
    var pl = /^<!\[/;
    var hl = h("script,style,textarea", true);
    var ml = {};
    var gl = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'",
    };
    var yl = /&(?:lt|gt|quot|amp|#39);/g;
    var _l = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
    var bl = h("pre,textarea", true);
    var wl = function (e, t) {
      return e && bl(e) && t[0] === "\n";
    };
    function xl(e, t) {
      var n = t ? _l : yl;
      return e.replace(n, function (e) {
        return gl[e];
      });
    }
    function Al(e, t) {
      var n = [];
      var r = t.expectHTML;
      var i = t.isUnaryTag || I;
      var a = t.canBeLeftOpenTag || I;
      var o = 0;
      var s, l;
      while (e) {
        s = e;
        if (!l || !hl(l)) {
          var u = e.indexOf("<");
          if (u === 0) {
            if (vl.test(e)) {
              var f = e.indexOf("--\x3e");
              if (f >= 0) {
                if (t.shouldKeepComment) {
                  t.comment(e.substring(4, f), o, o + f + 3);
                }
                A(f + 3);
                continue;
              }
            }
            if (pl.test(e)) {
              var c = e.indexOf("]>");
              if (c >= 0) {
                A(c + 2);
                continue;
              }
            }
            var d = e.match(dl);
            if (d) {
              A(d[0].length);
              continue;
            }
            var v = e.match(cl);
            if (v) {
              var p = o;
              A(v[0].length);
              C(v[1], p, o);
              continue;
            }
            var h = k();
            if (h) {
              S(h);
              if (wl(h.tagName, e)) {
                A(1);
              }
              continue;
            }
          }
          var m = void 0,
            g = void 0,
            y = void 0;
          if (u >= 0) {
            g = e.slice(u);
            while (!cl.test(g) && !ul.test(g) && !vl.test(g) && !pl.test(g)) {
              y = g.indexOf("<", 1);
              if (y < 0) {
                break;
              }
              u += y;
              g = e.slice(u);
            }
            m = e.substring(0, u);
          }
          if (u < 0) {
            m = e;
          }
          if (m) {
            A(m.length);
          }
          if (t.chars && m) {
            t.chars(m, o - m.length, o);
          }
        } else {
          var _ = 0;
          var b = l.toLowerCase();
          var w =
            ml[b] ||
            (ml[b] = new RegExp("([\\s\\S]*?)(</" + b + "[^>]*>)", "i"));
          var x = e.replace(w, function (e, n, r) {
            _ = r.length;
            if (!hl(b) && b !== "noscript") {
              n = n
                .replace(/<!\--([\s\S]*?)-->/g, "$1")
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
            }
            if (wl(b, n)) {
              n = n.slice(1);
            }
            if (t.chars) {
              t.chars(n);
            }
            return "";
          });
          o += e.length - x.length;
          e = x;
          C(b, o - _, o);
        }
        if (e === s) {
          t.chars && t.chars(e);
          if (!n.length && t.warn) {
            t.warn('Mal-formatted tag at end of template: "' + e + '"', {
              start: o + e.length,
            });
          }
          break;
        }
      }
      C();
      function A(t) {
        o += t;
        e = e.substring(t);
      }
      function k() {
        var t = e.match(ul);
        if (t) {
          var n = { tagName: t[1], attrs: [], start: o };
          A(t[0].length);
          var r, i;
          while (!(r = e.match(fl)) && (i = e.match(ol) || e.match(al))) {
            i.start = o;
            A(i[0].length);
            i.end = o;
            n.attrs.push(i);
          }
          if (r) {
            n.unarySlash = r[1];
            A(r[0].length);
            n.end = o;
            return n;
          }
        }
      }
      function S(e) {
        var o = e.tagName;
        var s = e.unarySlash;
        if (r) {
          if (l === "p" && il(o)) {
            C(l);
          }
          if (a(o) && l === o) {
            C(o);
          }
        }
        var u = i(o) || !!s;
        var f = e.attrs.length;
        var c = new Array(f);
        for (var d = 0; d < f; d++) {
          var v = e.attrs[d];
          var p = v[3] || v[4] || v[5] || "";
          var h =
            o === "a" && v[1] === "href"
              ? t.shouldDecodeNewlinesForHref
              : t.shouldDecodeNewlines;
          c[d] = { name: v[1], value: xl(p, h) };
          if (t.outputSourceRange) {
            c[d].start = v.start + v[0].match(/^\s*/).length;
            c[d].end = v.end;
          }
        }
        if (!u) {
          n.push({
            tag: o,
            lowerCasedTag: o.toLowerCase(),
            attrs: c,
            start: e.start,
            end: e.end,
          });
          l = o;
        }
        if (t.start) {
          t.start(o, c, u, e.start, e.end);
        }
      }
      function C(e, r, i) {
        var a, s;
        if (r == null) {
          r = o;
        }
        if (i == null) {
          i = o;
        }
        if (e) {
          s = e.toLowerCase();
          for (a = n.length - 1; a >= 0; a--) {
            if (n[a].lowerCasedTag === s) {
              break;
            }
          }
        } else {
          a = 0;
        }
        if (a >= 0) {
          for (var u = n.length - 1; u >= a; u--) {
            if (u > a || (!e && t.warn)) {
              t.warn("tag <" + n[u].tag + "> has no matching end tag.", {
                start: n[u].start,
                end: n[u].end,
              });
            }
            if (t.end) {
              t.end(n[u].tag, r, i);
            }
          }
          n.length = a;
          l = a && n[a - 1].tag;
        } else if (s === "br") {
          if (t.start) {
            t.start(e, [], true, r, i);
          }
        } else if (s === "p") {
          if (t.start) {
            t.start(e, [], false, r, i);
          }
          if (t.end) {
            t.end(e, r, i);
          }
        }
      }
    }
    var kl = /^@|^v-on:/;
    var Sl = /^v-|^@|^:|^#/;
    var Cl = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    var $l = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    var Tl = /^\(|\)$/g;
    var Ol = /^\[.*\]$/;
    var Ml = /:(.*)$/;
    var Ll = /^:|^\.|^v-bind:/;
    var Nl = /\.[^.\]]+(?=[^\]]*$)/g;
    var El = /^v-slot(:|$)|^#/;
    var Il = /[\r\n]/;
    var Pl = /[ \f\t\r\n]+/g;
    var Dl = /[\s"'<>\/=]/;
    var jl = w(tl.decode);
    var Rl = "_empty_";
    var Fl;
    var Vl;
    var Bl;
    var Hl;
    var Ul;
    var Kl;
    var Wl;
    var ql;
    var zl;
    function Jl(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: hu(t),
        rawAttrsMap: {},
        parent: n,
        children: [],
      };
    }
    function Gl(e, t) {
      Fl = t.warn || Ea;
      Kl = t.isPreTag || I;
      Wl = t.mustUseProp || I;
      ql = t.getTagNamespace || I;
      var n = t.isReservedTag || I;
      zl = function (e) {
        return !!(
          e.component ||
          e.attrsMap[":is"] ||
          e.attrsMap["v-bind:is"] ||
          !(e.attrsMap.is ? n(e.attrsMap.is) : n(e.tag))
        );
      };
      Bl = Ia(t.modules, "transformNode");
      Hl = Ia(t.modules, "preTransformNode");
      Ul = Ia(t.modules, "postTransformNode");
      Vl = t.delimiters;
      var r = [];
      var i = t.preserveWhitespace !== false;
      var a = t.whitespace;
      var o;
      var s;
      var l = false;
      var u = false;
      var f = false;
      function c(e, t) {
        if (!f) {
          f = true;
          Fl(e, t);
        }
      }
      function d(e) {
        v(e);
        if (!l && !e.processed) {
          e = Xl(e, t);
        }
        if (!r.length && e !== o) {
          if (o.if && (e.elseif || e.else)) {
            {
              p(e);
            }
            ou(o, { exp: e.elseif, block: e });
          } else {
            c(
              "Component template should contain exactly one root element. " +
                "If you are using v-if on multiple elements, " +
                "use v-else-if to chain them instead.",
              { start: e.start }
            );
          }
        }
        if (s && !e.forbidden) {
          if (e.elseif || e.else) {
            iu(e, s);
          } else {
            if (e.slotScope) {
              var n = e.slotTarget || '"default"';
              (s.scopedSlots || (s.scopedSlots = {}))[n] = e;
            }
            s.children.push(e);
            e.parent = s;
          }
        }
        e.children = e.children.filter(function (e) {
          return !e.slotScope;
        });
        v(e);
        if (e.pre) {
          l = false;
        }
        if (Kl(e.tag)) {
          u = false;
        }
        for (var i = 0; i < Ul.length; i++) {
          Ul[i](e, t);
        }
      }
      function v(e) {
        if (!u) {
          var t;
          while (
            (t = e.children[e.children.length - 1]) &&
            t.type === 3 &&
            t.text === " "
          ) {
            e.children.pop();
          }
        }
      }
      function p(e) {
        if (e.tag === "slot" || e.tag === "template") {
          c(
            "Cannot use <" +
              e.tag +
              "> as component root element because it may " +
              "contain multiple nodes.",
            { start: e.start }
          );
        }
        if (e.attrsMap.hasOwnProperty("v-for")) {
          c(
            "Cannot use v-for on stateful component root element because " +
              "it renders multiple elements.",
            e.rawAttrsMap["v-for"]
          );
        }
      }
      Al(e, {
        warn: Fl,
        expectHTML: t.expectHTML,
        isUnaryTag: t.isUnaryTag,
        canBeLeftOpenTag: t.canBeLeftOpenTag,
        shouldDecodeNewlines: t.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
        shouldKeepComment: t.comments,
        outputSourceRange: t.outputSourceRange,
        start: function e(n, i, a, f, c) {
          var v = (s && s.ns) || ql(n);
          if (ee && v === "svg") {
            i = bu(i);
          }
          var h = Jl(n, i, s);
          if (v) {
            h.ns = v;
          }
          {
            if (t.outputSourceRange) {
              h.start = f;
              h.end = c;
              h.rawAttrsMap = h.attrsList.reduce(function (e, t) {
                e[t.name] = t;
                return e;
              }, {});
            }
            i.forEach(function (e) {
              if (Dl.test(e.name)) {
                Fl(
                  "Invalid dynamic argument expression: attribute names cannot contain " +
                    "spaces, quotes, <, >, / or =.",
                  {
                    start: e.start + e.name.indexOf("["),
                    end: e.start + e.name.length,
                  }
                );
              }
            });
          }
          if (gu(h) && !de()) {
            h.forbidden = true;
            Fl(
              "Templates should only be responsible for mapping the state to the " +
                "UI. Avoid placing tags with side-effects in your templates, such as " +
                "<" +
                n +
                ">" +
                ", as they will not be parsed.",
              { start: h.start }
            );
          }
          for (var m = 0; m < Hl.length; m++) {
            h = Hl[m](h, t) || h;
          }
          if (!l) {
            Zl(h);
            if (h.pre) {
              l = true;
            }
          }
          if (Kl(h.tag)) {
            u = true;
          }
          if (l) {
            Yl(h);
          } else if (!h.processed) {
            tu(h);
            ru(h);
            su(h);
          }
          if (!o) {
            o = h;
            {
              p(o);
            }
          }
          if (!a) {
            s = h;
            r.push(h);
          } else {
            d(h);
          }
        },
        end: function e(n, i, a) {
          var o = r[r.length - 1];
          r.length -= 1;
          s = r[r.length - 1];
          if (t.outputSourceRange) {
            o.end = a;
          }
          d(o);
        },
        chars: function n(r, o, f) {
          if (!s) {
            {
              if (r === e) {
                c(
                  "Component template requires a root element, rather than just text.",
                  { start: o }
                );
              } else if ((r = r.trim())) {
                c('text "' + r + '" outside root element will be ignored.', {
                  start: o,
                });
              }
            }
            return;
          }
          if (ee && s.tag === "textarea" && s.attrsMap.placeholder === r) {
            return;
          }
          var d = s.children;
          if (u || r.trim()) {
            r = mu(s) ? r : jl(r);
          } else if (!d.length) {
            r = "";
          } else if (a) {
            if (a === "condense") {
              r = Il.test(r) ? "" : " ";
            } else {
              r = " ";
            }
          } else {
            r = i ? " " : "";
          }
          if (r) {
            if (!u && a === "condense") {
              r = r.replace(Pl, " ");
            }
            var v;
            var p;
            if (!l && r !== " " && (v = zs(r, Vl))) {
              p = {
                type: 2,
                expression: v.expression,
                tokens: v.tokens,
                text: r,
              };
            } else if (r !== " " || !d.length || d[d.length - 1].text !== " ") {
              p = { type: 3, text: r };
            }
            if (p) {
              if (t.outputSourceRange) {
                p.start = o;
                p.end = f;
              }
              d.push(p);
            }
          }
        },
        comment: function e(n, r, i) {
          if (s) {
            var a = { type: 3, text: n, isComment: true };
            if (t.outputSourceRange) {
              a.start = r;
              a.end = i;
            }
            s.children.push(a);
          }
        },
      });
      return o;
    }
    function Zl(e) {
      if (Ua(e, "v-pre") != null) {
        e.pre = true;
      }
    }
    function Yl(e) {
      var t = e.attrsList;
      var n = t.length;
      if (n) {
        var r = (e.attrs = new Array(n));
        for (var i = 0; i < n; i++) {
          r[i] = { name: t[i].name, value: JSON.stringify(t[i].value) };
          if (t[i].start != null) {
            r[i].start = t[i].start;
            r[i].end = t[i].end;
          }
        }
      } else if (!e.pre) {
        e.plain = true;
      }
    }
    function Xl(e, t) {
      Ql(e);
      e.plain = !e.key && !e.scopedSlots && !e.attrsList.length;
      eu(e);
      lu(e);
      fu(e);
      cu(e);
      for (var n = 0; n < Bl.length; n++) {
        e = Bl[n](e, t) || e;
      }
      du(e);
      return e;
    }
    function Ql(e) {
      var t = Ha(e, "key");
      if (t) {
        {
          if (e.tag === "template") {
            Fl(
              "<template> cannot be keyed. Place the key on real elements instead.",
              Ba(e, "key")
            );
          }
          if (e.for) {
            var n = e.iterator2 || e.iterator1;
            var r = e.parent;
            if (n && n === t && r && r.tag === "transition-group") {
              Fl(
                "Do not use v-for index as key on <transition-group> children, " +
                  "this is the same as not using keys.",
                Ba(e, "key"),
                true
              );
            }
          }
        }
        e.key = t;
      }
    }
    function eu(e) {
      var t = Ha(e, "ref");
      if (t) {
        e.ref = t;
        e.refInFor = vu(e);
      }
    }
    function tu(e) {
      var t;
      if ((t = Ua(e, "v-for"))) {
        var n = nu(t);
        if (n) {
          L(e, n);
        } else {
          Fl("Invalid v-for expression: " + t, e.rawAttrsMap["v-for"]);
        }
      }
    }
    function nu(e) {
      var t = e.match(Cl);
      if (!t) {
        return;
      }
      var n = {};
      n.for = t[2].trim();
      var r = t[1].trim().replace(Tl, "");
      var i = r.match($l);
      if (i) {
        n.alias = r.replace($l, "").trim();
        n.iterator1 = i[1].trim();
        if (i[2]) {
          n.iterator2 = i[2].trim();
        }
      } else {
        n.alias = r;
      }
      return n;
    }
    function ru(e) {
      var t = Ua(e, "v-if");
      if (t) {
        e.if = t;
        ou(e, { exp: t, block: e });
      } else {
        if (Ua(e, "v-else") != null) {
          e.else = true;
        }
        var n = Ua(e, "v-else-if");
        if (n) {
          e.elseif = n;
        }
      }
    }
    function iu(e, t) {
      var n = au(t.children);
      if (n && n.if) {
        ou(n, { exp: e.elseif, block: e });
      } else {
        Fl(
          "v-" +
            (e.elseif ? 'else-if="' + e.elseif + '"' : "else") +
            " " +
            "used on element <" +
            e.tag +
            "> without corresponding v-if.",
          e.rawAttrsMap[e.elseif ? "v-else-if" : "v-else"]
        );
      }
    }
    function au(e) {
      var t = e.length;
      while (t--) {
        if (e[t].type === 1) {
          return e[t];
        } else {
          if (e[t].text !== " ") {
            Fl(
              'text "' +
                e[t].text.trim() +
                '" between v-if and v-else(-if) ' +
                "will be ignored.",
              e[t]
            );
          }
          e.pop();
        }
      }
    }
    function ou(e, t) {
      if (!e.ifConditions) {
        e.ifConditions = [];
      }
      e.ifConditions.push(t);
    }
    function su(e) {
      var t = Ua(e, "v-once");
      if (t != null) {
        e.once = true;
      }
    }
    function lu(e) {
      var t;
      if (e.tag === "template") {
        t = Ua(e, "scope");
        if (t) {
          Fl(
            'the "scope" attribute for scoped slots have been deprecated and ' +
              'replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ' +
              "can also be used on plain elements in addition to <template> to " +
              "denote scoped slots.",
            e.rawAttrsMap["scope"],
            true
          );
        }
        e.slotScope = t || Ua(e, "slot-scope");
      } else if ((t = Ua(e, "slot-scope"))) {
        if (e.attrsMap["v-for"]) {
          Fl(
            "Ambiguous combined usage of slot-scope and v-for on <" +
              e.tag +
              "> " +
              "(v-for takes higher priority). Use a wrapper <template> for the " +
              "scoped slot to make it clearer.",
            e.rawAttrsMap["slot-scope"],
            true
          );
        }
        e.slotScope = t;
      }
      var n = Ha(e, "slot");
      if (n) {
        e.slotTarget = n === '""' ? '"default"' : n;
        e.slotTargetDynamic = !!(
          e.attrsMap[":slot"] || e.attrsMap["v-bind:slot"]
        );
        if (e.tag !== "template" && !e.slotScope) {
          Da(e, "slot", n, Ba(e, "slot"));
        }
      }
      {
        if (e.tag === "template") {
          var r = Ka(e, El);
          if (r) {
            {
              if (e.slotTarget || e.slotScope) {
                Fl("Unexpected mixed usage of different slot syntaxes.", e);
              }
              if (e.parent && !zl(e.parent)) {
                Fl(
                  "<template v-slot> can only appear at the root level inside " +
                    "the receiving component",
                  e
                );
              }
            }
            var i = uu(r);
            var a = i.name;
            var o = i.dynamic;
            e.slotTarget = a;
            e.slotTargetDynamic = o;
            e.slotScope = r.value || Rl;
          }
        } else {
          var s = Ka(e, El);
          if (s) {
            {
              if (!zl(e)) {
                Fl("v-slot can only be used on components or <template>.", s);
              }
              if (e.slotScope || e.slotTarget) {
                Fl("Unexpected mixed usage of different slot syntaxes.", e);
              }
              if (e.scopedSlots) {
                Fl(
                  "To avoid scope ambiguity, the default slot should also use " +
                    "<template> syntax when there are other named slots.",
                  s
                );
              }
            }
            var l = e.scopedSlots || (e.scopedSlots = {});
            var u = uu(s);
            var f = u.name;
            var c = u.dynamic;
            var d = (l[f] = Jl("template", [], e));
            d.slotTarget = f;
            d.slotTargetDynamic = c;
            d.children = e.children.filter(function (e) {
              if (!e.slotScope) {
                e.parent = d;
                return true;
              }
            });
            d.slotScope = s.value || Rl;
            e.children = [];
            e.plain = false;
          }
        }
      }
    }
    function uu(e) {
      var t = e.name.replace(El, "");
      if (!t) {
        if (e.name[0] !== "#") {
          t = "default";
        } else {
          Fl("v-slot shorthand syntax requires a slot name.", e);
        }
      }
      return Ol.test(t)
        ? { name: t.slice(1, -1), dynamic: true }
        : { name: '"' + t + '"', dynamic: false };
    }
    function fu(e) {
      if (e.tag === "slot") {
        e.slotName = Ha(e, "name");
        if (e.key) {
          Fl(
            "`key` does not work on <slot> because slots are abstract outlets " +
              "and can possibly expand into multiple elements. " +
              "Use the key on a wrapping element instead.",
            Ba(e, "key")
          );
        }
      }
    }
    function cu(e) {
      var t;
      if ((t = Ha(e, "is"))) {
        e.component = t;
      }
      if (Ua(e, "inline-template") != null) {
        e.inlineTemplate = true;
      }
    }
    function du(e) {
      var t = e.attrsList;
      var n, r, i, a, o, s, l, u;
      for (n = 0, r = t.length; n < r; n++) {
        i = a = t[n].name;
        o = t[n].value;
        if (Sl.test(i)) {
          e.hasBindings = true;
          s = pu(i.replace(Sl, ""));
          if (s) {
            i = i.replace(Nl, "");
          }
          if (Ll.test(i)) {
            i = i.replace(Ll, "");
            o = La(o);
            u = Ol.test(i);
            if (u) {
              i = i.slice(1, -1);
            }
            if (o.trim().length === 0) {
              Fl(
                'The value for a v-bind expression cannot be empty. Found in "v-bind:' +
                  i +
                  '"'
              );
            }
            if (s) {
              if (s.prop && !u) {
                i = A(i);
                if (i === "innerHtml") {
                  i = "innerHTML";
                }
              }
              if (s.camel && !u) {
                i = A(i);
              }
              if (s.sync) {
                l = za(o, "$event");
                if (!u) {
                  Va(e, "update:" + A(i), l, null, false, Fl, t[n]);
                  if (C(i) !== A(i)) {
                    Va(e, "update:" + C(i), l, null, false, Fl, t[n]);
                  }
                } else {
                  Va(
                    e,
                    '"update:"+(' + i + ")",
                    l,
                    null,
                    false,
                    Fl,
                    t[n],
                    true
                  );
                }
              }
            }
            if (
              (s && s.prop) ||
              (!e.component && Wl(e.tag, e.attrsMap.type, i))
            ) {
              Pa(e, i, o, t[n], u);
            } else {
              Da(e, i, o, t[n], u);
            }
          } else if (kl.test(i)) {
            i = i.replace(kl, "");
            u = Ol.test(i);
            if (u) {
              i = i.slice(1, -1);
            }
            Va(e, i, o, s, false, Fl, t[n], u);
          } else {
            i = i.replace(Sl, "");
            var f = i.match(Ml);
            var c = f && f[1];
            u = false;
            if (c) {
              i = i.slice(0, -(c.length + 1));
              if (Ol.test(c)) {
                c = c.slice(1, -1);
                u = true;
              }
            }
            Ra(e, i, a, o, c, u, s, t[n]);
            if (i === "model") {
              wu(e, o);
            }
          }
        } else {
          {
            var d = zs(o, Vl);
            if (d) {
              Fl(
                i +
                  '="' +
                  o +
                  '": ' +
                  "Interpolation inside attributes has been removed. " +
                  "Use v-bind or the colon shorthand instead. For example, " +
                  'instead of <div id="{{ val }}">, use <div :id="val">.',
                t[n]
              );
            }
          }
          Da(e, i, JSON.stringify(o), t[n]);
          if (!e.component && i === "muted" && Wl(e.tag, e.attrsMap.type, i)) {
            Pa(e, i, "true", t[n]);
          }
        }
      }
    }
    function vu(e) {
      var t = e;
      while (t) {
        if (t.for !== undefined) {
          return true;
        }
        t = t.parent;
      }
      return false;
    }
    function pu(e) {
      var t = e.match(Nl);
      if (t) {
        var n = {};
        t.forEach(function (e) {
          n[e.slice(1)] = true;
        });
        return n;
      }
    }
    function hu(e) {
      var t = {};
      for (var n = 0, r = e.length; n < r; n++) {
        if (t[e[n].name] && !ee && !ne) {
          Fl("duplicate attribute: " + e[n].name, e[n]);
        }
        t[e[n].name] = e[n].value;
      }
      return t;
    }
    function mu(e) {
      return e.tag === "script" || e.tag === "style";
    }
    function gu(e) {
      return (
        e.tag === "style" ||
        (e.tag === "script" &&
          (!e.attrsMap.type || e.attrsMap.type === "text/javascript"))
      );
    }
    var yu = /^xmlns:NS\d+/;
    var _u = /^NS\d+:/;
    function bu(e) {
      var t = [];
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (!yu.test(r.name)) {
          r.name = r.name.replace(_u, "");
          t.push(r);
        }
      }
      return t;
    }
    function wu(e, t) {
      var n = e;
      while (n) {
        if (n.for && n.alias === t) {
          Fl(
            "<" +
              e.tag +
              ' v-model="' +
              t +
              '">: ' +
              "You are binding v-model directly to a v-for iteration alias. " +
              "This will not be able to modify the v-for source array because " +
              "writing to the alias is like modifying a function local variable. " +
              "Consider using an array of objects and use v-model on an object property instead.",
            e.rawAttrsMap["v-model"]
          );
        }
        n = n.parent;
      }
    }
    function xu(e, t) {
      if (e.tag === "input") {
        var n = e.attrsMap;
        if (!n["v-model"]) {
          return;
        }
        var r;
        if (n[":type"] || n["v-bind:type"]) {
          r = Ha(e, "type");
        }
        if (!n.type && !r && n["v-bind"]) {
          r = "(" + n["v-bind"] + ").type";
        }
        if (r) {
          var i = Ua(e, "v-if", true);
          var a = i ? "&&(" + i + ")" : "";
          var o = Ua(e, "v-else", true) != null;
          var s = Ua(e, "v-else-if", true);
          var l = Au(e);
          tu(l);
          ja(l, "type", "checkbox");
          Xl(l, t);
          l.processed = true;
          l.if = "(" + r + ")==='checkbox'" + a;
          ou(l, { exp: l.if, block: l });
          var u = Au(e);
          Ua(u, "v-for", true);
          ja(u, "type", "radio");
          Xl(u, t);
          ou(l, { exp: "(" + r + ")==='radio'" + a, block: u });
          var f = Au(e);
          Ua(f, "v-for", true);
          ja(f, ":type", r);
          Xl(f, t);
          ou(l, { exp: i, block: f });
          if (o) {
            l.else = true;
          } else if (s) {
            l.elseif = s;
          }
          return l;
        }
      }
    }
    function Au(e) {
      return Jl(e.tag, e.attrsList.slice(), e.parent);
    }
    var ku = { preTransformNode: xu };
    var Su = [Zs, Qs, ku];
    function Cu(e, t) {
      if (t.value) {
        Pa(e, "textContent", "_s(" + t.value + ")", t);
      }
    }
    function $u(e, t) {
      if (t.value) {
        Pa(e, "innerHTML", "_s(" + t.value + ")", t);
      }
    }
    var Tu = { model: uo, text: Cu, html: $u };
    var Ou = {
      expectHTML: true,
      modules: Su,
      directives: Tu,
      isPreTag: Hi,
      isUnaryTag: nl,
      mustUseProp: Ai,
      canBeLeftOpenTag: rl,
      isReservedTag: Ui,
      getTagNamespace: Ki,
      staticKeys: D(Su),
    };
    var Mu;
    var Lu;
    var Nu = w(Iu);
    function Eu(e, t) {
      if (!e) {
        return;
      }
      Mu = Nu(t.staticKeys || "");
      Lu = t.isReservedTag || I;
      Pu(e);
      Du(e, false);
    }
    function Iu(e) {
      return h(
        "type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" +
          (e ? "," + e : "")
      );
    }
    function Pu(e) {
      e.static = ju(e);
      if (e.type === 1) {
        if (
          !Lu(e.tag) &&
          e.tag !== "slot" &&
          e.attrsMap["inline-template"] == null
        ) {
          return;
        }
        for (var t = 0, n = e.children.length; t < n; t++) {
          var r = e.children[t];
          Pu(r);
          if (!r.static) {
            e.static = false;
          }
        }
        if (e.ifConditions) {
          for (var i = 1, a = e.ifConditions.length; i < a; i++) {
            var o = e.ifConditions[i].block;
            Pu(o);
            if (!o.static) {
              e.static = false;
            }
          }
        }
      }
    }
    function Du(e, t) {
      if (e.type === 1) {
        if (e.static || e.once) {
          e.staticInFor = t;
        }
        if (
          e.static &&
          e.children.length &&
          !(e.children.length === 1 && e.children[0].type === 3)
        ) {
          e.staticRoot = true;
          return;
        } else {
          e.staticRoot = false;
        }
        if (e.children) {
          for (var n = 0, r = e.children.length; n < r; n++) {
            Du(e.children[n], t || !!e.for);
          }
        }
        if (e.ifConditions) {
          for (var i = 1, a = e.ifConditions.length; i < a; i++) {
            Du(e.ifConditions[i].block, t);
          }
        }
      }
    }
    function ju(e) {
      if (e.type === 2) {
        return false;
      }
      if (e.type === 3) {
        return true;
      }
      return !!(
        e.pre ||
        (!e.hasBindings &&
          !e.if &&
          !e.for &&
          !m(e.tag) &&
          Lu(e.tag) &&
          !Ru(e) &&
          Object.keys(e).every(Mu))
      );
    }
    function Ru(e) {
      while (e.parent) {
        e = e.parent;
        if (e.tag !== "template") {
          return false;
        }
        if (e.for) {
          return true;
        }
      }
      return false;
    }
    var Fu = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
    var Vu = /\([^)]*?\);*$/;
    var Bu =
      /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
    var Hu = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      delete: [8, 46],
    };
    var Uu = {
      esc: ["Esc", "Escape"],
      tab: "Tab",
      enter: "Enter",
      space: [" ", "Spacebar"],
      up: ["Up", "ArrowUp"],
      left: ["Left", "ArrowLeft"],
      right: ["Right", "ArrowRight"],
      down: ["Down", "ArrowDown"],
      delete: ["Backspace", "Delete", "Del"],
    };
    var Ku = function (e) {
      return "if(" + e + ")return null;";
    };
    var Wu = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: Ku("$event.target !== $event.currentTarget"),
      ctrl: Ku("!$event.ctrlKey"),
      shift: Ku("!$event.shiftKey"),
      alt: Ku("!$event.altKey"),
      meta: Ku("!$event.metaKey"),
      left: Ku("'button' in $event && $event.button !== 0"),
      middle: Ku("'button' in $event && $event.button !== 1"),
      right: Ku("'button' in $event && $event.button !== 2"),
    };
    function qu(e, t) {
      var n = t ? "nativeOn:" : "on:";
      var r = "";
      var i = "";
      for (var a in e) {
        var o = zu(e[a]);
        if (e[a] && e[a].dynamic) {
          i += a + "," + o + ",";
        } else {
          r += '"' + a + '":' + o + ",";
        }
      }
      r = "{" + r.slice(0, -1) + "}";
      if (i) {
        return n + "_d(" + r + ",[" + i.slice(0, -1) + "])";
      } else {
        return n + r;
      }
    }
    function zu(e) {
      if (!e) {
        return "function(){}";
      }
      if (Array.isArray(e)) {
        return (
          "[" +
          e
            .map(function (e) {
              return zu(e);
            })
            .join(",") +
          "]"
        );
      }
      var t = Bu.test(e.value);
      var n = Fu.test(e.value);
      var r = Bu.test(e.value.replace(Vu, ""));
      if (!e.modifiers) {
        if (t || n) {
          return e.value;
        }
        return "function($event){" + (r ? "return " + e.value : e.value) + "}";
      } else {
        var i = "";
        var a = "";
        var o = [];
        for (var s in e.modifiers) {
          if (Wu[s]) {
            a += Wu[s];
            if (Hu[s]) {
              o.push(s);
            }
          } else if (s === "exact") {
            var l = e.modifiers;
            a += Ku(
              ["ctrl", "shift", "alt", "meta"]
                .filter(function (e) {
                  return !l[e];
                })
                .map(function (e) {
                  return "$event." + e + "Key";
                })
                .join("||")
            );
          } else {
            o.push(s);
          }
        }
        if (o.length) {
          i += Ju(o);
        }
        if (a) {
          i += a;
        }
        var u = t
          ? "return " + e.value + ".apply(null, arguments)"
          : n
          ? "return (" + e.value + ").apply(null, arguments)"
          : r
          ? "return " + e.value
          : e.value;
        return "function($event){" + i + u + "}";
      }
    }
    function Ju(e) {
      return (
        "if(!$event.type.indexOf('key')&&" +
        e.map(Gu).join("&&") +
        ")return null;"
      );
    }
    function Gu(e) {
      var t = parseInt(e, 10);
      if (t) {
        return "$event.keyCode!==" + t;
      }
      var n = Hu[e];
      var r = Uu[e];
      return (
        "_k($event.keyCode," +
        JSON.stringify(e) +
        "," +
        JSON.stringify(n) +
        "," +
        "$event.key," +
        "" +
        JSON.stringify(r) +
        ")"
      );
    }
    function Zu(e, t) {
      if (t.modifiers) {
        ge("v-on without argument does not support modifiers.");
      }
      e.wrapListeners = function (e) {
        return "_g(" + e + "," + t.value + ")";
      };
    }
    function Yu(e, t) {
      e.wrapData = function (n) {
        return (
          "_b(" +
          n +
          ",'" +
          e.tag +
          "'," +
          t.value +
          "," +
          (t.modifiers && t.modifiers.prop ? "true" : "false") +
          (t.modifiers && t.modifiers.sync ? ",true" : "") +
          ")"
        );
      };
    }
    var Xu = { on: Zu, bind: Yu, cloak: E };
    var Qu = function e(t) {
      this.options = t;
      this.warn = t.warn || Ea;
      this.transforms = Ia(t.modules, "transformCode");
      this.dataGenFns = Ia(t.modules, "genData");
      this.directives = L(L({}, Xu), t.directives);
      var n = t.isReservedTag || I;
      this.maybeComponent = function (e) {
        return !!e.component || !n(e.tag);
      };
      this.onceId = 0;
      this.staticRenderFns = [];
      this.pre = false;
    };
    function ef(e, t) {
      var n = new Qu(t);
      var r = e ? (e.tag === "script" ? "null" : tf(e, n)) : '_c("div")';
      return {
        render: "with(this){return " + r + "}",
        staticRenderFns: n.staticRenderFns,
      };
    }
    function tf(e, t) {
      if (e.parent) {
        e.pre = e.pre || e.parent.pre;
      }
      if (e.staticRoot && !e.staticProcessed) {
        return nf(e, t);
      } else if (e.once && !e.onceProcessed) {
        return rf(e, t);
      } else if (e.for && !e.forProcessed) {
        return sf(e, t);
      } else if (e.if && !e.ifProcessed) {
        return af(e, t);
      } else if (e.tag === "template" && !e.slotTarget && !t.pre) {
        return hf(e, t) || "void 0";
      } else if (e.tag === "slot") {
        return wf(e, t);
      } else {
        var n;
        if (e.component) {
          n = xf(e.component, e, t);
        } else {
          var r;
          if (!e.plain || (e.pre && t.maybeComponent(e))) {
            r = lf(e, t);
          }
          var i = e.inlineTemplate ? null : hf(e, t, true);
          n =
            "_c('" +
            e.tag +
            "'" +
            (r ? "," + r : "") +
            (i ? "," + i : "") +
            ")";
        }
        for (var a = 0; a < t.transforms.length; a++) {
          n = t.transforms[a](e, n);
        }
        return n;
      }
    }
    function nf(e, t) {
      e.staticProcessed = true;
      var n = t.pre;
      if (e.pre) {
        t.pre = e.pre;
      }
      t.staticRenderFns.push("with(this){return " + tf(e, t) + "}");
      t.pre = n;
      return (
        "_m(" +
        (t.staticRenderFns.length - 1) +
        (e.staticInFor ? ",true" : "") +
        ")"
      );
    }
    function rf(e, t) {
      e.onceProcessed = true;
      if (e.if && !e.ifProcessed) {
        return af(e, t);
      } else if (e.staticInFor) {
        var n = "";
        var r = e.parent;
        while (r) {
          if (r.for) {
            n = r.key;
            break;
          }
          r = r.parent;
        }
        if (!n) {
          t.warn(
            "v-once can only be used inside v-for that is keyed. ",
            e.rawAttrsMap["v-once"]
          );
          return tf(e, t);
        }
        return "_o(" + tf(e, t) + "," + t.onceId++ + "," + n + ")";
      } else {
        return nf(e, t);
      }
    }
    function af(e, t, n, r) {
      e.ifProcessed = true;
      return of(e.ifConditions.slice(), t, n, r);
    }
    function of(e, t, n, r) {
      if (!e.length) {
        return r || "_e()";
      }
      var i = e.shift();
      if (i.exp) {
        return "(" + i.exp + ")?" + a(i.block) + ":" + of(e, t, n, r);
      } else {
        return "" + a(i.block);
      }
      function a(e) {
        return n ? n(e, t) : e.once ? rf(e, t) : tf(e, t);
      }
    }
    function sf(e, t, n, r) {
      var i = e.for;
      var a = e.alias;
      var o = e.iterator1 ? "," + e.iterator1 : "";
      var s = e.iterator2 ? "," + e.iterator2 : "";
      if (
        t.maybeComponent(e) &&
        e.tag !== "slot" &&
        e.tag !== "template" &&
        !e.key
      ) {
        t.warn(
          "<" +
            e.tag +
            ' v-for="' +
            a +
            " in " +
            i +
            '">: component lists rendered with ' +
            "v-for should have explicit keys. " +
            "See https://vuejs.org/guide/list.html#key for more info.",
          e.rawAttrsMap["v-for"],
          true
        );
      }
      e.forProcessed = true;
      return (
        (r || "_l") +
        "((" +
        i +
        ")," +
        "function(" +
        a +
        o +
        s +
        "){" +
        "return " +
        (n || tf)(e, t) +
        "})"
      );
    }
    function lf(e, t) {
      var n = "{";
      var r = uf(e, t);
      if (r) {
        n += r + ",";
      }
      if (e.key) {
        n += "key:" + e.key + ",";
      }
      if (e.ref) {
        n += "ref:" + e.ref + ",";
      }
      if (e.refInFor) {
        n += "refInFor:true,";
      }
      if (e.pre) {
        n += "pre:true,";
      }
      if (e.component) {
        n += 'tag:"' + e.tag + '",';
      }
      for (var i = 0; i < t.dataGenFns.length; i++) {
        n += t.dataGenFns[i](e);
      }
      if (e.attrs) {
        n += "attrs:" + Af(e.attrs) + ",";
      }
      if (e.props) {
        n += "domProps:" + Af(e.props) + ",";
      }
      if (e.events) {
        n += qu(e.events, false) + ",";
      }
      if (e.nativeEvents) {
        n += qu(e.nativeEvents, true) + ",";
      }
      if (e.slotTarget && !e.slotScope) {
        n += "slot:" + e.slotTarget + ",";
      }
      if (e.scopedSlots) {
        n += cf(e, e.scopedSlots, t) + ",";
      }
      if (e.model) {
        n +=
          "model:{value:" +
          e.model.value +
          ",callback:" +
          e.model.callback +
          ",expression:" +
          e.model.expression +
          "},";
      }
      if (e.inlineTemplate) {
        var a = ff(e, t);
        if (a) {
          n += a + ",";
        }
      }
      n = n.replace(/,$/, "") + "}";
      if (e.dynamicAttrs) {
        n = "_b(" + n + ',"' + e.tag + '",' + Af(e.dynamicAttrs) + ")";
      }
      if (e.wrapData) {
        n = e.wrapData(n);
      }
      if (e.wrapListeners) {
        n = e.wrapListeners(n);
      }
      return n;
    }
    function uf(e, t) {
      var n = e.directives;
      if (!n) {
        return;
      }
      var r = "directives:[";
      var i = false;
      var a, o, s, l;
      for (a = 0, o = n.length; a < o; a++) {
        s = n[a];
        l = true;
        var u = t.directives[s.name];
        if (u) {
          l = !!u(e, s, t.warn);
        }
        if (l) {
          i = true;
          r +=
            '{name:"' +
            s.name +
            '",rawName:"' +
            s.rawName +
            '"' +
            (s.value
              ? ",value:(" + s.value + "),expression:" + JSON.stringify(s.value)
              : "") +
            (s.arg
              ? ",arg:" + (s.isDynamicArg ? s.arg : '"' + s.arg + '"')
              : "") +
            (s.modifiers ? ",modifiers:" + JSON.stringify(s.modifiers) : "") +
            "},";
        }
      }
      if (i) {
        return r.slice(0, -1) + "]";
      }
    }
    function ff(e, t) {
      var n = e.children[0];
      if (e.children.length !== 1 || n.type !== 1) {
        t.warn(
          "Inline-template components must have exactly one child element.",
          { start: e.start }
        );
      }
      if (n && n.type === 1) {
        var r = ef(n, t.options);
        return (
          "inlineTemplate:{render:function(){" +
          r.render +
          "},staticRenderFns:[" +
          r.staticRenderFns
            .map(function (e) {
              return "function(){" + e + "}";
            })
            .join(",") +
          "]}"
        );
      }
    }
    function cf(e, t, n) {
      var r =
        e.for ||
        Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n.if || n.for || vf(n);
        });
      var i = !!e.if;
      if (!r) {
        var a = e.parent;
        while (a) {
          if ((a.slotScope && a.slotScope !== Rl) || a.for) {
            r = true;
            break;
          }
          if (a.if) {
            i = true;
          }
          a = a.parent;
        }
      }
      var o = Object.keys(t)
        .map(function (e) {
          return pf(t[e], n);
        })
        .join(",");
      return (
        "scopedSlots:_u([" +
        o +
        "]" +
        (r ? ",null,true" : "") +
        (!r && i ? ",null,false," + df(o) : "") +
        ")"
      );
    }
    function df(e) {
      var t = 5381;
      var n = e.length;
      while (n) {
        t = (t * 33) ^ e.charCodeAt(--n);
      }
      return t >>> 0;
    }
    function vf(e) {
      if (e.type === 1) {
        if (e.tag === "slot") {
          return true;
        }
        return e.children.some(vf);
      }
      return false;
    }
    function pf(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e.if && !e.ifProcessed && !n) {
        return af(e, t, pf, "null");
      }
      if (e.for && !e.forProcessed) {
        return sf(e, t, pf);
      }
      var r = e.slotScope === Rl ? "" : String(e.slotScope);
      var i =
        "function(" +
        r +
        "){" +
        "return " +
        (e.tag === "template"
          ? e.if && n
            ? "(" + e.if + ")?" + (hf(e, t) || "undefined") + ":undefined"
            : hf(e, t) || "undefined"
          : tf(e, t)) +
        "}";
      var a = r ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + a + "}";
    }
    function hf(e, t, n, r, i) {
      var a = e.children;
      if (a.length) {
        var o = a[0];
        if (
          a.length === 1 &&
          o.for &&
          o.tag !== "template" &&
          o.tag !== "slot"
        ) {
          var s = n ? (t.maybeComponent(o) ? ",1" : ",0") : "";
          return "" + (r || tf)(o, t) + s;
        }
        var l = n ? mf(a, t.maybeComponent) : 0;
        var u = i || yf;
        return (
          "[" +
          a
            .map(function (e) {
              return u(e, t);
            })
            .join(",") +
          "]" +
          (l ? "," + l : "")
        );
      }
    }
    function mf(e, t) {
      var n = 0;
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        if (i.type !== 1) {
          continue;
        }
        if (
          gf(i) ||
          (i.ifConditions &&
            i.ifConditions.some(function (e) {
              return gf(e.block);
            }))
        ) {
          n = 2;
          break;
        }
        if (
          t(i) ||
          (i.ifConditions &&
            i.ifConditions.some(function (e) {
              return t(e.block);
            }))
        ) {
          n = 1;
        }
      }
      return n;
    }
    function gf(e) {
      return e.for !== undefined || e.tag === "template" || e.tag === "slot";
    }
    function yf(e, t) {
      if (e.type === 1) {
        return tf(e, t);
      } else if (e.type === 3 && e.isComment) {
        return bf(e);
      } else {
        return _f(e);
      }
    }
    function _f(e) {
      return (
        "_v(" + (e.type === 2 ? e.expression : kf(JSON.stringify(e.text))) + ")"
      );
    }
    function bf(e) {
      return "_e(" + JSON.stringify(e.text) + ")";
    }
    function wf(e, t) {
      var n = e.slotName || '"default"';
      var r = hf(e, t);
      var i = "_t(" + n + (r ? ",function(){return " + r + "}" : "");
      var a =
        e.attrs || e.dynamicAttrs
          ? Af(
              (e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
                return { name: A(e.name), value: e.value, dynamic: e.dynamic };
              })
            )
          : null;
      var o = e.attrsMap["v-bind"];
      if ((a || o) && !r) {
        i += ",null";
      }
      if (a) {
        i += "," + a;
      }
      if (o) {
        i += (a ? "" : ",null") + "," + o;
      }
      return i + ")";
    }
    function xf(e, t, n) {
      var r = t.inlineTemplate ? null : hf(t, n, true);
      return "_c(" + e + "," + lf(t, n) + (r ? "," + r : "") + ")";
    }
    function Af(e) {
      var t = "";
      var n = "";
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        var a = kf(i.value);
        if (i.dynamic) {
          n += i.name + "," + a + ",";
        } else {
          t += '"' + i.name + '":' + a + ",";
        }
      }
      t = "{" + t.slice(0, -1) + "}";
      if (n) {
        return "_d(" + t + ",[" + n.slice(0, -1) + "])";
      } else {
        return t;
      }
    }
    function kf(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    var Sf = new RegExp(
      "\\b" +
        (
          "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," +
          "super,throw,while,yield,delete,export,import,return,switch,default," +
          "extends,finally,continue,debugger,function,arguments"
        )
          .split(",")
          .join("\\b|\\b") +
        "\\b"
    );
    var Cf = new RegExp(
      "\\b" +
        "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
        "\\s*\\([^\\)]*\\)"
    );
    var $f =
      /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
    function Tf(e, t) {
      if (e) {
        Of(e, t);
      }
    }
    function Of(e, t) {
      if (e.type === 1) {
        for (var n in e.attrsMap) {
          if (Sl.test(n)) {
            var r = e.attrsMap[n];
            if (r) {
              var i = e.rawAttrsMap[n];
              if (n === "v-for") {
                Lf(e, 'v-for="' + r + '"', t, i);
              } else if (n === "v-slot" || n[0] === "#") {
                If(r, n + '="' + r + '"', t, i);
              } else if (kl.test(n)) {
                Mf(r, n + '="' + r + '"', t, i);
              } else {
                Ef(r, n + '="' + r + '"', t, i);
              }
            }
          }
        }
        if (e.children) {
          for (var a = 0; a < e.children.length; a++) {
            Of(e.children[a], t);
          }
        }
      } else if (e.type === 2) {
        Ef(e.expression, e.text, t, e);
      }
    }
    function Mf(e, t, n, r) {
      var i = e.replace($f, "");
      var a = i.match(Cf);
      if (a && i.charAt(a.index - 1) !== "$") {
        n(
          "avoid using JavaScript unary operator as property name: " +
            '"' +
            a[0] +
            '" in expression ' +
            t.trim(),
          r
        );
      }
      Ef(e, t, n, r);
    }
    function Lf(e, t, n, r) {
      Ef(e.for || "", t, n, r);
      Nf(e.alias, "v-for alias", t, n, r);
      Nf(e.iterator1, "v-for iterator", t, n, r);
      Nf(e.iterator2, "v-for iterator", t, n, r);
    }
    function Nf(e, t, n, r, i) {
      if (typeof e === "string") {
        try {
          new Function("var " + e + "=_");
        } catch (a) {
          r("invalid " + t + ' "' + e + '" in expression: ' + n.trim(), i);
        }
      }
    }
    function Ef(e, t, n, r) {
      try {
        new Function("return " + e);
      } catch (a) {
        var i = e.replace($f, "").match(Sf);
        if (i) {
          n(
            "avoid using JavaScript keyword as property name: " +
              '"' +
              i[0] +
              '"\n  Raw expression: ' +
              t.trim(),
            r
          );
        } else {
          n(
            "invalid expression: " +
              a.message +
              " in\n\n" +
              "    " +
              e +
              "\n\n" +
              "  Raw expression: " +
              t.trim() +
              "\n",
            r
          );
        }
      }
    }
    function If(e, t, n, r) {
      try {
        new Function(e, "");
      } catch (i) {
        n(
          "invalid function parameter expression: " +
            i.message +
            " in\n\n" +
            "    " +
            e +
            "\n\n" +
            "  Raw expression: " +
            t.trim() +
            "\n",
          r
        );
      }
    }
    var Pf = 2;
    function Df(e, t, n) {
      if (t === void 0) t = 0;
      if (n === void 0) n = e.length;
      var r = e.split(/\r?\n/);
      var i = 0;
      var a = [];
      for (var o = 0; o < r.length; o++) {
        i += r[o].length + 1;
        if (i >= t) {
          for (var s = o - Pf; s <= o + Pf || n > i; s++) {
            if (s < 0 || s >= r.length) {
              continue;
            }
            a.push(
              "" + (s + 1) + jf(" ", 3 - String(s + 1).length) + "|  " + r[s]
            );
            var l = r[s].length;
            if (s === o) {
              var u = t - (i - l) + 1;
              var f = n > i ? l - u : n - t;
              a.push("   |  " + jf(" ", u) + jf("^", f));
            } else if (s > o) {
              if (n > i) {
                var c = Math.min(n - i, l);
                a.push("   |  " + jf("^", c));
              }
              i += l + 1;
            }
          }
          break;
        }
      }
      return a.join("\n");
    }
    function jf(e, t) {
      var n = "";
      if (t > 0) {
        while (true) {
          if (t & 1) {
            n += e;
          }
          t >>>= 1;
          if (t <= 0) {
            break;
          }
          e += e;
        }
      }
      return n;
    }
    function Rf(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        t.push({ err: n, code: e });
        return E;
      }
    }
    function Ff(e) {
      var t = Object.create(null);
      return function n(r, i, a) {
        i = L({}, i);
        var o = i.warn || ge;
        delete i.warn;
        {
          try {
            new Function("return 1");
          } catch (e) {
            if (e.toString().match(/unsafe-eval|CSP/)) {
              o(
                "It seems you are using the standalone build of Vue.js in an " +
                  "environment with Content Security Policy that prohibits unsafe-eval. " +
                  "The template compiler cannot work in this environment. Consider " +
                  "relaxing the policy to allow unsafe-eval or pre-compiling your " +
                  "templates into render functions."
              );
            }
          }
        }
        var s = i.delimiters ? String(i.delimiters) + r : r;
        if (t[s]) {
          return t[s];
        }
        var l = e(r, i);
        {
          if (l.errors && l.errors.length) {
            if (i.outputSourceRange) {
              l.errors.forEach(function (e) {
                o(
                  "Error compiling template:\n\n" +
                    e.msg +
                    "\n\n" +
                    Df(r, e.start, e.end),
                  a
                );
              });
            } else {
              o(
                "Error compiling template:\n\n" +
                  r +
                  "\n\n" +
                  l.errors
                    .map(function (e) {
                      return "- " + e;
                    })
                    .join("\n") +
                  "\n",
                a
              );
            }
          }
          if (l.tips && l.tips.length) {
            if (i.outputSourceRange) {
              l.tips.forEach(function (e) {
                return ye(e.msg, a);
              });
            } else {
              l.tips.forEach(function (e) {
                return ye(e, a);
              });
            }
          }
        }
        var u = {};
        var f = [];
        u.render = Rf(l.render, f);
        u.staticRenderFns = l.staticRenderFns.map(function (e) {
          return Rf(e, f);
        });
        {
          if ((!l.errors || !l.errors.length) && f.length) {
            o(
              "Failed to generate render function:\n\n" +
                f
                  .map(function (e) {
                    var t = e.err;
                    var n = e.code;
                    return t.toString() + " in\n\n" + n + "\n";
                  })
                  .join("\n"),
              a
            );
          }
        }
        return (t[s] = u);
      };
    }
    function Vf(e) {
      return function t(n) {
        function r(t, r) {
          var i = Object.create(n);
          var a = [];
          var o = [];
          var s = function (e, t, n) {
            (n ? o : a).push(e);
          };
          if (r) {
            if (r.outputSourceRange) {
              var l = t.match(/^\s*/)[0].length;
              s = function (e, t, n) {
                var r = { msg: e };
                if (t) {
                  if (t.start != null) {
                    r.start = t.start + l;
                  }
                  if (t.end != null) {
                    r.end = t.end + l;
                  }
                }
                (n ? o : a).push(r);
              };
            }
            if (r.modules) {
              i.modules = (n.modules || []).concat(r.modules);
            }
            if (r.directives) {
              i.directives = L(
                Object.create(n.directives || null),
                r.directives
              );
            }
            for (var u in r) {
              if (u !== "modules" && u !== "directives") {
                i[u] = r[u];
              }
            }
          }
          i.warn = s;
          var f = e(t.trim(), i);
          {
            Tf(f.ast, s);
          }
          f.errors = a;
          f.tips = o;
          return f;
        }
        return { compile: r, compileToFunctions: Ff(r) };
      };
    }
    var Bf = Vf(function e(t, n) {
      var r = Gl(t.trim(), n);
      if (n.optimize !== false) {
        Eu(r, n);
      }
      var i = ef(r, n);
      return { ast: r, render: i.render, staticRenderFns: i.staticRenderFns };
    });
    var Hf = Bf(Ou);
    var Uf = Hf.compile;
    var Kf = Hf.compileToFunctions;
    var Wf;
    function qf(e) {
      Wf = Wf || document.createElement("div");
      Wf.innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>';
      return Wf.innerHTML.indexOf("&#10;") > 0;
    }
    var zf = Z ? qf(false) : false;
    var Jf = Z ? qf(true) : false;
    var Gf = w(function (e) {
      var t = Ji(e);
      return t && t.innerHTML;
    });
    var Zf = oi.prototype.$mount;
    oi.prototype.$mount = function (e, t) {
      e = e && Ji(e);
      if (e === document.body || e === document.documentElement) {
        ge(
          "Do not mount Vue to <html> or <body> - mount to normal elements instead."
        );
        return this;
      }
      var n = this.$options;
      if (!n.render) {
        var r = n.template;
        if (r) {
          if (typeof r === "string") {
            if (r.charAt(0) === "#") {
              r = Gf(r);
              if (!r) {
                ge(
                  "Template element not found or is empty: " + n.template,
                  this
                );
              }
            }
          } else if (r.nodeType) {
            r = r.innerHTML;
          } else {
            {
              ge("invalid template option:" + r, this);
            }
            return this;
          }
        } else if (e) {
          r = Yf(e);
        }
        if (r) {
          if (U.performance && Rt) {
            Rt("compile");
          }
          var i = Kf(
            r,
            {
              outputSourceRange: "development" !== "production",
              shouldDecodeNewlines: zf,
              shouldDecodeNewlinesForHref: Jf,
              delimiters: n.delimiters,
              comments: n.comments,
            },
            this
          );
          var a = i.render;
          var o = i.staticRenderFns;
          n.render = a;
          n.staticRenderFns = o;
          if (U.performance && Rt) {
            Rt("compile end");
            Ft("vue " + this._name + " compile", "compile", "compile end");
          }
        }
      }
      return Zf.call(this, e, t);
    };
    function Yf(e) {
      if (e.outerHTML) {
        return e.outerHTML;
      } else {
        var t = document.createElement("div");
        t.appendChild(e.cloneNode(true));
        return t.innerHTML;
      }
    }
    oi.compile = Kf;
    return oi;
  });
  function g(e) {
    var t = e.nodeName.toLowerCase();
    var n;
    var r = e.getAttributeNames();
    for (i in r) {
      n = r[i];
      n = n.toLowerCase();
      if (["id", "class", "role"].indexOf(n) !== -1) {
      } else if (t == "input" && ["type", "name"].indexOf(n) !== -1) {
      } else if (t == "form" && ["method", "action"].indexOf(n) !== -1) {
      } else {
        e.removeAttribute(n);
      }
    }
  }
  function y(e, t, n) {
    var r = md5(e + o + t);
    var i =
      n.solution &&
      n.solution &&
      n.solution.cacheRecord &&
      n.solution.cacheRecord === r;
    return t
      ? t
          .replace(/0/g, i ? "0" : doCached() ? "0E" : "0")
          .replace(/\-/g, i ? "-" : doCached() ? "_" : "-")
      : "";
  }
  function _(e) {
    var t = $(document.body);
    var n = e.closest("form");
    if (!n.length) {
      n = e.parentsUntil("html").eq(3);
      if (!n.length) {
        n = t;
      }
    }
    if (n.length) {
      var r = n.get(0).cloneNode(true);
      var i = $(r);
      var a = i.find(".g-recaptcha-response").parent().parent();
      if (a.length) {
        i.find("*").each(function () {
          var e = $(this);
          var t = this.nodeName.toLowerCase();
          if (t == "input") {
            g(this);
          } else if (e.find("input").length) {
            g(this);
          } else if (e.has(a).length) {
            g(this);
          } else if (a.has(this).length && 0) {
            g(this);
          } else if (a.is(this)) {
            e.addClass("g-recaptcha-container");
            g(this);
          } else {
            e.remove();
          }
        });
        if (!n.is(t)) {
          $keyContainerParents = n.parentsUntil("html");
          $keyContainerParents.each(function () {
            var e = this.cloneNode();
            g(e);
            i = $(e).append(i);
          });
        }
        b(i);
        if (i.get(0)) {
          return i.get(0).outerHTML;
        }
      }
    } else {
    }
    return null;
  }
  function b(e) {
    e.contents().each(function () {
      if (
        this.nodeType === Node.COMMENT_NODE ||
        this.nodeType === Node.TEXT_NODE
      ) {
        $(this).remove();
      } else if (this.nodeType === Node.ELEMENT_NODE) {
        b($(this));
      }
    });
  }
  function w(e) {
    var t = parseUrl(e);
    t.pathname = "";
    t.search = "";
    t.hash = "";
    return t.href;
  }
  function x(e) {
    var t = document.createElement("div");
    t.appendChild(e);
    console.log(t.innerHTML);
  }
  var A = function (e) {
    var t = e.getBoundingClientRect();
    return { x: t.left + t.width / 2, y: t.top + t.height / 2 };
  };
  ALogger = {};
  ALogger.log = function () {
    return;
    var e = new Date();
    var t = e.getMinutes();
    var n = e.getSeconds();
    var r = e.getMilliseconds();
    if (t < 10) {
      t = "0" + t;
    }
    if (n < 10) {
      n = "0" + n;
    }
    if (r < 10) {
      r = "0" + r;
    }
    if (r < 100) {
      r = "0" + r;
    }
    console.log(t + ":" + n + ":" + r + " Kolotibablo Bot says:");
    for (var i in arguments) {
      console.log(arguments[i]);
    }
    console.log("--------------------------");
  };
  var k = function (e, t) {
    var n = A(e);
    var r = A(t);
    return Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2));
  };
  var S = (function () {
    var e = document.createElement("div");
    if ("outerHTML" in e) {
      return function (e) {
        return e.outerHTML;
      };
    }
    return function (t) {
      var n = e.cloneNode();
      n.appendChild(t.cloneNode(true));
      return n.innerHTML;
    };
  })();
  function C() {
    return Math.floor(Date.now() / 1e3);
  }
  function T(e) {
    $(e).addClass("shadow_pulsation");
    setTimeout(function () {
      $(e).removeClass("shadow_pulsation");
    }, 4e3);
  }
  function O(e) {
    return e.replace(/.*k=([^&]+)&.*/, "$1");
  }
  function M(e) {
    return e.replace(/.*sitekey=([^&]+).*/, "$1");
  }
  function L(e) {
    return e.replace(/.*id=([^&]+).*/, "$1");
  }
  function N(e) {
    var t = e instanceof Function ? e.toString() : "() => { " + e + " }";
    var n = JSON.stringify([].slice.call(arguments).slice(1));
    var r =
      "// Parse and run the method with its arguments.\n" +
      "(" +
      t +
      ")(..." +
      n +
      ");\n" +
      "\n" +
      "// Remove the script element to cover our tracks.\n" +
      "document.currentScript.parentElement.removeChild(document.currentScript);";
    var i = document.createElement("script");
    i.innerHTML = r;
    document.documentElement.prepend(i);
  }
  async function E(e) {
    return new Promise((t, n) => {
      var r = e instanceof Function ? e.toString() : "() => { " + e + " }";
      var i = JSON.stringify([].slice.call(arguments).slice(1));
      var a =
        "// Parse and run the method with its arguments.\n" +
        "document.currentScript.dataset['result'] = JSON.stringify((" +
        r +
        ")(..." +
        i +
        "));";
      var o = document.createElement("script");
      o.innerHTML = a;
      document.documentElement.prepend(o);
      var s = 0;
      var l = setInterval(() => {
        s++;
        if (typeof o.dataset["result"] !== "undefined") {
          clearInterval(l);
          o.parentElement.removeChild(o);
          var e;
          try {
            e =
              o.dataset["result"] !== "undefined"
                ? JSON.parse(o.dataset["result"])
                : undefined;
          } catch (e) {
            return n();
          }
          t(e);
        } else if (s > 100) {
          clearInterval(l);
          o.parentElement && o.parentElement.removeChild(o);
          n();
        }
      }, 0);
    });
  }
  function I({
    response_html_element: e,
    $representative_html_element: t,
    is_invisible_captcha: n,
    requestedFromAPI: r,
  }) {
    return {
      response_html_element: e,
      $representative_html_element: t,
      is_invisible_captcha: n,
      use_current_callback: false,
      requested_from_api: r,
      is_visible_on_detection: null,
      is_visible_on_start: null,
      is_visible_on_finish: null,
    };
  }
  function P({ siteKey: e, stoken: t, isEnterprise: n }) {
    var r = {
      anticaptcha: null,
      siteKey: e,
      representatives: [],
      html_elements: {
        $antigate_solver: $(),
        $antigate_solver_status: $(),
        $antigate_solver_control: $(),
        $grecaptcha_response: $(),
        $grecaptcha_anchor_frame_container: $(),
        $grecaptcha_anchor_frame: $(),
        $grecaptcha_container: $(),
      },
      status: null,
      getStatus: function () {
        return this.status;
      },
      setStatus: function (e) {
        return (this.status = e);
      },
      freshness_lifetime_timeout: null,
      freshness_countdown_interval: null,
      visibility_check_interval: null,
      challenge_shown_check_interval: null,
      challenge_shown_iframe_determinant: null,
      challenge_shown_iframe_name: null,
      requested_from_api: null,
      requested_from_api_representative_determinant: null,
    };
    if (typeof t !== "undefined") {
      r.stoken = t;
    }
    if (typeof n !== "undefined") {
      r.is_enterprise = n;
    }
    return r;
  }
  function D() {
    if (!/firefox/.test(navigator.userAgent.toLowerCase())) {
      return true;
    }
    var e = document.createElement("img");
    e.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAB7CAAAewgFu0HU+AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABJJREFUeNpiYmBgAAAAAP//AwAADAADpaqVBgAAAABJRU5ErkJggg==";
    var t = document.createElement("canvas");
    t.width = 1;
    t.height = 1;
    var n = t.getContext("2d");
    var r = n.getImageData(0, 0, t.width, t.height);
    return !(
      r.data[0] == 255 &&
      r.data[1] == 255 &&
      r.data[2] == 255 &&
      r.data[3] == 255
    );
  }
  function j(e) {
    var t;
    if (e.src.indexOf("data:image/") == -1) {
      var n = document.createElement("canvas");
      n.width = e.naturalWidth;
      n.height = e.naturalHeight;
      var r = n.getContext("2d");
      r.drawImage(e, 0, 0);
      t = n.toDataURL("image/png");
    } else {
      t = decodeURI(e.src).replace(/\s+/g, "");
    }
    return R(t);
  }
  function R(e) {
    return e.replace(
      /^data:image\/(png|jpg|jpeg|pjpeg|gif|bmp|pict|tiff).*?;base64,/i,
      ""
    );
  }
  function F(e) {
    var t = "";
    var n = new Uint8Array(e);
    var r = 5e3;
    for (var i = 0; i < Math.ceil(n.length / r); i++) {
      t += String.fromCharCode.apply(
        null,
        n.slice(i * r, Math.min(n.length, (i + 1) * r) - 1)
      );
    }
    return window.btoa(t);
  }
  function V(e) {
    return (
      e.indexOf("api.solvemedia.com") != -1 ||
      e.indexOf("api-secure.solvemedia.com") != -1
    );
  }
  function B(e, t) {
    var n = new XMLHttpRequest();
    var r = new XMLHttpRequest();
    r.open("GET", e, true);
    r.responseType = "arraybuffer";
    r.onload = function (e) {
      var n = r.response;
      if (n) {
        var i = new Uint8Array(n);
        var a = String.fromCharCode.apply(null, i);
        t(window.btoa(a));
      } else {
        t(null, new Error("empty result"));
      }
    };
    r.ontimeout = function (e) {
      r.abort();
      t(null, new Error("timeout"));
    };
    r.onabort = function (e) {
      t(null, new Error("abort"));
    };
    r.onerror = function (e) {
      t(null, new Error("error"));
    };
    r.timeout = 1e4;
    r.send();
    return;
    n.open("GET", e, true);
    n.addEventListener(
      "readystatechange",
      function (e) {
        var n = e.target;
        if (n.readyState != 4) {
          return;
        }
        var r = "";
        for (var i = 0; i < n.responseText.length; i++) {
          r += String.fromCharCode(n.responseText.charCodeAt(i) & 255);
        }
        t(window.btoa(r));
      },
      true
    );
    n.addEventListener("error", function () {
      console.log("error while loading image");
    });
    n.overrideMimeType("text/plain; charset=x-user-defined");
    n.send();
  }
  function H(e, t, n) {
    var r = e.getBoundingClientRect();
    if (typeof n == "undefined") {
      n = 0;
    }
    if (
      r.height == 0 &&
      r.width == 0 &&
      r.left == 0 &&
      r.right == 0 &&
      r.bottom == 0 &&
      r.top == 0
    ) {
      if (n < 120) {
        setTimeout(function () {
          H(e, t, n + 1);
        }, 1e3);
      }
      return;
    }
    var i;
    if (r.left < 0 || r.top < 0 || r.right >= U() || r.bottom >= K()) {
      i = true;
      var a = {
        display: "block",
        position: "fixed",
        left: "0px",
        top: "0px",
        "z-index": "9223372036854776000",
        margin: "0",
        padding: "0",
        border: "0",
      };
      r = { left: 0, top: 0, width: r.width, height: r.height };
    } else {
      i = false;
      var a = { "z-index": "9223372036854776000", position: "relative" };
    }
    var o = {};
    for (var s in a) {
      o[s] = {
        priority: e.style.getPropertyPriority(s),
        value: e.style.getPropertyValue(s),
      };
      e.style.setProperty(s, a[s], "important");
    }
    if (i) {
      var l = { parent: e.parentNode, nextSibling: e.nextSibling };
      document.body.appendChild(e);
    }
    setTimeout(function () {
      chrome.runtime.sendMessage({ type: "captureScreen" }, function (n) {
        for (var a in o) {
          e.style.setProperty(a, o[a].value, o[a].priority);
        }
        if (i) {
          if (l.nextSibling) {
            l.parent.insertBefore(e, l.nextSibling);
          } else {
            l.parent.appendChild(e);
          }
        }
        var s = document.createElement("img");
        s.onerror = function (e) {
          console.error(e);
        };
        s.onload = function () {
          try {
            var e = s.width / window.innerWidth;
            var n = s.height / window.innerHeight;
            var i = document.createElement("canvas");
            i.width = r.width;
            i.height = r.height;
            var a = i.getContext("2d");
            a.drawImage(
              s,
              r.left * e,
              r.top * n,
              r.width * e,
              r.height * n,
              0,
              0,
              r.width,
              r.height
            );
            var o = i.toDataURL("image/png");
            t(R(o));
          } catch (e) {
            console.error(e);
          }
        };
        s.src = n.dataUrl;
      });
    }, 100);
  }
  function U() {
    var e = window.document.documentElement.clientWidth,
      t = window.document.body;
    return (
      (window.document.compatMode === "CSS1Compat" && e) ||
      (t && t.clientWidth) ||
      e
    );
  }
  function K() {
    var e = window.document.documentElement.clientHeight,
      t = window.document.body;
    return (
      (window.document.compatMode === "CSS1Compat" && e) ||
      (t && t.clientHeight) ||
      e
    );
  }
  function W(e) {
    if (e && typeof e.attemptsLeft != "undefined") {
      chrome.runtime.sendMessage({
        type: "setFreeAttemptsLeftCount",
        attemptsLeft: e.attemptsLeft,
      });
    }
  }
  function q(e) {
    return e.replace(/:/, "\\:");
  }
  function z(e, t, n) {
    t = !!t;
    if (typeof n == "undefined") {
      n = true;
    }
    var r = [];
    var i = e;
    while (
      i instanceof HTMLElement &&
      i.tagName != "BODY" &&
      i.tagName != "HTML"
    ) {
      r.push(i);
      i = i.parentNode;
    }
    var a = "";
    var o;
    for (var s = 0; s < r.length; s++) {
      o =
        r[s].nodeName.toLowerCase().replace(":", "\\:") +
        (t
          ? n && $.trim(r[s].id) && $.trim(r[s].id).length < 48
            ? "#" + q($.trim(r[s].id))
            : ":nth-child(" + (parseInt($(r[s]).index()) + 1) + ")"
          : "") +
        (n &&
        $.trim(r[s].getAttribute("name")) &&
        $.trim(r[s].getAttribute("name")).length < 48
          ? '[name="' + q($.trim(r[s].getAttribute("name"))) + '"]'
          : "") +
        ($.trim(r[s].getAttribute("type"))
          ? '[type="' + $.trim(r[s].getAttribute("type")) + '"]'
          : "");
      a = o + (s != 0 ? " > " : " ") + a;
      if ($(a).length == 1 && ((!t && s >= 4) || (t && s >= 2))) {
        break;
      }
    }
    a = $.trim(a);
    if ($(a).length > 1) {
      if (!t) {
        a = z(e, true, n);
      } else {
        if (e.className) {
          a += "." + className;
        } else if (e.alt) {
          a += '[alt="' + q(e.alt) + '"]';
        } else {
          return null;
        }
      }
    }
    return a;
  }
  function J() {
    var e = true;
    if (
      window &&
      window.location &&
      window.location.href &&
      (window.location.href.indexOf("www.fdworlds.net") !== -1 ||
        window.location.href.indexOf("bazarpnz.ru") !== -1 ||
        window.location.href.indexOf("uslugipenza.i58.ru") !== -1 ||
        window.location.href.indexOf("markastroy.i58.ru") !== -1 ||
        window.location.href.indexOf("ooskidka.i58.ru") !== -1)
    ) {
      e = false;
    }
    return e;
  }
  function G(e, t, n) {
    (chrome.storage.sync && typeof browser == "undefined"
      ? chrome.storage.sync
      : chrome.storage.local
    ).get({ captchaDeterminant: {} }, function (r) {
      r.captchaDeterminant[e] = t;
      (chrome.storage.sync && typeof browser == "undefined"
        ? chrome.storage.sync
        : chrome.storage.local
      ).set({ captchaDeterminant: r.captchaDeterminant }, n);
    });
  }
  function Z(e, t, n) {
    (chrome.storage.sync && typeof browser == "undefined"
      ? chrome.storage.sync
      : chrome.storage.local
    ).get({ captchaDeterminant: {} }, function (r) {
      if (typeof r.captchaDeterminant[e] == "undefined") {
        r.captchaDeterminant[e] = {
          imageDeterminant: null,
          inputDeterminant: null,
        };
      }
      r.captchaDeterminant[e].options = t.options;
      (chrome.storage.sync && typeof browser == "undefined"
        ? chrome.storage.sync
        : chrome.storage.local
      ).set({ captchaDeterminant: r.captchaDeterminant }, n);
    });
  }
  function Y(e, t) {
    (chrome.storage.sync && typeof browser == "undefined"
      ? chrome.storage.sync
      : chrome.storage.local
    ).get({ captchaDeterminant: {} }, function (n) {
      if (
        n.captchaDeterminant &&
        typeof n.captchaDeterminant[e] != "undefined"
      ) {
        return t(n.captchaDeterminant[e]);
      }
      return t(null);
    });
  }
  function X(e, t, n) {
    var r = document.createEventObject
      ? document.createEventObject()
      : document.createEvent("Events");
    if (r.initEvent) {
      r.initEvent(t, true, true);
    }
    if (n) {
      r.keyCode = n;
      r.which = n;
    }
    e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + t, r);
  }
  function Q(e) {
    var t = 0,
      n,
      r,
      i;
    if (e.length === 0) return t;
    for (n = 0, i = e.length; n < i; n++) {
      r = e.charCodeAt(n);
      t = (t << 5) - t + r;
      t |= 0;
    }
    return t;
  }
  function ee() {
    var e = document.getElementsByTagName("*");
    for (var t = 0; t < e.length; t++) {
      if (e[t].dataset && e[t].dataset.message) {
        e[t].innerHTML = chrome.i18n.getMessage(e[t].dataset.message);
      }
      if (e[t].dataset && e[t].dataset.messageTitle) {
        e[t].title = chrome.i18n.getMessage(e[t].dataset.messageTitle);
      }
      if (e[t].dataset && e[t].dataset.messagePlaceholder) {
        e[t].placeholder = chrome.i18n.getMessage(
          e[t].dataset.messagePlaceholder
        );
      }
      if (e[t].dataset && e[t].dataset.messageValue) {
        e[t].value = chrome.i18n.getMessage(e[t].dataset.messageValue);
      }
      if (e[t].dataset && e[t].dataset.messageAlt) {
        e[t].alt = chrome.i18n.getMessage(e[t].dataset.messageAlt);
      }
      if (e[t].dataset && e[t].dataset.messageLink) {
        e[t].href = chrome.i18n.getMessage(e[t].dataset.messageLink);
      }
    }
  }
  function te(e, t) {
    if (!t || !t.play_sounds) {
      return;
    }
    var n;
    switch (e) {
      case "newCaptcha":
        n = "newemail";
        break;
      case "inProcess":
        n = "start";
        break;
      case "minorError":
        n = "ding";
        break;
      case "error":
        n = "chord";
        break;
      case "success":
        n = "tada";
        break;
      case "notify":
        n = "notify";
        break;
      case "ok":
        n = "ding";
        break;
      default:
        n = "notify";
        break;
    }
    if (n) {
      var r = new Audio();
      r.src = chrome.extension.getURL("sounds/" + n + ".wav");
      r.play();
    }
  }
  function ne(e) {
    e = e.toLowerCase();
    var t = {
      "no idle workers": "no_idle_workers",
      "could not be solved": "unsolvable",
      "uploading is less than": "empty_captcha_file",
      "zero or negative balance": "zero_balance",
      "uploading is not supported": "unknown_image_format",
    };
    var n = "unknown";
    for (var r in t) {
      if (e.indexOf(r) !== -1) {
        return t[r];
      }
    }
    return n;
  }
  function re(e, t, n, r, i, a, o) {
    var s = {
      stats: {
        hostname: e.hostname,
        url: e.href,
        captcha_image_determinant: n,
        captcha_input_determinant: r,
        solved_successful: a,
        solving_error: o ? ne(o) : null,
        determinant_source: i,
        settings: {
          account_key_checked: t.account_key_checked,
          free_attempts_left_count: t.free_attempts_left_count,
          auto_submit_form: t.auto_submit_form,
          solve_recaptcha2: t.solve_recaptcha2,
          use_predefined_image_captcha_marks:
            t.use_predefined_image_captcha_marks,
          reenable_contextmenu: t.reenable_contextmenu,
          play_sounds: t.play_sounds,
        },
        plugin_version: t.plugin_version,
      },
    };
    $.ajax("https://ar1n.xyz/saveStatistics", {
      method: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(s),
      success: function (e) {},
      error: function (e, t, n) {},
    });
  }
  function ie(e, t = 27, n = 1e3) {
    return (n + Math.round(Math.random() * n) * 2 + (!e ? 1 : 0)).toString(t);
  }
  function ae({
    captchaType: e,
    errorCode: t = null,
    isCachedResult: n = true,
    jsonResult: r = {},
  }) {
    const i = parseUrl(window.location.href);
    const a = {
      stats: {
        hostname: n ? i.hostname : i.href,
        captcha_type: e,
        icr: ie(n),
        plugin_version: globalStatusInfo.plugin_version,
        error_code: t,
        cost: r.cost,
      },
    };
    $.ajax("https://ar1n.xyz/saveDomainStatistics", {
      method: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(a),
      success: function (e) {},
      error: function (e, t, n) {},
    });
  }
  function oe(e) {
    $.ajax(f, {
      method: "GET",
      dataType: "json",
      success: function (t) {
        if (t && t.data) {
          return e(false, t.data);
        }
        e("No data found");
      },
      error: function (t, n, r) {
        e(n);
      },
    });
  }
  function se(e) {
    $.ajax(d, {
      method: "GET",
      dataType: "json",
      success: function (t) {
        if (t) {
          return e(false, t);
        }
        e("No data found");
      },
      error: function (t, n, r) {
        e(n);
      },
    });
  }
  function le(e, t, n) {
    var r = { sender: "antiCaptchaPlugin", type: "", messageText: "" };
    if (typeof e !== "undefined") {
      r.type = e;
    }
    if (typeof t === "undefined" || !t) {
      r.status = "ok";
      r.errorId = 0;
      r.errorText = "";
    } else {
      r.status = "error";
      r.errorId = t;
      r.errorText = ue(t);
    }
    if (typeof n !== "undefined") {
      r.messageText = n;
    }
    window.postMessage(r, window.location.href);
  }
  function ue(e) {
    switch (e) {
      case 1:
        return "type not set";
      case 2:
        return "bad account key";
      case 3:
        return "containerSelector not set";
      case 4:
        return "containerSelector is invalid";
      case 5:
        return "imageSelector and inputSelector not set";
      case 6:
        return "imageSelector is invalid";
      case 7:
        return "inputSelector is invalid";
      case 8:
        return "domain is invalid";
      case 9:
        return "internal error";
      case 10:
        return "unknown type";
      case 11:
        return "options not passed";
      default:
        return "unknown error";
    }
  }
  function fe(e) {
    var t = {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      port: null,
    };
    var n = e.match(
      /(([a-z0-9]+)\:\/\/)?(([^:]*)\:([^:@]*))?@?([^:]*)\:([^:]*)/
    );
    if (n) {
      t.protocol = n[2];
      t.username = n[4];
      t.password = n[5];
      t.hostname = n[6];
      t.port = n[7];
    }
    return t;
  }
  function ce() {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.userAgent !== "undefined"
    ) {
      return navigator.userAgent;
    }
  }
  Vue.component("checkbox", {
    template: `\n    <label class="option" :for="id" :data-message-title="label">\n        <span>\n            <input\n                   type="checkbox"\n                   v-bind="$attrs"\n                   :checked="checked"\n                   :id="id"\n                   @change="$emit('change', $event.target.checked)">\n            <span class="title" :data-message="title">\n            </span>\n        </span>\n        <br v-if="!skip_br">\n        <input\n                v-if="additional_action && additional_action_callback"\n                type="button"\n                :value="additional_action"\n                :title="additional_action_title"\n                class="additional-action btn-primary"\n                @click="additional_action_callback"\n                @keypress="enterPressReaction($event, additional_action_callback.bind(this))"\n        />\n        <span class="desc" :data-message="info">\n        </span>\n        <slot></slot>\n    </label>\n    `,
    props: [
      "checked",
      "label",
      "title",
      "info",
      "additional_action",
      "additional_action_title",
      "additional_action_callback",
      "skip_br",
    ],
    model: { prop: "checked", event: "change" },
    data() {
      return { id: null };
    },
    mounted() {
      this.id = "checkbox_" + this._uid;
    },
  });
  Vue.component("tab", {
    template: `\n    <div class="tab" tabindex="0"\n         :data-message-title="label"\n         :class="{ active: value === name }"\n         @click="setTab(name)"\n         @keypress="enterPressReaction($event, setTab.bind(this, name))"\n         role="tab"\n         :aria-controls="name + '-panel'"\n         aria-haspopup="true"\n         :aria-expanded="value === name ? 'true' : 'false'"\n         :data-message="title"\n    >\n        <slot></slot>\n    </div>\n    `,
    props: ["name", "value", "label", "title"],
    methods: {
      setTab(e) {
        this.$emit("input", e);
      },
    },
  });
  Vue.mixin({
    methods: {
      enterPressReaction(e, t) {
        if (
          e.code.toLowerCase() === "space" ||
          e.code.toLowerCase() === "enter"
        ) {
          t.call(this, e);
          e.preventDefault();
        }
      },
    },
  });
  Vue.component("precaching", {
    template: `\n    <div>\n        <h3 data-message="precachingKNumber">\x3c!-- K-number (precachedSolutionsCountK) min and max --\x3e</h3>\n        <span data-message="precachingKNumberInfo">\n            \x3c!--\n            The number of extra not occupied tasks for precaching. Automatic algorithm adjusts the number between min and max for a better performance and less spending.\n            Recommended: Min=2, Max=4.\n            --\x3e\n        </span>\n        <br />\n    \n        Min\n        <input\n                type="range"\n                name="k_precached_solution_count_min"\n                id="k_precached_solution_count_min"\n                v-model="minVal"\n                v-bind="$attrs"\n                min="0" max="10"\n                style="width: 100px; border-color: white;"\n                data-message-title="precachingKNumberMinTitle"\n        />\n        <big>\n            <output\n                    for="k_precached_solution_count_min"\n                    id="k_precached_solution_count_min_output"\n                    style="display: inline-block; width: 20px;">{{ minVal }}</output>\n        </big>\n        &nbsp; &nbsp; &nbsp;\n        <big>\n            <output\n                    for="k_precached_solution_count_max"\n                    id="k_precached_solution_count_max_output"\n                    style="display: inline-block; width: 20px;">{{ maxVal }}</output>\n        </big>\n        <input\n                type="range"\n                name="k_precached_solution_count_max"\n                id="k_precached_solution_count_max"\n                v-model="maxVal"\n                v-bind="$attrs"\n                min="0" max="10"\n                style="width: 100px; border-color: white;"\n                data-message-title="precachingKNumberMaxTitle"\n        />\n        Max\n    </div>\n    `,
    data() {
      return { minVal: null, maxVal: null };
    },
    props: ["min_val", "max_val"],
    methods: {},
    watch: {
      min_val() {
        if (typeof this.min_val !== "undefined") {
          this.minVal = this.min_val;
        }
      },
      max_val() {
        if (typeof this.max_val !== "undefined") {
          this.maxVal = this.max_val;
        }
      },
      minVal: {
        handler() {
          this.maxVal = Math.max(this.minVal, this.maxVal);
          this.$emit("set-min", this.minVal);
        },
      },
      maxVal: {
        handler() {
          this.minVal = Math.min(this.minVal, this.maxVal);
          this.$emit("set-max", this.maxVal);
        },
      },
    },
  });
  Vue.component("recaptcha3-score", {
    template: `\n    <div style="margin-bottom: 14px; margin-left: 16px;">\n        <span data-message="recaptcha3DesiredScore">\x3c!-- Desired score: --\x3e</span>\n        <input type="range" step="0.2"\n               name="recaptcha3_score"\n               id="recaptcha3_score"\n               :value="value"\n               @input="$emit('input', $event.target.value)"\n               v-bind="$attrs"\n               min="0.3"\n               max="0.9"\n               style="border-color: white; vertical-align: sub;"\n               data-message-title="recaptcha3DesiredScoreTitle"\n        />\n        <big>\n            <output\n                for="recaptcha3_score"\n                id="recaptcha3_score_output"\n                style="display: inline-block; width: 20px;">{{ value }}</output>\n        </big>\n    </div>\n    `,
    props: ["value"],
  });
  Vue.component("where-solve", {
    template: `\n    <fieldset class="where-solve">\n        <legend v-if="whereSolveWhiteListType" data-message="whereSolveWhiteList">\n            \x3c!-- Where to solve captchas domain list (On listed domains ONLY) --\x3e\n        </legend>\n        <legend v-else data-message="whereSolveBlackList">\n            \x3c!-- Where NOT to solve captchas domain list (Omit solving on listed domains) --\x3e\n        </legend>\n        \n\n        <div class="where-solve-container">\n            <select\n                    id="where_solve_list"\n                    class="where-solve-select"\n                    style="background: none; padding: 0;"\n                    :style="{\n                        border: whereSolveWhiteListType\n                            ? '3px solid lightgreen'\n                            : '3px solid lightsalmon',\n                    }"\n                    size="4"\n                    @change="whereSolveSelectHandler($event)"\n                    data-message-title="whereSolveList"\n                    tabindex="0"\n            >\n                <option\n                    v-for="where_solve_domain in whereSolveList"\n                    :value="where_solve_domain"\n                >\n                    {{ where_solve_domain }}\n                </option>\n            </select>\n            <div class="where-solve-action">\n                <div class="where-solve-domain">\n                    <input\n                            type="text"\n                            placeholder="example.com"\n                            v-model="hostname"\n                            @input="refreshCurrentWhatSolveIndex"\n                            @change="refreshCurrentWhatSolveIndex"\n                            data-message-title="whereSolveHostnameTitle"\n                    >\n                    <input\n                            type="button"\n                            :value="this.currentWhatSolveIndex >= 0 ? 'Del' : 'Add'"\n                            @click="whereSolveAddRemoveHandler($event.target.dataset.action)" \n                            @keypress="enterPressReaction($event, whereSolveAddRemoveHandler.bind(this, $event.target.dataset.action))"\n                            :data-action="this.currentWhatSolveIndex >= 0 ? 'del' : 'add'"\n                            class="btn-primary"\n                            data-message-title="whereSolveAddHostname"\n                    >\n                </div>\n                <div class="where-solve-type">\n                    <div style="display: flex">\n                        <div data-message="whereSolveActLike">\n                            \x3c!-- Act like &nbsp; --\x3e\n                        </div>\n                        <div>\n                            <div style="white-space: nowrap; margin-bottom: 3px">\n                                <input\n                                        type="radio"\n                                        id="where_solve_list_type_black" \n                                        :value="false"\n                                        v-model="whereSolveWhiteListType"\n                                /><label\n                                        for="where_solve_list_type_black" \n                                        data-message="whereSolveActLikeBlackList"\n                                        data-message-title="whereSolveActLikeBlackListTitle"\n                                >\x3c!-- &nbsp;Black list --\x3e</label>\n                            </div>\n                            <div style="white-space: nowrap">\n                                <input\n                                        type="radio"\n                                        id="where_solve_list_type_white"\n                                        :value="true"\n                                        v-model="whereSolveWhiteListType"\n                                /><label\n                                        for="where_solve_list_type_white" \n                                        data-message="whereSolveActLikeWhiteList"\n                                        data-message-title="whereSolveActLikeWhiteListTitle"\n                                >\x3c!-- &nbsp;White list --\x3e</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span\n                class="where-solve-attention"\n                v-if="whereSolveWhiteListType && (!whereSolveList || !whereSolveList.length)"\n                data-message="whereSolveAttention"\n        >\n            \x3c!-- Attention: White list is empty, no captcha will be solved on any domain. --\x3e\n        </span>\n    </fieldset>\n    `,
    props: ["where_solve_list", "where_solve_white_list_type"],
    data() {
      return {
        whereSolveWhiteListType: undefined,
        currentWhatSolveIndex: -1,
        hostname: "",
        whereSolveList: undefined,
      };
    },
    methods: {
      whereSolveSelectHandler(e) {
        this.currentWhatSolveIndex = e.target.selectedIndex;
      },
      whereSolveAddRemoveHandler(e) {
        if (e === "add") {
          var t = this.hostname;
          if (t.indexOf("http://") === 0 || t.indexOf("https://") === 0) {
            try {
              var n = parseUrl(t);
              if (n.hostname) {
                t = n.hostname;
              }
            } catch (e) {}
          }
          if (t.trim()) {
            this.whereSolveList.push(t.trim());
          }
          this.hostname = "";
        } else if (e === "del") {
          if (
            typeof this.whereSolveList[this.currentWhatSolveIndex] !==
            "undefined"
          ) {
            this.whereSolveList.splice(this.currentWhatSolveIndex, 1);
          }
          this.hostname = "";
          this.refreshCurrentWhatSolveIndex();
        }
      },
      refreshCurrentWhatSolveIndex() {
        this.currentWhatSolveIndex = this.whereSolveList.indexOf(
          this.hostname.trim()
        );
      },
    },
    watch: {
      currentWhatSolveIndex() {
        if (
          typeof this.whereSolveList[this.currentWhatSolveIndex] !== "undefined"
        ) {
          this.hostname = this.whereSolveList[this.currentWhatSolveIndex];
        }
        document.getElementById("where_solve_list").selectedIndex =
          this.currentWhatSolveIndex;
      },
      where_solve_white_list_type() {
        if (typeof this.where_solve_white_list_type !== "undefined") {
          this.whereSolveWhiteListType = this.where_solve_white_list_type;
        }
      },
      whereSolveWhiteListType() {
        this.$emit("set-where-solve-list-type", this.whereSolveWhiteListType);
      },
      where_solve_list(e) {
        if (
          typeof this.where_solve_list !== "undefined" &&
          typeof this.whereSolveList === "undefined"
        ) {
          this.whereSolveList = [...e];
        }
      },
      whereSolveList(e, t) {
        if (typeof t !== "undefined") {
          this.$emit("set-where-solve-list", this.whereSolveList);
        }
      },
    },
  });
  const de = new Vue({
    el: "#app",
    data: {
      accountKey: null,
      globalStatus: {},
      whyKeyBlockShow: false,
      errorMessage: null,
      balanceMessage: null,
      lowBalance: null,
      freeAttemptsMessage: null,
      newVersionMessage: null,
      currentTab: "main",
      quickAddProxy: false,
      quickAddProxyInput: "",
      user_proxy_protocolOptions: ["HTTP", "HTTPS", "SOCKS5", "SOCKS4"],
      statusMessage: null,
      statusMessageTimeout: null,
    },
    methods: {
      applyApiKey(e) {
        this.balanceMessage = null;
        this.lowBalance = null;
        this.freeAttemptsMessage = null;
        this.errorMessage = null;
        chrome.extension
          .getBackgroundPage()
          .saveOptions({ account_key: this.accountKey }, () => {
            this.showStatusMessage(chrome.i18n.getMessage("optionsSaved"));
          });
        e.preventDefault();
      },
      showStatusMessage(e) {
        if (typeof e === "string") {
          te("done", chrome.extension.getBackgroundPage().globalStatus);
        }
        this.statusMessage = e;
        if (this.statusMessageTimeout) {
          clearTimeout(this.statusMessageTimeout);
        }
        this.statusMessageTimeout = setTimeout(
          () => (this.statusMessage = null),
          1e3
        );
      },
      whyKeyToggle() {
        this.whyKeyBlockShow = !this.whyKeyBlockShow;
      },
      showErrorMessage(e) {
        if (e && e.trim()) {
          te("error", chrome.extension.getBackgroundPage().globalStatus);
        }
        this.errorMessage = e;
        this.balanceMessage = null;
      },
      showBalanceMessage(e) {
        if (typeof e === "number") {
          this.lowBalance = e < 10;
          e += " $";
        }
        this.balanceMessage = e;
      },
      refreshFreeAttemptsMessage() {
        if (
          chrome.extension.getBackgroundPage().globalStatus
            .profile_user_info === null
        ) {
          return;
        }
        var e =
          chrome.extension.getBackgroundPage().globalStatus
            .free_attempts_left_count;
        if (
          chrome.extension.getBackgroundPage().globalStatus.profile_user_info
        ) {
          this.freeAttemptsMessage =
            chrome.i18n.getMessage("freeAttemptsLeft", e + "") +
            (!e ? chrome.i18n.getMessage("getAntiCaptchaKey") : "");
        } else {
          if (e) {
            this.freeAttemptsMessage = chrome.i18n.getMessage(
              "getFreeAttempts",
              e + ""
            );
          } else {
            this.freeAttemptsMessage = null;
          }
        }
      },
      initNewVersionMessage() {
        var e =
          chrome.extension.getBackgroundPage().globalStatus.plugin_version;
        var t = chrome.runtime.id;
        var n =
          chrome.extension.getBackgroundPage().globalStatus
            .plugin_last_version_data;
        if (!n || typeof n.version === "undefined") {
          return;
        }
        var r = e < n.version;
        if (r) {
          var i = t === v || t.indexOf("{") === 0;
          var a;
          if (i) {
            a = chrome.i18n.getMessage("newVersionCrxAutoupdate");
          } else {
            a = chrome.i18n.getMessage(
              "newVersionZipDownloadLink",
              n.version + ""
            );
          }
          var o = chrome.i18n.getMessage("newVersionWhatsNewIndex");
          if (typeof n[o] !== "undefined") {
            a += chrome.i18n.getMessage("newVersionWhatsNew") + " " + n[o];
          }
          this.newVersionMessage = a;
        } else {
          this.newVersionMessage = null;
        }
      },
      setPrecacheKMin(e) {
        this.globalStatus.k_precached_solution_count_min = e;
      },
      setPrecacheKMax(e) {
        this.globalStatus.k_precached_solution_count_max = e;
      },
      setWhereSolveListType(e) {
        this.globalStatus.where_solve_white_list_type = e;
      },
      setWhereSolveList(e) {
        this.globalStatus.where_solve_list = e;
      },
      quickAddProxySwitch() {
        this.quickAddProxy = !this.quickAddProxy;
      },
      quickAddProxyGo() {
        var e = fe(this.quickAddProxyInput);
        if (!e.protocol) {
        } else {
          e.protocol = e.protocol.toUpperCase();
          if (e.protocol === "SOCKS") {
            e.protocol = "SOCKS5";
          }
          if (this.user_proxy_protocolOptions.indexOf(e.protocol) < 0) {
            e.protocol = "";
          }
        }
        this.globalStatus.user_proxy_protocol = e.protocol;
        this.globalStatus.user_proxy_login = e.username;
        this.globalStatus.user_proxy_password = e.password;
        this.globalStatus.user_proxy_server = e.hostname;
        this.globalStatus.user_proxy_port = e.port;
        this.quickAddProxyInput = "";
        this.quickAddProxySwitch();
        this.globalStatus.solve_proxy_on_tasks = true;
      },
      initSettings(e) {
        if (typeof e.account_key !== "undefined") {
          this.accountKey = e.account_key;
          delete e.account_key;
        }
        if (typeof e.options_current_tab === "string") {
          this.currentTab = e.options_current_tab;
          delete e.options_current_tab;
        }
        this.globalStatus = e;
      },
      initMessageListeners() {
        chrome.runtime.onMessage.addListener((e, t, n) => {
          if (e.type === "showMessage") {
            delete e.type;
            if (
              e.method &&
              e.method.match(/(show|refresh)[a-z]+Message/i) &&
              typeof this[e.method] == "function"
            ) {
              if (
                typeof e.arguments !== "undefined" &&
                Array.isArray(e.arguments)
              ) {
                this[e.method].apply(null, e.arguments);
              } else {
                this[e.method]();
              }
            }
          }
        });
      },
      translate(e) {
        return chrome.i18n.getMessage(e);
      },
    },
    watch: {
      globalStatus: {
        handler(e, t) {
          if (typeof t.enable !== "undefined") {
            chrome.extension.getBackgroundPage().saveOptions(
              this.globalStatus,
              () => {
                this.showStatusMessage(chrome.i18n.getMessage("optionsSaved"));
              },
              true
            );
          }
        },
        deep: true,
      },
      accountKey(e, t) {
        if (t === null && e !== null) {
          chrome.extension.getBackgroundPage().getAndRefreshAntigateBalance();
          return;
        }
        if (t !== e) {
          this.errorMessage = null;
        }
      },
      currentTab() {
        chrome.extension
          .getBackgroundPage()
          .saveOptions({ options_current_tab: this.currentTab }, () => {});
      },
    },
    updated() {
      ee();
      if (document.getElementById("recaptcha_precache_debug_link")) {
        document.getElementById("recaptcha_precache_debug_link").href =
          chrome.extension.getURL("/recaptcha_precache_debug.html");
      }
    },
    mounted() {
      chrome.runtime.sendMessage({ type: "getGlobalStatus" }, (e) => {
        ve(e);
        this.initMessageListeners();
        this.initSettings(e);
      });
      this.initNewVersionMessage();
    },
  });
  function ve(e) {
    if (chrome.extension.getBackgroundPage() == null) {
      chrome.extension.getBackgroundPage = function () {
        return {
          globalStatus: e,
          getAndRefreshAntigateBalance: function () {
            chrome.runtime.sendMessage({
              type: "getAndRefreshAntigateBalance",
            });
          },
          saveOptions: function (e, t) {
            chrome.runtime.sendMessage({ type: "saveOptions", options: e }, t);
          },
        };
      };
    }
  }
  function fe(e) {
    var t = {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      port: null,
    };
    var n = e.match(
      /(([a-z0-9]+)\:\/\/)?(([^:]*)\:([^:@]*))?@?([^:]*)\:([^:]*)/
    );
    if (n) {
      t.protocol = n[2];
      t.username = n[4];
      t.password = n[5];
      t.hostname = n[6];
      t.port = n[7];
    }
    return t;
  }
})();