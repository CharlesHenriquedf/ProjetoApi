if (typeof navigator.webdriver !== "undefined" && navigator.webdriver) {
  try {
    delete Object.getPrototypeOf(navigator).webdriver;
  } catch (e) {
    Object.defineProperty(navigator, "webdriver", {
      get: function () {
        return false;
      },
    });
  }
}