import { Component } from '@angular/core';
import {GameService} from './gameService';
import {CardDetails} from './CardDetails';
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
                this.colorsArray = this.service.getColorsArray();
                this.game = new Game(this.wordsArray, this.colorsArray);
            },
            error => this.error);

    }

  
}
