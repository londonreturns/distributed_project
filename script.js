$(document).ready(function () {
  // Handle send button click
  $("#sendButton").click(function () {
    sendMessage();
  });

  // Handle Enter key press in input field
  $("#messageInput").keypress(function (e) {
    if (e.which === 13) {
      sendMessage();
    }
  });

  function sendMessage() {
    const messageInput = $("#messageInput");
    const message = messageInput.val().trim();

    if (message) {
      // Add message to chat
      const messageHtml = `
                <div class="card mb-2">
                    <div class="card-body">
                        <h6 class="card-title text-primary">You</h6>
                        <p class="card-text">${message}</p>
                        <small class="text-muted">${new Date().toLocaleTimeString()}</small>
                    </div>
                </div>
            `;

      $("#chatMessages").append(messageHtml);

      // Clear input and scroll to bottom
      messageInput.val("");
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    const chatMessages = $("#chatMessages");
    chatMessages.scrollTop(chatMessages[0].scrollHeight);
  }

  // Initialize
  console.log("Distributed Chat initialized with Bootstrap and jQuery");
});
