(function () {
  var e = 100;
  var a = 5e3;
  var s = false;
  var n = [];
  var o = [];
  window.postMessagePosteRestante = function (o, t, i, d) {
    s &&
      console.log(
        "Post message Poste Restante init",
        t,
        window ? window.location.href : ""
      );
    var r = { __receiver: o, __messageId: Math.random() };
    r = Object.assign(t, r);
    var l = setInterval(function () {
      s && console.log("Sending original message", r);
      window.postMessage.call(this, r, i, d);
    }, e);
    n[r.__messageId] = l;
    setTimeout(function () {
      if (typeof n[r.__messageId] !== "undefined") {
        s &&
          console.log(
            "Clearing interval by timeout for message",
            r.__messageId
          );
        clearInterval(n[r.__messageId]);
        delete n[r.__messageId];
      }
    }, a);
    s && console.log("messagePostingIntervals", n);
  };
  window.receiveMessagePosteRestante = function (e, a) {
    s &&
      console.log(
        "Subscribing receiver",
        e,
        window ? window.location.href : ""
      );
    if (typeof o[e] === "undefined") {
      o[e] = [];
    }
    o[e].push(a);
    s && console.log("receiverCallbacks", o);
  };
  window.addEventListener("message", function (e) {
    s && console.log("Poste Restante incoming event", e);
    if (
      e.data &&
      typeof e.data.__receiver !== "undefined" &&
      typeof e.data.__messageId !== "undefined"
    ) {
      s && console.log("It's an Original message for", e.data.__receiver);
      if (typeof o[e.data.__receiver] !== "undefined") {
        s && console.log("Receiver exists, calling callbacks");
        for (var a in o[e.data.__receiver]) {
          if (typeof o[e.data.__receiver][a] === "function") {
            o[e.data.__receiver][a](e);
          }
        }
        s &&
          console.log("Sending a Confirmation message for", e.data.__receiver);
        e.source.postMessage({ __messageId: e.data.__messageId }, e.origin);
      } else {
        s && console.log("Receiver does not exist");
      }
      return;
    }
    if (e.data && typeof e.data.__messageId !== "undefined") {
      s && console.log("It's a Confirmation message, clearing an interval");
      if (typeof n[e.data.__messageId] !== "undefined") {
        clearInterval(n[e.data.__messageId]);
        delete n[e.data.__messageId];
      }
    }
  });
})();