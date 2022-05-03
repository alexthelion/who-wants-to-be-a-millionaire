import {Component, OnInit} from '@angular/core';
import {GameService} from '../game/game.service';
import {GameDetailsModel} from '../game/models/game.model';
import {Store} from '@ngrx/store';

import {tap} from 'rxjs';
import {selectAllGameDetails, selectAllGameDetailsSortedByHighScore} from '../store/game-details';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  gameDetailsArray: GameDetailsModel[] = [];

  constructor(private gameService: GameService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectAllGameDetailsSortedByHighScore).pipe(
      tap(result => {
        this.gameDetailsArray = result;
        }))
      .subscribe()
  }
}
