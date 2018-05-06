/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame(): void {

        // Prepare the HTML for the current game.
        let gameForm: string = '';
        for (let problem = 1; problem <= this.problemCount; problem++) {
            gameForm += '<div class="form-group">';
            gameForm += `<label for="answer${problem}" class="col-sm-2 control-label">`;
            gameForm += `${this.factor} x ${problem} = </label>`;
            gameForm += `<div class="col-sm-1"><input type="text" class="form-control" id="answer${problem}" size="5" /></div>`;
            gameForm += '</div>';
        }

        // Add the new game to the page.
        const gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        // Enable the calculate score button.
        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {

        let score: number = 0;

        // Loop through the text boxes and calculate the number that are correct.
        for (let problem = 1; problem <= this.problemCount; problem++) {
            const answer: number = Number(Utility.getInputValue(`answer${problem}`));
            if (problem * this.factor === answer) {
                score++;
            }
        }

        // Create a new result object to pass to the scoreboard.
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        // Add the result and update the scoreboard.
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        // Disable the calculate score button.
        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}