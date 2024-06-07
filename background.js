// chrome.action.onClicked.addListener((tab) => {
//   if (tab.url.includes("mail.google.com")) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: modifyGmailContent,
//     });
//   }
// });

// function modifyGmailContent() {
//   // Function to change the author name and message
//   const spanElements = document.querySelectorAll("span[email]");

//   spanElements.forEach((span) => {
//     // Modify the author name
//     span.textContent = "New Author Name";
//     // If needed, modify other elements or the message content here
//   });
// }
chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("mail.google.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {}
      });
    }
  });
  