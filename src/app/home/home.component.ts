import { Component, OnInit } from '@angular/core';
import {GameService} from '../game/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  createGame(username: string): void {
    this.gameService.createGameDetails(username);
    this.router.navigateByUrl('game');
  }
}
