const message = "Thank you for submitting your message to the Royal Kingdom of Colchis. Hermes and his crew will respond shortly."

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
});