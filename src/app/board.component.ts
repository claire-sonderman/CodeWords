import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game';
import { GameService } from './gameService';
import { CardDetails } from './CardDetails';

@Component({
    selector: 'board',
    templateUrl: 'board.component.html'
})

export class BoardComponent {
    @Input() game: Game

    // constructor(private service: GameService) {
    //     this.wordsArray = this.service.getWordsArray();
    //     this.colorsArray = this.service.getColorsArray();
    //     this.game = new Game(this.wordsArray, this.colorsArray);
    // }

}