import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {GameDetailsModel, QuestionModel} from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _gameDetails: GameDetailsModel;
  private _gameDetailsArray: GameDetailsModel[] = [];

  constructor(private httpClient: HttpClient) {
  }

  createGameDetails(username: string): void {
    this._gameDetails = new GameDetailsModel(new Date().getMilliseconds().toString(), username, new Date());
  }

  get gameDetails(): GameDetailsModel {
    return this._gameDetails;
  }

  fetchQuestions(): Observable<QuestionModel[]> {
    return this.httpClient.get('https://opentdb.com/api.php?amount=10&type=multiple').pipe(
      map((response: any) => response.results)
    );
  }

  gameOver(): void {
    this.gameDetailsArray.push(this._gameDetails);
    this._gameDetails = undefined;
  }

  get gameDetailsArray(): GameDetailsModel[] {
    return this.gameDetailsArray;
  }

}
