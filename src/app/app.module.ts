import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {HttpClientModule} from '@angular/common/http';
import {GameModule} from './game/game.module';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {metaReducers, reducers} from './store/app.reducer';
import { GameDetailsEffects } from './store/game-details/game-details.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GameModule,
    MdbFormsModule,
    MdbAccordionModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([GameDetailsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
