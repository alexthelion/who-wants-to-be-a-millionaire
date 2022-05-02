import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGameDetails from './game-details/game-details-model.reducer';

export interface AppState {
  games: fromGameDetails.State
}

export const reducers: ActionReducerMap<AppState> = {
  games: fromGameDetails.reducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
