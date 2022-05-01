export class GameDetailsModel {
  constructor(public id: string, public username: string, public date: Date,
              public skippedCounter: number = 0, public wrongAnswersCounter: number = 0, public questions?: QuestionModel[]) {
  }

  get score(): number {
    return ((!!this.questions ? this?.questions?.length : 10) - this.skippedCounter - this.wrongAnswersCounter) * 10;
  }
}

export class QuestionModel {
  private _questions: string[] = [];
  constructor(public category: string, public difficulty: string,
              public question: string, public correct_answer: string, public incorrect_answers: string[] = []) {
  }

  randomSort(): QuestionModel[] {
    this._questions = [];
    this._questions.push(...this.incorrect_answers);
    this._questions.push(this.correct_answer);
    return this.shuffle(this._questions);
  }

  get answers(): string[] {
    return this._questions;
  }

  private shuffle(array): [] {
    return array.sort(() => Math.random() - 0.5);
  }
}
