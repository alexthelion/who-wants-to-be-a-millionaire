import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsResolver} from './questions.resolver';

const routes: Routes = [
  {path: 'game', component: GameComponent, resolve: {questions: QuestionsResolver}}
]

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    QuestionsResolver
  ]
})
export class GameModule { }
