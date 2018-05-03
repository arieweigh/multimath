function startGame() {
    // Starting a new game.
    const playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
    postScore(-5, playerName);
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return (inputElement.value === '') ? undefined : inputElement.value;
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`Starting a new game for player: ${name}.`);
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    const logger: (value: string) => void = score < 0 ? logError : logMessage;
    logger(`${score} - ${playerName}`);

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);
const logError = (message: string) => console.error(message);

const myResult: Result = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};

const player: Person = {
    name: 'Daniel',
    formatName: () => 'Dan'
}