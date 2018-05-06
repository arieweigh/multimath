import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

let newGame: Game;

// Add click handler to the start game button.
document.getElementById('startGame')!.addEventListener(
    'click',
    () => {
        const player: Player = new Player();
        player.name = Helpers.getValue('playerName');

        const problemCount: number = Number(Helpers.getValue('problemCount'));
        const factor: number = Number(Helpers.getValue('factor'));

        newGame = new Game(player, problemCount, factor);
        newGame.displayGame();
    }
);

// Add click handler to calculate score button.
document.getElementById('calculate')!.addEventListener(
    'click',
    () => newGame.calculateScore()
);