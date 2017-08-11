import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './gameService';
import { CardDetails } from './CardDetails';

@Component({
    selector: 'board',
    templateUrl: 'board.component.html'
})

export class BoardComponent {
    wordsArray: string[];
    colorsArray: string[];
    game: Game;
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
                this.colorsArray = this.service.getColorsArray();
                this.game = new Game(this.wordsArray, this.colorsArray);
            },
            error => this.error);

    }



    // constructor(private service: GameService) {
    //     this.wordsArray = this.service.getWordsArray();
    //     this.colorsArray = this.service.getColorsArray();
    //     this.game = new Game(this.wordsArray, this.colorsArray);
    // }

}