const hideText = "Show";
const hideColor = "#455a64";

function handleDifficultyTag(node) {
  const initialText = node.innerText;
  const initialColor = node.style.color;
  const initialBackgroundColor = node.style["background-color"];

  function revealTag() {
    node.innerText = initialText;
    node.style.color = initialColor;
    node.style["background-color"] = initialBackgroundColor;
  }

  function hideTag() {
    node.innerText = hideText;
    node.style.color = hideColor;
    node.style["background-color"] = "#ffffff";
  }

  hideTag();
  node.addEventListener("click", () => {
    if (node.innerText == initialText) {
      hideTag();
    } else {
      revealTag();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", afterDOMLoaded);
} else {
  afterDOMLoaded();
}

function afterDOMLoaded() {
  //Everything that needs to happen after the DOM has initially loaded.
  const easyTag = document.evaluate(
    "//div[text()='Easy']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  const mediumTag = document.evaluate(
    "//div[text()='Medium']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  const hardTag = document.evaluate(
    "//div[text()='Hard']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  const difficultyTag = easyTag || mediumTag || hardTag;

  if (difficultyTag) {
    handleDifficultyTag(difficultyTag);
  }
}
