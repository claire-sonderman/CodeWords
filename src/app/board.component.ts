import { Component, OnInit } from '@angular/core';
import {Game} from './game';

@Component({
    selector: 'board',
    templateUrl: 'board.component.html'
    
})

export class BoardComponent {
    game = new Game();
}