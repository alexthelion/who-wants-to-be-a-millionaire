import {Component, OnInit} from '@angular/core';
import {GameDetailsModel, QuestionModel} from './models/game.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questionIndex = 0;
  currentQuestion: QuestionModel;
  currentAnswer: string | undefined;
  currentCorrectIndex: number | undefined;
  correctAnswers = 0;
  wrongAnswers = 0;
  skippedQuestions = 0;
  gameDetails: GameDetailsModel;

  private questions: QuestionModel[];

  constructor(private route: ActivatedRoute, private gameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.questions = this.route.snapshot.data['questions'];
    this.gameDetails = this.gameService.getGameDetails();
    if (!this.gameDetails) {
      this.router.navigateByUrl('/');
    }
    this.gameDetails.questions = this.questions.map(q => {
      return new QuestionModel(q.category, q.difficulty, q.question, q.correct_answer, q.incorrect_answers);
    });
    this.gameDetails.questions.forEach(question => question.randomSort());
    this.currentQuestion = this.gameDetails.questions[this.questionIndex];
  }

  nextQuestion(): void {
    if (this.currentQuestion.correct_answer === this.currentAnswer) {
      this.correctAnswers += 1;
    } else {
      this.wrongAnswers += 1;
    }

    if (!!this.currentAnswer && this.questions.length > this.questionIndex) {
      this.currentQuestion = undefined;
      this.currentCorrectIndex = undefined;
      this.currentQuestion = this.gameDetails.questions[this.questionIndex++];
    } else {
      alert('Game Over');
      this.router.navigateByUrl('/');
    }
  }

  selectAnswer(answer: string): void {
    this.currentAnswer = answer;
    this.currentCorrectIndex = this.currentQuestion.answers.indexOf(this.currentQuestion.correct_answer);
  }

  skipQuestion(): void {
    this.skippedQuestions += 1;
    this.currentAnswer = '';
    this.nextQuestion();
  }

  get username(): string {
    return this.gameService.getGameDetails()?.username;
  }
}
