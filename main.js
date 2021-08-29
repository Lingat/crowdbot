/***
 * CrowdBot
 * Created by Pierre Lingat on 30/08/21
 * A stupid idea to create a chatbot that learn from people
 */
// Get the input field
var chatInput = document.getElementById("chatInput");
var chatDisplay = document.getElementById("chatDisplay");

const ENTER = 13
console.log(chatDisplay)

// Returns a string of the chatbots response
function createResponse(userInput) {
    return "I don't understand what '" + userInput + "' means."
}
// Execute a function when the user releases enter
// Should trigger a response by our chatbot and append the users input 
// to the display
chatInput.addEventListener("keyup", function(event) {
  
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        chatDisplay.innerHTML += "<p><b>You:</b>" + chatInput.value + "</p>"
        // TODO: add delay
        chatDisplay.innerHTML += "<p><b>Bot:</b>" + createResponse(chatInput.value) + "</p>"
        chatInput.value = ""
    }
});