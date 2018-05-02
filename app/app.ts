function startGame() {
    // Starting a new game.
    const playerName: string = 'Audrey';
    logPlayer(playerName);

    const messagesElement: HTMLElement | null = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
    console.log(`Starting a new game for player: ${name}.`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);