import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { GameDetailsModelActions, GameDetailsModelActionTypes } from './game-details-model.actions';
import {GameDetailsModel} from '../../game/models/game.model';

export const gameDetailsModelsFeatureKey = 'gameDetailsModels';

export interface State extends EntityState<GameDetailsModel> {
  // additional entities state properties
  currentGameDetailsModel: GameDetailsModel;
}

export const adapter: EntityAdapter<GameDetailsModel> = createEntityAdapter<GameDetailsModel>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  currentGameDetailsModel: undefined
});

export function reducer(
  state = initialState,
  action: GameDetailsModelActions
): State {
  switch (action.type) {
    case GameDetailsModelActionTypes.AddGameDetailsModel: {
      return adapter.addOne(action.payload.gameDetailsModel, state);
    }

    case GameDetailsModelActionTypes.UpsertGameDetailsModel: {
      return adapter.upsertOne(action.payload.gameDetailsModel, state);
    }

    case GameDetailsModelActionTypes.AddGameDetailsModels: {
      return adapter.addMany(action.payload.gameDetailsModels, state);
    }

    case GameDetailsModelActionTypes.UpsertGameDetailsModels: {
      return adapter.upsertMany(action.payload.gameDetailsModels, state);
    }

    case GameDetailsModelActionTypes.UpdateGameDetailsModel: {
      return adapter.updateOne(action.payload.gameDetailsModel, state);
    }

    case GameDetailsModelActionTypes.UpdateGameDetailsModels: {
      return adapter.updateMany(action.payload.gameDetailsModels, state);
    }

    case GameDetailsModelActionTypes.DeleteGameDetailsModel: {
      return adapter.removeOne(action.payload.id, state);
    }

    case GameDetailsModelActionTypes.DeleteGameDetailsModels: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case GameDetailsModelActionTypes.LoadGameDetailsModels: {
      return adapter.setAll(action.payload.gameDetailsModels, state);
    }

    case GameDetailsModelActionTypes.ClearGameDetailsModels: {
      return adapter.removeAll(state);
    }

    case GameDetailsModelActionTypes.SetCurrentGameDetailsModel: {
      return {...state, currentGameDetailsModel: action.payload.gameDetailsModel}
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of users
export const selectAllGameDetails = selectAll;
