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
  }

}
