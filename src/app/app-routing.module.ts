import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { QuizComponent } from 'src/app/components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'quiz', component: QuizComponent }, // Add the route for "quiz"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
