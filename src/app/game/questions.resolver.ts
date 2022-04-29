import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {GameService} from './game.service';
import {QuestionModel} from './models/game.model';

@Injectable()
export class QuestionsResolver implements Resolve<QuestionModel[]> {
  constructor(private gameService: GameService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<QuestionModel[]> {
    return this.gameService.fetchQuestions();
  }
}
