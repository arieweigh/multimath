import { Result } from './result';

import * as _ from 'lodash';

export class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
        let playerNameUpperCase = _.upperCase(newResult.playerName);
        console.log(`${playerNameUpperCase}: ${newResult.score}`);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        // Loop over all results and form HTML string for the scoreboard.
        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += `${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}`;
            output += '</h4>';
        }

        // Add the updates scoreboard to the page.
        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}
