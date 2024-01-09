function getBotResponse(input) {
    // rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there! How's your day going?";
    } else if (input == "goodbye") {
        return "Talk to you later! If you have more questions, feel free to ask.";
    } else if (input == "moreinfo") {
        let moreInfoUrl = "https://www.ndtv.com/";
        return "For more information, please visit: <a href='https://www.ndtv.com/" + moreInfoUrl + "' target='_blank'>" + moreInfoUrl + "</a>";
    } else if (input == "joke") {
        return getJoke();
    } else if (input.toLowerCase().includes("prime minister of india")) {
        return "As of my last update in January 2022, the Prime Minister of India is Narendra Modi. Any political news you're curious about?";
    } else if (input.toLowerCase().includes("capital of france")) {
        return "The capital of France is Paris. Ever been to the 'City of Love' virtually?";
    } else if (input.toLowerCase().includes("largest mammal")) {
        return "The blue whale is the largest mammal on Earth. Imagine swimming alongside one of those giants!";
    } else if (input.toLowerCase().includes("tell me a fun fact")) {
        return "Sure! Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!";
    } else if (input.toLowerCase().includes("favorite color")) {
        return "I don't have a favorite color, but I think chatbot gray is pretty cool. What's your favorite color?";
    } else if (input.toLowerCase().includes("tell me a story")) {
        return "Once upon a time in the digital realm, there was a chatbot named ChatGPT. ChatGPT loved chatting with users and answering questions. One day, a curious user asked for a story, and ChatGPT happily obliged...";
    } else if (input.toLowerCase().includes("favorite book")) {
        return "I don't have a favorite book, but I've read a lot of digital pages! What's your favorite book?";
    } else if (input.toLowerCase().includes("tech news")) {
        return "I'm up-to-date with the latest tech news! Anything specific you're interested in?";
    } else if (input.toLowerCase().includes("shop")) {
        return "Great! What type of product are you looking for? Feel free to specify a category, and I'll help you find something.";
    } else if (input.toLowerCase().includes("buy")) {
        return "Awesome! Ready to make a purchase. What product would you like to buy, and do you have any preferences?";
    } else if (input.toLowerCase().includes("payment")) {
        return "Sure thing! We accept various payment methods, including credit cards, PayPal, and more. Is there a specific payment method you prefer?";
    } else {
        return "I'm not sure about that. Ask me something else, or let's chat about something fun!";
    }
}

// Example usage
console.log(getBotResponse('hello'));
console.log(getBotResponse('tell me a fun fact'));
console.log(getBotResponse('favorite color'));
console.log(getBotResponse('who is the Prime Minister of India?'));
console.log(getBotResponse('capital of France'));
console.log(getBotResponse('largest mammal'));
console.log(getBotResponse('tell me a joke'));
console.log(getBotResponse('random question'));
console.log(getBotResponse('tell me a story'));
console.log(getBotResponse('favorite book'));
console.log(getBotResponse('tech news'));
console.log(getBotResponse('shop'));
console.log(getBotResponse('buy'));
console.log(getBotResponse('payment'));
