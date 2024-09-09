// Only redirect if the current page is the root
if (window.location.pathname === "/") {
    window.location.replace("https://skincentric.us");
}

// Optional: Sanitize input example (if needed)
function sanitizeAndDisplay() {
    var userInput = document.getElementById('userInput').value;
    var sanitizedInput = DOMPurify.sanitize(userInput);
    document.getElementById('output').innerHTML = sanitizedInput;
}
