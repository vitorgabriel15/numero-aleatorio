const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const chute = document.getElementById ('chute')

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt=br'
    recognition.start()

    recognition.addEventlisterner