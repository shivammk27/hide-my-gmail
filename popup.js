document.getElementById("hide-author").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab.url.includes("mail.google.com")) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: toggleAuthorVisibility,
      });
    }
  });
});

document.getElementById("hide-content").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab.url.includes("mail.google.com")) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: toggleContentVisibility,
      });
    }
  });
});

function toggleAuthorVisibility() {
  const spanElements = document.querySelectorAll("span[email]");
  spanElements.forEach((span) => {
    if (!span.dataset.originalAuthor) {
      span.dataset.originalAuthor = span.textContent;
      span.textContent = "Anonymous author";
    } else {
      const originalAuthor = span.dataset.originalAuthor;
      span.textContent =
        span.textContent === "Anonymous author"
          ? originalAuthor
          : "Anonymous author";
    }
  });
}

function toggleContentVisibility() {
  const contentElements = document.querySelectorAll("span[data-thread-id]");

  contentElements.forEach((content) => {
    if (
      content.textContent ===
      "Maybe the best thing to do is stop trying to figure out where you're going and just enjoy where you're at."
    ) {
      content.textContent = content.dataset.originalContent;
    } else {
      content.dataset.originalContent = content.textContent;
      content.textContent =
        "Maybe the best thing to do is stop trying to figure out where you're going and just enjoy where you're at.";
    }
  });
}
