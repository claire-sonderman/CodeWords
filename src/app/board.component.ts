import { Component, OnInit, Input } from '@angular/core';
import {Game} from './game';



@Component({
    selector: 'board',
    templateUrl: 'board.component.html'
})

export class BoardComponent {
    @Input() game: Game
    
}