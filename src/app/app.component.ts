import { Component } from '@angular/core';
import {GameService} from './gameService';
import {Game} from './game';

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

    constructor(private service: GameService) {
        this.wordsArray = this.service.getWordsArray();
        this.colorsArray = this.service.getColorsArray();
        this.game = new Game(this.wordsArray, this.colorsArray);
    }
  
}
