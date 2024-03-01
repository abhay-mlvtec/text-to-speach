// Connect to the server
const socket = io.connect();

// Listen for 'speech' events
socket.on('speech', (player) => {
  // Play the speech
  player.play();
});

// Function to send a message
function sendMessage() {
  const message = document.getElementById('message').value;
  socket.emit('message', message);
}
