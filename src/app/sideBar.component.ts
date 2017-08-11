import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'side-bar',
    templateUrl: 'sideBar.component.html'
})

export class SideBarComponent {

    startTurnClicked(event) {
        console.log("clicked turn button");
    }

    resetClicked(event) {
        location.reload();
        console.log("reset clicked");
    }
}