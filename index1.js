const gtts = require('gtts'); // Initialize with desired language
const { Readable } = require('stream');
const Speaker = require('speaker');

// Create an in-memory buffer (stream)
const audioBuffer = new Readable();
audioBuffer._read = () => {}; // Define a dummy _read function

// Generate audio using gTTS (replace with your actual text)
const textToConvert = 'Hello, World.';
const tts = new gtts(textToConvert, 'en');
tts.save('audio.mp3', (err) => {
    if (err) {
        console.error('Error generating audio:', err);
        return;
    }
    console.log('Audio generated successfully.');
    // Read the saved audio file into the buffer
    const fs = require('fs');
    const audioData = fs.readFileSync('audio.mp3');
    audioBuffer.push(audioData);
    audioBuffer.push(null); // Signal end of data

    // Initialize the speaker
    const speaker = new Speaker();

    // Pipe the audio buffer to the speaker
    audioBuffer.pipe(speaker);

    // Handle any errors
    speaker.on('error', (err) => {
        console.error('Error playing audio:', err);
    });
    console.log('Audio playback started.');
});