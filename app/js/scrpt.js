document.getElementById('demoButton').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
    startSpeechRecognition();
});

function startSpeechRecognition() {
    console.log("Start recognition...");
    // AJOUTER: Code pour démarrer la reconnaissance vocale via WebSocket ou AJAX
}
