function startGame() {
    // Starting a new game.

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting a new game.');
}

function logPlayer(name) {
    console.log(`Starting a new game for player: ${name}.`);
}

document.getElementById('startGame').addEventListener('click', startGame);