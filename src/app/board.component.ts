import { Component, OnInit } from '@angular/core';
import {Game} from './game';
import {GameService} from './gameService';

@Component({
    selector: 'board',
    templateUrl: 'board.component.html'
})

export class BoardComponent {
    wordsArray: string[];
    colorsArray: string[];
    game: Game;

    constructor(private service: GameService) {
        this.wordsArray = this.service.getWordsArray();
        this.colorsArray = this.service.getColorsArray();
        this.game = new Game(this.wordsArray, this.colorsArray);
    }
    
}