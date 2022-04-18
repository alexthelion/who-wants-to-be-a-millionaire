import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
