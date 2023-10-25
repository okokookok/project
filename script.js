const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");


sendButton.addEventListener("click", function () {
    const userMessage = userInput.value;


    // Display user message in the chat log
    displayMessage("You", userMessage);


    // Simulate an API call to get medication recommendations
    const medications = getMedicationRecommendations(userMessage);
    displayMessage("AI DRUGCHAT", `Based on your symptom, we recommend: ${medications.join(', ')}`);


    userInput.value = ""; // Clear the input field
});


function getMedicationRecommendations(symptom) {
    // Simulate a simple mapping of symptoms to medications
    const recommendations = {
        "headache": ["Aspirin", "Ibuprofen"],
        "fever": ["Acetaminophen", "Paracetamol"],
        "cough": ["Decongestants:"],
        "Eye irritation": ["Aspirin", "Ibuprofen"],
        "Runny nose": ["Decongestants"],
        "stuffy nose": ["Decongestants"],
        "sneezing": ["Allergy shots"],
       
    };


    // Return the recommendations for the provided symptom
    return recommendations[symptom.toLowerCase()] || ["No recommendations available"];
}


function displayMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
}
