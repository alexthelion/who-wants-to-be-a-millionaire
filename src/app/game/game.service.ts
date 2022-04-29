import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {QuestionModel} from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) {
  }

  fetchQuestions(): Observable<QuestionModel[]> {
    return this.httpClient.get('https://opentdb.com/api.php?amount=10&type=multiple').pipe(
      map((response: any) => response.results)
    );
  }

}
