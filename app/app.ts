/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// Add click handler to the start game button.
document.getElementById('startGame')!.addEventListener(
    'click',
    () => {
        const player: Player = new Player();
        player.name = Utility.getInputValue('playerName');

        const problemCount: number = Number(Utility.getInputValue('problemCount'));
        const factor: number = Number(Utility.getInputValue('factor'));

        newGame = new Game(player, problemCount, factor);
        newGame.displayGame();
    }
);

// Add click handler to calculate score button.
document.getElementById('calculate')!.addEventListener(
    'click',
    () => newGame.calculateScore()
);