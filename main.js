/***
 * CrowdBot
 * Created by Pierre Lingat on 30/08/21
 * A stupid idea to create a chatbot that learn from people
 */
// Get the input field
var chatInput = document.getElementById("chatInput");
var chatDisplay = document.getElementById("chatDisplay");

const ENTER = 13
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
   
  if (event.keyCode === ENTER) {
    // Cancel the default action, if needed
    event.preventDefault();
    chatDisplay.append("<p> " + chatInput.value + "</p>")
    
    
  }
});