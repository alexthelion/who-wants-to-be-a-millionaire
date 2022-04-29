import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {GameDetailsModel, QuestionModel} from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameDetails: GameDetailsModel;

  constructor(private httpClient: HttpClient) {
  }

  createGameDetails(username: string): void {
    this.gameDetails = new GameDetailsModel(new Date().getMilliseconds().toString(), username, new Date());
  }

  getGameDetails(): GameDetailsModel {
    return this.gameDetails;
  }

  fetchQuestions(): Observable<QuestionModel[]> {
    return this.httpClient.get('https://opentdb.com/api.php?amount=10&type=multiple').pipe(
      map((response: any) => response.results)
    );
  }

}
