import { Component, OnInit, Input } from '@angular/core';
import {Cell} from "./game"

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})

export class CardComponent implements OnInit {
    constructor() { }
    @Input()cell: Cell;
    onClick() {
        this.cell.select();
    }
    ngOnInit() { }
}