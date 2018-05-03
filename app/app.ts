function startGame() {
    // Starting a new game.
    const playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`Starting a new game for player: ${name}.`);
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

function getInputValue(elementId: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return (inputElement.value === '') ? undefined : inputElement.value;
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);
logMessage('Welcome to MultiMath!');