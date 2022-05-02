import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {GameDetailsModel, QuestionModel} from './models/game.model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducer';
import {SetCurrentGameDetailsModel, UpsertGameDetailsModel} from '../store/game-details/game-details-model.actions';
import {selectCurrentGameDetails} from '../store/game-details';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient, private store: Store<AppState>) {
    this.fillDemoGameDetailsArray();
  }

  fetchQuestions(): Observable<QuestionModel[]> {
    return this.httpClient.get('https://opentdb.com/api.php?amount=10&type=multiple').pipe(
      map((response: any) => response.results)
    );
  }

  gameOver(gameDetails: GameDetailsModel): void {
    this.store.dispatch(new UpsertGameDetailsModel({gameDetailsModel: gameDetails}));
    this.store.dispatch(new SetCurrentGameDetailsModel({gameDetailsModel: undefined}));
  }

  getCurrentGameDetails(): Observable<GameDetailsModel> {
    return this.store.select(selectCurrentGameDetails);
  }

  private fillDemoGameDetailsArray(): void {
    this.store.dispatch(new UpsertGameDetailsModel({gameDetailsModel:  new GameDetailsModel(new Date().getMilliseconds().toString(),
        'Adam', new Date(), 0, 3)}));
    this.store.dispatch(new UpsertGameDetailsModel({gameDetailsModel:  new GameDetailsModel(new Date().getMilliseconds().toString(),
        'James', new Date(), 2, 2)}));
    this.store.dispatch(new UpsertGameDetailsModel({gameDetailsModel:  new GameDetailsModel(new Date().getMilliseconds().toString(),
        'Kris', new Date(), 0, 1)}));
  }
}
