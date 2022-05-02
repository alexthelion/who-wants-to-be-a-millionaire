import {Component, OnInit} from '@angular/core';
import {GameService} from '../game/game.service';
import {GameDetailsModel} from '../game/models/game.model';
import {Store} from '@ngrx/store';

import {tap} from 'rxjs';
import {selectAllGameDetails} from '../store/game-details';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  gameDetailsArray: GameDetailsModel[] = [];

  constructor(private gameService: GameService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectAllGameDetails).pipe(
      tap(result => {
        this.gameDetailsArray = result;
        this.sortByHighestScore();
        }))
      .subscribe()
  }

  private sortByHighestScore(): void {
    this.gameDetailsArray = this.gameDetailsArray.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }

      if (a.score < b.score) {
        return 1;
      }

      return 0;
    });
  }
}
