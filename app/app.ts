function startGame() {
    // Starting a new game.
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting a new game.');
}

document.getElementById('startGame').addEventListener('click', startGame);