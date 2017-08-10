import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './titleBar.component';
import { SideBarComponent } from './sideBar.component';
import { BoardComponent } from './board.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    AppComponent, TitleBarComponent, SideBarComponent, BoardComponent, CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
