import { Component } from '@angular/core';
import { GameService } from './gameService';
import { CardDetails } from './CardDetails';
import { Game } from './game';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Code Words';
    wordsArray: string[];
    colorsArray: string[];
    game: Game;
    cardArray: Array<CardDetails>;
    // cards: Array<Card>;
    cards: string[];
    error: any

    constructor(private service: GameService) {
        this.wordsArray = this.service.getWordsArray();
        this.colorsArray = this.service.getColorsArray();
        this.game = new Game(this.wordsArray, this.colorsArray);
    }

    ngOnInit() {
        this.service.getData().then(
            response => {
                let data = response.json();
                for (var i = 0; i < 25; i++) {
                    this.wordsArray[i] = data[i].word;
                }
                this.wordsArray = this.wordsArray;
                var currentIndex = this.wordsArray.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = this.wordsArray[currentIndex];
                    this.wordsArray[currentIndex] = this.wordsArray[randomIndex];
                    this.wordsArray[randomIndex] = temporaryValue;
                }
                this.colorsArray = this.service.getColorsArray();
                this.game = new Game(this.wordsArray, this.colorsArray);
                var tempArray = this.colorsArray

                var one = tempArray.slice(0, 5).join(' ');
                var two = tempArray.slice(5, 10).join(' ');
                var three = tempArray.slice(10, 15).join(' ');
                var four = tempArray.slice(15, 20).join(' ');
                var five = tempArray.slice(20, 25).join(' ');

                this.game.key.push(one);
                this.game.key.push(two);
                this.game.key.push(three);
                this.game.key.push(four);
                this.game.key.push(five);
            },

            error => this.error);

    }


}
