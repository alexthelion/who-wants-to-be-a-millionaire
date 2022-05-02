import { Component, OnInit } from '@angular/core';
import {GameService} from '../game/game.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducer';
import {LoadQuestions} from '../store/game-details/game-details-model.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gameService: GameService,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  createGame(username: string): void {
    this.store.dispatch(new LoadQuestions({username: username}));
    setTimeout(() => this.router.navigateByUrl('game'), 2000);
  }
}
