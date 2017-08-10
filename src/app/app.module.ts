import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './titleBar.component';
import { SideBarComponent } from './sideBar.component';
import { BoardComponent } from './board.component';
import { CardComponent } from './card.component';
import { GameService } from './gameService'

@NgModule({
  declarations: [
    AppComponent, TitleBarComponent, SideBarComponent, BoardComponent, CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
