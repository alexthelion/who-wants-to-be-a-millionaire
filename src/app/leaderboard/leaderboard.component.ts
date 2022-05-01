import { Component, OnInit } from '@angular/core';
import {GameService} from '../game/game.service';
import {GameDetailsModel} from '../game/models/game.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  gameDetailsArray: GameDetailsModel[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameDetailsArray = this.gameService.gameDetailsArray;
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
