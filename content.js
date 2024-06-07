// Function to change the author name and message
function modifyGmailContent() {
  // Select all span elements with the email attribute
  const spanElements = document.querySelectorAll("span[email]");

  spanElements.forEach((span) => {
    // Modify the author name
    span.textContent = "New Author Name";

    // If you also need to modify message content and it's within the same span or another identifiable element,
    // you would need to adjust the logic accordingly.
    // For example, if the message is in another span within the same parent:
    // const messageElement = span.closest('.parent-class').querySelector('.message-class');
    // if (messageElement) {
    //   messageElement.textContent = "This is the new message content.";
    // }
  });
}

// Run the function to modify the content
modifyGmailContent();
