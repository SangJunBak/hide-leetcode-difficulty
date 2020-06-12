const hideText = "Show";
const hideColor = "#455a64";

document.addEventListener("DOMContentLoaded", () => {
  const difficultyTag =
    document.querySelector('[diff="easy"]') ||
    document.querySelector('[diff="medium"]') ||
    document.querySelector('[diff="hard"]');
});

function handleDifficultyTag(node) {
  const initialText = node.innerText;
  const initialColor = node.style.color;

  function revealTag() {
    node.innerText = initialText;
    node.style.color = initialColor;
  }

  function hideTag() {
    node.innerText = hideText;
    node.style.color = hideColor;
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

var observer = new MutationObserver(function (mutations, me) {
  const difficultyTag =
    document.querySelector('[diff="easy"]') ||
    document.querySelector('[diff="medium"]') ||
    document.querySelector('[diff="hard"]');

  if (difficultyTag) {
    handleDifficultyTag(difficultyTag);
    me.disconnect();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
