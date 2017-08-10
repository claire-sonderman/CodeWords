import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game';

@Component({
    selector: 'side-bar',
    templateUrl: 'sideBar.component.html'
})

export class SideBarComponent {
    @Input() game: Game

    startTurnClicked(event) {
        console.log("clicked turn button");
        if (this.game.turn === "Red Start Turn") {
            this.game.turn = "Red End Turn";
            console.log("red turn");
        }
        if (this.game.turn === "Blue End Turn") {
            this.game.turn = "Red Start Turn";
        }
        if (this.game.turn === "Red End Turn") {
            this.game.turn = "Blue Start Turn";
            console.log("blue turn");
        }
        if (this.game.turn === "Blue Start Turn") {
            this.game.turn = "Blue End Turn";
            console.log("blue turn");
        }
    }



    resetClicked(event) {
        console.log("reset clicked");
    }
}