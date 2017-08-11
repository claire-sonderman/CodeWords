import { Component, OnInit, Input } from '@angular/core';
import { Cell, Game } from "./game"

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})

export class CardComponent implements OnInit {
    constructor() { }
    @Input() cell: Cell;
    @Input() game: Game;
    onClick() {
        if (!this.game.lose && !this.game.win) {
            this.cell.select();
            switch (this.cell.color) {
                case 'x':
                    this.game.lose = true;
                    break;
                case 'b':
                    if (this.game.bluePoints < 7) {
                        this.game.bluePoints += 1;
                    }
                    else {
                        this.game.bluePoints += 1;
                        this.game.win = true;
                    }
                    break;
                case 'r':
                    if (this.game.redPoints < 8) {
                        this.game.redPoints += 1;
                        console.log(this.game.redPoints);
                    }
                    else {
                        this.game.redPoints += 1;
                        this.game.win = true;
                    }
                    break;
            }
        }

    }
    ngOnInit() { }
}