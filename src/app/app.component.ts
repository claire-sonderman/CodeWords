import { Component } from '@angular/core';
import {GameService} from './gameService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Words';
  words: Array<string>;
  error: any
  constructor(private service: GameService){
  }
  name: string;
  ngOnInit(){
  this.service.getData().then(
        response => {
          this.words = response.json();
        },
        error => this.error);

  }
  
}
