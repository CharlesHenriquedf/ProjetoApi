var lastOriginalOnloadMethodName;
if (
  document.currentScript &&
  document.currentScript.dataset &&
  document.currentScript.dataset["originalCallback"]
) {
  try {
    lastOriginalOnloadMethodName = JSON.parse(
      document.currentScript.dataset["originalCallback"]
    );
  } catch (t) {}
}