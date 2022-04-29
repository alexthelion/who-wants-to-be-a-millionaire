export class GameDetailsModel {
  constructor(public id: string, public username: string, public date: Date,
              public skippedCounter: number = 0, public wrongAnswersCounter: number = 0, public questions?: QuestionModel[]) {
  }
}

export class QuestionModel {
  constructor(public category: string, public difficulty: string,
              public question: string, public correct_answer: string, public incorrect_answers: string[] = []) {
  }
}
