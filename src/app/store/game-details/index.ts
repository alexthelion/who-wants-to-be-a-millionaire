import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromGameDetails from './game-details-model.reducer';
import {selectAll} from './game-details-model.reducer';

export interface State {
  users: fromGameDetails.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromGameDetails.reducer,
};

export const selectGamesState = createFeatureSelector<fromGameDetails.State>('games');

export const selectAllGameDetails = createSelector(
  selectGamesState,
  fromGameDetails.selectAllGameDetails
);

export const selectAllGameDetailsSortedByHighScore = createSelector(
  selectAllGameDetails,
  allGames => {
    return allGames.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }

      if (a.score < b.score) {
        return 1;
      }

      return 0;
    })
  }
);

export const selectCurrentGameDetails = createSelector(
  selectGamesState,
  state => state.currentGameDetailsModel
)
