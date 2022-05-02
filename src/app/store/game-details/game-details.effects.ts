import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {GameService} from '../../game/game.service';
import {map, mergeMap, Observable} from 'rxjs';
import {
  GameDetailsModelActionTypes,
  LoadQuestions,
  SetCurrentGameDetailsModel,
  UpsertGameDetailsModel
} from './game-details-model.actions';
import {GameDetailsModel, QuestionModel} from '../../game/models/game.model';

@Injectable()
export class GameDetailsEffects {

  loadQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(GameDetailsModelActionTypes.LoadQuestions),
    mergeMap((action: LoadQuestions) =>
      this.gameService.fetchQuestions().pipe(
        map((questions: any) => {
          const newGameDetailsModel = new GameDetailsModel(new Date().getMilliseconds().toString(), action.payload.username, new Date());
          newGameDetailsModel.questions = questions.map(q => {
            return new QuestionModel(q.category, q.difficulty, q.question, q.correct_answer, q.incorrect_answers);
          });
          newGameDetailsModel.questions.forEach(question => question.randomSort());
          return new SetCurrentGameDetailsModel({gameDetailsModel: newGameDetailsModel});
        })
      ))
  ));

  constructor(private actions$: Actions, private gameService: GameService) {}

}
