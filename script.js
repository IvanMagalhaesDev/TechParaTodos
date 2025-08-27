// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Toggle high contrast mode
document.getElementById('high-contrast-toggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// Handle feedback form submission
document.getElementById('submit-feedback').addEventListener('click', function() {
    const feedbackInput = document.getElementById('feedback-input');
    const feedbackText = feedbackInput.value.trim();
    if (feedbackText) {
        alert('Feedback enviado: ' + feedbackText);
        feedbackInput.value = ''; // Clear input after submission
    } else {
        alert('Por favor, insira um feedback.');
    }
});