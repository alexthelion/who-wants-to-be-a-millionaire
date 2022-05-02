import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {GameDetailsModel, QuestionModel} from '../../game/models/game.model';

export enum GameDetailsModelActionTypes {
  LoadGameDetailsModels = '[GameDetailsModel] Load GameDetailsModels',
  AddGameDetailsModel = '[GameDetailsModel] Add GameDetailsModel',
  UpsertGameDetailsModel = '[GameDetailsModel] Upsert GameDetailsModel',
  AddGameDetailsModels = '[GameDetailsModel] Add GameDetailsModels',
  UpsertGameDetailsModels = '[GameDetailsModel] Upsert GameDetailsModels',
  UpdateGameDetailsModel = '[GameDetailsModel] Update GameDetailsModel',
  UpdateGameDetailsModels = '[GameDetailsModel] Update GameDetailsModels',
  DeleteGameDetailsModel = '[GameDetailsModel] Delete GameDetailsModel',
  DeleteGameDetailsModels = '[GameDetailsModel] Delete GameDetailsModels',
  ClearGameDetailsModels = '[GameDetailsModel] Clear GameDetailsModels',
  SetCurrentGameDetailsModel = '[GameDetailsModel] Set Current GameDetailsModel',
  LoadQuestions = '[GameDetailsModel] Load Questions'
}

export class LoadQuestions implements Action {
  readonly type = GameDetailsModelActionTypes.LoadQuestions;
  constructor(public payload: {username: string}) {
  }
}

export class LoadGameDetailsModels implements Action {
  readonly type = GameDetailsModelActionTypes.LoadGameDetailsModels;

  constructor(public payload: { gameDetailsModels: GameDetailsModel[] }) {}
}

export class AddGameDetailsModel implements Action {
  readonly type = GameDetailsModelActionTypes.AddGameDetailsModel;

  constructor(public payload: { gameDetailsModel: GameDetailsModel }) {}
}

export class UpsertGameDetailsModel implements Action {
  readonly type = GameDetailsModelActionTypes.UpsertGameDetailsModel;

  constructor(public payload: { gameDetailsModel: GameDetailsModel }) {}
}

export class AddGameDetailsModels implements Action {
  readonly type = GameDetailsModelActionTypes.AddGameDetailsModels;

  constructor(public payload: { gameDetailsModels: GameDetailsModel[] }) {}
}

export class UpsertGameDetailsModels implements Action {
  readonly type = GameDetailsModelActionTypes.UpsertGameDetailsModels;

  constructor(public payload: { gameDetailsModels: GameDetailsModel[] }) {}
}

export class UpdateGameDetailsModel implements Action {
  readonly type = GameDetailsModelActionTypes.UpdateGameDetailsModel;

  constructor(public payload: { gameDetailsModel: Update<GameDetailsModel> }) {}
}

export class UpdateGameDetailsModels implements Action {
  readonly type = GameDetailsModelActionTypes.UpdateGameDetailsModels;

  constructor(public payload: { gameDetailsModels: Update<GameDetailsModel>[] }) {}
}

export class DeleteGameDetailsModel implements Action {
  readonly type = GameDetailsModelActionTypes.DeleteGameDetailsModel;

  constructor(public payload: { id: string }) {}
}

export class DeleteGameDetailsModels implements Action {
  readonly type = GameDetailsModelActionTypes.DeleteGameDetailsModels;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearGameDetailsModels implements Action {
  readonly type = GameDetailsModelActionTypes.ClearGameDetailsModels;
}

export class SetCurrentGameDetailsModel implements Action {
  readonly type = GameDetailsModelActionTypes.SetCurrentGameDetailsModel;

  constructor(public payload: { gameDetailsModel: GameDetailsModel }) {}
}

export type GameDetailsModelActions =
 LoadGameDetailsModels
 | AddGameDetailsModel
 | UpsertGameDetailsModel
 | AddGameDetailsModels
 | UpsertGameDetailsModels
 | UpdateGameDetailsModel
 | UpdateGameDetailsModels
 | DeleteGameDetailsModel
 | SetCurrentGameDetailsModel
 | DeleteGameDetailsModels
 | ClearGameDetailsModels;
