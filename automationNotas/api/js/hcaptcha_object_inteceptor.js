var __hcaptchaInitParameters = {
  responses: { lastSolution: null },
  params: { lastParams: null },
  challenge_shown: {},
  callback_called: {},
};
(function () {
  var a = {};
  if (
    document.currentScript &&
    document.currentScript.dataset &&
    document.currentScript.dataset["parameters"]
  ) {
    try {
      a = JSON.parse(document.currentScript.dataset["parameters"]);
    } catch (o) {}
  }
  if (
    a.originalHcaptchaApiUrl &&
    a.currentHcaptchaApiUrl &&
    a.originalHcaptchaApiUrl !== a.currentHcaptchaApiUrl
  ) {
    var e = document.getElementsByTagName("script");
    for (var t in e) {
      if (e[t].src === a.originalHcaptchaApiUrl) {
        e[t].src = a.currentHcaptchaApiUrl;
        break;
      }
    }
  } else {
  }
  var r = a.currentOnloadMethodName;
  var c = a.originalOnloadMethodName;
  if (r) {
    function n() {
      var a;
      if (typeof window[r] === "function") {
        a = window[r];
      }
      window[r] = function () {
        var e = hcaptcha.render;
        var t = hcaptcha.execute;
        var r = hcaptcha.getRespKey;
        hcaptcha.render = function (a, t) {
          if (t && typeof t.callback == "function") {
            var r = t.callback;
            t.callback = function () {
              r.apply(this, arguments);
            };
          }
          var c = e.apply(this, arguments);
          __hcaptchaInitParameters.params.lastParams = t;
          __hcaptchaInitParameters.params[c] = t;
          return c;
        };
        var c = hcaptcha.getResponse;
        hcaptcha.getResponse = function (a) {
          if (typeof __hcaptchaInitParameters["responses"][a] !== "undefined") {
            return __hcaptchaInitParameters["responses"][a];
          } else if (__hcaptchaInitParameters["responses"]["lastSolution"]) {
            return __hcaptchaInitParameters["responses"]["lastSolution"];
          } else if (typeof c === "function") {
            var e = c.apply(this, arguments);
            return e;
          }
        };
        hcaptcha.execute = function (a, e) {
          var r = t.apply(this, arguments);
          if (r && typeof r.then === "function") {
            return new Promise((e) => {
              __hcaptchaInitParameters.params[a].promise_resolver = e;
            });
          }
          return r;
        };
        hcaptcha.getRespKey = function () {
          var a = r.apply(this, arguments);
          return a;
        };
        if (typeof a === "function") {
          a.apply(this, arguments);
        }
      };
    }
    if (!c || typeof window[r] !== "undefined") {
      n();
    } else {
      var s = setInterval(function () {
        if (typeof window[r] === "undefined") {
          return;
        }
        clearInterval(s);
        n();
      }, 1);
    }
  }
  window.addEventListener("message", function (a) {
    if (
      !a.data ||
      typeof a.data.receiver == "undefined" ||
      a.data.receiver !== "hcaptchaObjectInterceptor"
    ) {
      return;
    }
    var e = a.data;
    if (e.type === "hcaptchaTaskSolution") {
      __hcaptchaInitParameters["responses"][e.widgetID] = e.taskSolution;
      __hcaptchaInitParameters["responses"]["lastSolution"] = e.taskSolution;
      i(e.widgetID);
    } else if (e.type === "hcaptchaChallengeShown") {
      __hcaptchaInitParameters.challenge_shown[e.widgetID] = true;
      i(e.widgetID);
    }
  });
  window.addEventListener("message", function (a) {
    if (!a.data || typeof a.data !== "string") {
      return;
    }
    var e = null;
    try {
      e = JSON.parse(a.data);
    } catch (a) {}
    if (!e) {
      return;
    }
    if (e.source !== "hcaptcha") {
      return;
    }
    if (e.label === "challenge-ready") {
      __hcaptchaInitParameters.challenge_shown[e.id] = true;
      i(e.id);
    }
  });
  function i(e) {
    if (
      (!a.runExplicitInvisibleHcaptchaCallbackWhenChallengeShown ||
        __hcaptchaInitParameters.challenge_shown[e]) &&
      __hcaptchaInitParameters.responses[e] &&
      !__hcaptchaInitParameters.callback_called[e]
    ) {
      p(e);
    }
  }
  function p(a) {
    h(a);
    var e = __hcaptchaInitParameters.responses[a];
    if (__hcaptchaInitParameters.params[a].promise_resolver) {
      __hcaptchaInitParameters.params[a].promise_resolver({
        response: e,
        key: hcaptcha.getRespKey(a),
      });
    }
    if (
      a &&
      __hcaptchaInitParameters.responses[a] &&
      __hcaptchaInitParameters.params[a] &&
      __hcaptchaInitParameters.params[a].callback
    ) {
      var t = __hcaptchaInitParameters.params[a].callback;
      if (typeof t === "function") {
        t(e);
        __hcaptchaInitParameters.callback_called[a] = true;
      } else if (typeof t === "string" && typeof window[t] === "function") {
        window[t](e);
        __hcaptchaInitParameters.callback_called[a] = true;
      }
    }
  }
  function h(a) {
    if (a && __hcaptchaInitParameters.responses[a]) {
      var e = document.getElementById("g-recaptcha-response-" + a);
      var t = document.getElementById("h-captcha-response-" + a);
      if (e) {
        e.value = __hcaptchaInitParameters.responses[a];
      }
      if (t) {
        t.value = __hcaptchaInitParameters.responses[a];
      }
    }
  }
})();