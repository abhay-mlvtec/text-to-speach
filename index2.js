const gtts = require('node-gtts')('en');
const Speaker = require('speaker');
const stream = require('stream');

// Synthesize speech from text
const text = 'Hello, this is a test message!.Play Again';
const ttsStream = gtts.stream(text);

// Prepare a speaker instance to play the synthesized speech
const speaker = new Speaker({
  channels: 1, // Mono audio
  bitDepth: 16,
  sampleRate: 48000 // Make sure this matches the TTS output sample rate
});

//Pipe the TTS stream directly to the speaker to play it
ttsStream.pipe(speaker);

// Optional: Listen for events
ttsStream.on('end', () => console.log('TTS playback finished.'));
speaker.on('error', (error) => console.error('Playback error:', error));